import axios from "axios";

export default {
  // Export an object containing methods we'll use for accessing the Dog.Ceo API
  retrievePeople() {
    return axios.get('https://randomuser.me/api/?results=50')
  },
};
