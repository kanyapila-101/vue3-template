import { AuthApi } from "../configs/Constance";
import api from "./HttpClient";
import TokenService from "./TokenService";

class AuthService {
  login({ username, password }) {
    return api
      .post(`${AuthApi.login}`, {
        username,
        password
      })
      .then((response) => {
        if (response.data.accessToken) {
          TokenService.setUser(response.data);
        }

        return response.data;
      });
  }

  logout() {
    TokenService.removeUser();
  }

  register({ username, email, password }) {
    return api.post(`${AuthApi.signup}`, {
      username,
      email,
      password
    });
  }
}

export default new AuthService();