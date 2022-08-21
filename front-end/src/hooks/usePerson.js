import axios from "axios";
const apiBase = "http://localhost:3001";

const usePerson = () => {
  const getUsers = async () => {
    const response = await axios.get(`${apiBase}/usuarios`);
    if (response.data) {
      return response.data;
    }
    return [];
  };

  return { getUsers };
};

export default usePerson;
