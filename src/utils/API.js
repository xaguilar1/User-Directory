import axios from "axios";

export default {
  retrievePeople() {
    return axios.get('https://randomuser.me/api/?inc=name,email,picture,dob,id&results=100')
  },
};
