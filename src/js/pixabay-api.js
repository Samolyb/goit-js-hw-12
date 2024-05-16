import axios from 'axios';

const API_KEY = '43864009-cebb341532060e679edcf3c4c';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
    const response = await axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: page,
            per_page: 15
        }
    });
    return response.data;
}