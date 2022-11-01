import axios from "axios";

const myAxios = axios.create({
  timeout: 5000, // ms
});

const requestHandler = (request) => {
  const localHackerUser = localStorage.getItem("hacker_user");
  if (localHackerUser) {
    request.headers.authorization = `Bearer ${JSON.parse(localHackerUser)}`;
  }
  return request;
};

const responseHandler = (response) => {
  return response;
};

const errorHandler = (error) => {
  if (error.response.status === 401) {
    localStorage.removeItem("hacker_user");
    console.log("token error", error.response);
    if (error.response.data?.failureCode === "TokenExpiredError") {
      axios
        .get("http://localhost:4000/hackers/rtoken", { withCredentials: true })
        .then((res) => {
          localStorage.setItem(
            "hacker_user",
            JSON.stringify(res.data.data.token)
          );
          window.location.reload();
        })
        .catch((err) => {
          console.log("refresh token expired :", err);
          localStorage.removeItem("hacker_user");
          window.location.reload();
        });
    }
  }
  return Promise.reject(error);
};

myAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

myAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export { myAxios };
