import { useEffect } from 'react';
import axios from 'axios'

const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const res1 = await axios.get(productsUrl)
      const res2 = await axios.get(randomUserUrl)
      //both of these will give the same headers as accept : appication/json. becase we defined it in the global instance ion the global.js file
      //if we wwan to pass it to onlu only url we use custom urls
      console.log(response)
    } catch (error) {
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;
