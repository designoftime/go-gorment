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
  getReviewById: async (id) => {
    return requests.get(`/reviews/${id}`);
  },
  updateReviews: async (id, body) => {
    return requests.put(`/reviews/${id}`, body);
  },
  //   updateManyThemes: async (body) => {
  //     return requests.patch("/theme/update/many", body);
  //   },
  //   updateStatus: async (id, body) => {
  //     return requests.put(`/theme/status/${id}`, body);
  //   },
  deleteReviews: async (id) => {
    return requests.delete(`/reviews/${id}`);
  },
  //   deleteManyThemes: async (body) => {
  //     return requests.patch(`/theme/delete/many`, body);
  //   },
};

export default ReviewsServices;
