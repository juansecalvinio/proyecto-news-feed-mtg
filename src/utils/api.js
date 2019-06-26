import dayjs from 'dayjs';

const BASE_URL = 'https://api.canillitapp.com';

const getDateNow = () => dayjs().format('YYYY[-]MM[-]DD');

const api = {
    
    latest: async (date = getDateNow()) => {
        try {
            const response = await fetch(`${BASE_URL}/latest/${date}`);
            const data = await response.json();
            return data;
        } catch(error) {
            console.error(error);
        }
    },

    category: async (categoryId = '') => {
        try {
            const response = await fetch(`${BASE_URL}/news/category/${categoryId}`);
            const data = await response.json();
            return data;
        } catch(error) {
            console.error(error);
        }
    },

    search: async (searchValue = '') => {
        try {
            const response = await fetch(`${BASE_URL}/search/${searchValue}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    },

}

export default api;