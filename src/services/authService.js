import http from "../utills/http";

const authService = async (username, password) => {
  try {
    let response = await http.post("jwt-auth/v1/token", {
      username: username,
      password: password,
    });

    localStorage.setItem("login_info", JSON.stringify(response.data.token));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export default authService;
