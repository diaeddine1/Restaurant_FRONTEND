import globalData from '../Globals/GlobalVariable';
import axios from 'axios';
const fetchData = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/data');
    globalData = response.data.scrapped_data;
  } catch (error) {
    console.log(error);
  }
}

export default fetchData;
