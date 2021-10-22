import axios from "axios";

// import information from "../../../../stores/index";

const options = {
  method: "GET",
  url: "https://www.googleapis.com/youtube/v3/search?id=7lCDEYXw3mM&key=AIzaSyDAFW44cRSCgB7rYplcjRHh2kr8oy1Rscg&part=snippet",
  headers: {},
};

export const youtubeApi = () => {
  axios
    .request({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search?id=7lCDEYXw3mM&key=AIzaSyDAFW44cRSCgB7rYplcjRHh2kr8oy1Rscg&part=snippet",
      headers: {},
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log("error発生");
      console.error(error);
    });
};
