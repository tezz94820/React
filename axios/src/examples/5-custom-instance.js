import { useEffect } from 'react';
import axios from 'axios'
import authFetch from '../axios/custom'

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    const res1 = await authFetch('/react-store-products')
    const res2 = await axios(randomUserUrl)
    //so here the custom instance authfetch is used .only res1 will have the header accept and res2 will not have the accept header
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
