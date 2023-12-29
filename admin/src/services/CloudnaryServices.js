import requests from "./httpService";

const CloudnaryServices = {
  deleteImg: async (body) => {
    return requests.post(`/cloudnary`,body);
  },
  
}; 

export default CloudnaryServices;
