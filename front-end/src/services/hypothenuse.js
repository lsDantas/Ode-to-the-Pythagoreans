import axios from 'axios';
import apiBaseUrl from '../utils/config';

const calculateHypothenuse = async (base, height) => {
  const triangleSides = {
    base,
    height,
  };
  const response = await axios.post(`${apiBaseUrl}/calculate-hypothenuse`, triangleSides);

  if (response.status === 400) {
    throw new Error('Invalid triangle sides.');
  }

  const { data } = response;
  const hypothenuse = data?.hypothenuse;

  return hypothenuse;
};

export default calculateHypothenuse;
