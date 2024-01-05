import requests from './httpService';

const NewsLatterServices = {
  getAllNewsLatter: async () => {
    return requests.get('/product-notification');
  },

};

export default NewsLatterServices;
