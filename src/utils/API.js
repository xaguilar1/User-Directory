import axios from "axios";

export default {
  retrievePeople() {
    return axios.get('https://randomuser.me/api/?results=50')
  },
};
