import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://reborn-zero-waste-movement.firebaseio.com/'
});

export default instance; 
