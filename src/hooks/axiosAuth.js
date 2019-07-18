import { useRef } from 'react';
import { useAuth } from 'Root/context/auth-context';
import axios from '../services/api';

function useAxiosAuth() {
  const {
    data: { token: Authorization }
  } = useAuth();

  const axiosAuth = useRef({
    get: url =>
      axios.get(url, {
        headers: {
          Authorization
        }
      })
  });

  return axiosAuth.current;
}

export { useAxiosAuth };
