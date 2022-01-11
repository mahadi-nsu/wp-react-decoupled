import axios from "axios";

const url = "https://dev-first-wp-test.pantheonsite.io/wp-json/";

export default axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json",
  },
});
