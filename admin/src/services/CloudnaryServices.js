import requests from "./httpService";

const CloudnaryServices = {
  deleteImg: async (id) => {
    return requests.delete(`/cloudnary/${id}`);
  },
  
}; 

export default CloudnaryServices;
