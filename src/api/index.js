import axios from 'axios';

function create(baseURL, options) {
  const instance = axios.create(Object.assign({ baseURL }, options));
  return instance;
}

export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts/`);

//develop: http://localhost:5000/posts
//prod : http://localhost:5001/posts
