import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import { categories } from 'Root/routes';

import { useAxiosAuth } from 'Root/hooks/axiosAuth';

import CardImage from 'Components/CardImage';
import Loading from 'Components/Loading';
import Modal from 'Components/Modal';
import CSSTransitionEF from 'Components/CSSTransitionEF';

import { Container, ImagesList, Content, Nav } from './styles';

const Header = React.memo(({ currentCategory }) => (
  <>
    <Nav>
      {categories.map(category => (
        <li
          key={category.query}
          className={`${category.query === currentCategory ? 'active' : ''}`}
        >
          <Link to={`/feed?category=${category.query}`}>{category.name}</Link>
        </li>
      ))}
    </Nav>
  </>
));

Header.propTypes = {
  currentCategory: propTypes.string
};

Header.defaultProps = {
  currentCategory: categories.find(category => category.default).quert
};

function Feed({ location }) {
  const axiosAuth = useAxiosAuth();

  const [categoryImagesList, setCategoryImagesList] = useState([]);
  const [isLoaging, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    async function fetchCaregoryImageList() {
      const params = new URLSearchParams(location.search);
      const categoryQuery = params.get('category') || null;

      const categoryRoute = categoryQuery || categories.find(category => category.default).query;

      setIsLoading(true);
      setCurrentCategory(categoryRoute);

      const {
        data: { list }
      } = await axiosAuth.get(`/feed?category=${categoryRoute}`);

      setIsLoading(false);
      setCategoryImagesList(list);
    }

    fetchCaregoryImageList();
  }, [location.search, axiosAuth]);

  const [modalProperties, setModal] = useState({
    showModal: false,
    imageSrc: ''
  });

  function closeModal() {
    setModal({ ...modalProperties, showModal: false });
  }

  function handleImageClick(img) {
    const { src: imageSrc } = img;
    setModal({
      showModal: true,
      imageSrc
    });
  }

  return (
    <Container>
      <Header currentCategory={currentCategory} />
      <Content>
        {isLoaging ? (
          <Loading />
        ) : (
          <ImagesList>
            {categoryImagesList.length > 0 &&
              categoryImagesList.map(categoryImage => (
                <CardImage
                  onClick={handleImageClick}
                  src={categoryImage}
                  key={categoryImage}
                  width={300}
                  height={300}
                  margin={10}
                  cursor
                />
              ))}
          </ImagesList>
        )}
      </Content>
      <Modal showModal={modalProperties.showModal} closeModal={closeModal}>
        <CardImage
          src={modalProperties.imageSrc}
          width={500}
          height={500}
          margin={10}
          hover={false}
        />
      </Modal>
    </Container>
  );
}

Feed.propTypes = {
  location: propTypes.shape({
    search: propTypes.string.isRequired
  }).isRequired
};

export default Feed;
