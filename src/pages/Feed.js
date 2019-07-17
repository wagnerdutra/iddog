import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import { categories } from 'Root/routes';

import { useAxiosAuth } from 'Root/hooks/axiosAuth';

import CardImage from 'Components/CardImage';
import Loading from 'Components/Loading';

import { Container, ImagesList, Content, Nav } from './styles';

const Header = React.memo(({ currentCategory }) => (
  <>
    <h1>THE IDDOG</h1>
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

  const [categoryImagesList, setCategoryImagesList] = useState({ category: '', list: [] });
  const [isLoaging, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    async function fetchCaregoryImageList() {
      const params = new URLSearchParams(location.search);
      const categoryQuery = params.get('category') || null;

      setIsLoading(true);

      const categoryRoute = categoryQuery || categories.find(category => category.default).query;

      setCurrentCategory(categoryRoute);

      const { data } = await axiosAuth.get(`/feed?category=${categoryRoute}`);

      setIsLoading(false);

      setCategoryImagesList(data);
    }

    fetchCaregoryImageList();
  }, [location.search]);

  return (
    <Container>
      <Header currentCategory={currentCategory} />
      <Content>
        {isLoaging ? (
          <Loading />
        ) : (
          <ImagesList>
            {categoryImagesList.list.length > 0 &&
              categoryImagesList.list.map(categoryImage => (
                <CardImage
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
    </Container>
  );
}

Feed.propTypes = {
  location: propTypes.shape({
    search: propTypes.string.isRequired
  }).isRequired
};

export default Feed;
