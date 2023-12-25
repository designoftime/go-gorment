import requests from "./httpService";

const ThemeServices = {
  addTheme: async (body) => {
    return requests.post("/theme/add", body);
  },
  //   addAllTheme: async (body) => {
  //     return requests.post("/theme/add/all", body);
  //   },
  getAllThemes: async () => {
    return requests.get("/theme");
  },
  getThemeById: async (id) => {
    return requests.get(`/theme/${id}`);
  },
  updateTheme: async (id, body) => {
    return requests.put(`/theme${id}`, body);
  },
  updateManyThemes: async (body) => {
    return requests.patch("/theme/update/many", body);
  },
  updateStatus: async (id, body) => {
    return requests.put(`/theme/status/${id}`, body);
  },
  deleteTheme: async (id) => {
    return requests.delete(`/theme/${id}`);
  },
  deleteManyThemes: async (body) => {
    return requests.patch(`/theme/delete/many`, body);
  },
};

export default ThemeServices;
