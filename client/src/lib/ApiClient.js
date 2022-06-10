import axios from "axios";

const apiClient = {
  getComments: async () => {
    const { data } = await axios.get("/api/comments");
    return data;
  },
  getReplies: async (id) => {
    const { data } = await axios.get(`/api/comment_replies?comment_id=${id}`);
    return data;
  },
  addComment: async (newComment) => {
    const { data } = await axios.post("/api/comments", newComment);
    return data;
  },
};

export default apiClient;
