import { useUser } from 'Root/context/user-context';
import axios from '../services/api';

function useAxiosAuth() {
  // const user = useUser();

  const axiosAuth = {
    get: url =>
      axios.get(url, {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpZGRvZy1zZXJ2aWNlIiwic3ViIjoiNWQyZTUxZDc0NzRkYWFmZTAwYjIwMDM5IiwiaWF0IjoxNTYzMzE2Njk1LCJleHAiOjE1NjQ2MTI2OTV9.K_xepGlqlzIkzuZu1I5ScK3NspA7zAGmq9Y0zsOFe2w'
        }
      })
  };

  return axiosAuth;
}

export { useAxiosAuth };
