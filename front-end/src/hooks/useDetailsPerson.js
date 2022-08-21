import axios from "axios";
const apiBase = "https://jsonplaceholder.typicode.com";

const useDetailsPerson = () => {
  const getDetailsUsers = async () => {
    const response = await axios.get(`${apiBase}/users`);
    if (response.data) {
      return response.data;
    }
    return [];
  };
  return { getDetailsUsers };
};

export default useDetailsPerson;
