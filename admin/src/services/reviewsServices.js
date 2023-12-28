import requests from "./httpService";

const ReviewsServices = {
  //   addTheme: async (body) => {
  //     return requests.post("/theme/add", body);
  //   },
  //   addAllTheme: async (body) => {
  //     return requests.post("/theme/add/all", body);
  //   },
  getAllReviews: async () => {
    return requests.get("/reviews/all");
  },
  //   getThemeById: async (id) => {
  //     return requests.get(`/theme/${id}`);
  //   },
  updateTheme: async (id, body) => {
    return requests.put(`/theme/${id}`, body);
  },
  //   updateManyThemes: async (body) => {
  //     return requests.patch("/theme/update/many", body);
  //   },
  //   updateStatus: async (id, body) => {
  //     return requests.put(`/theme/status/${id}`, body);
  //   },
  deleteTheme: async (id) => {
    return requests.delete(`/theme/${id}`);
  },
  //   deleteManyThemes: async (body) => {
  //     return requests.patch(`/theme/delete/many`, body);
  //   },
};

export default ReviewsServices;
