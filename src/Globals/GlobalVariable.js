

import axios from 'axios';
let globalData = [];


const fetchData = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/data');
    globalData = response.data.scrapped_data;
  } catch (error) {
    console.log(error);
  }
  fetchData()
}

export default {
  default: globalData
};

