import axios from "axios";
import { useEffect } from "react";

const YoutubeList = () => {
  const options = {
    method: "GET",
    url: "https://www.googleapis.com/youtube/v3/search?id=7lCDEYXw3mM&key=AIzaSyDAFW44cRSCgB7rYplcjRHh2kr8oy1Rscg&part=snippet",
    headers: {},
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const url = "https://www.youtube.com/embed/ix_8pdlaj4A";

  // var player;
  // function onYouTubeIframeAPIReady() {
  //   player = new YT.Player("player", {
  //     height: "360",
  //     width: "640",
  //     videoId: "M7lc1UVf-VE",
  //     events: {
  //       onReady: onPlayerReady,
  //       onStateChange: onPlayerStateChange,
  //     },
  //   });
  // }

  return (
    <div>
      <div style={{ margin: "20px", textAlign: "center" }}>
        <iframe src={url} frameborder="0" />
      </div>
      <button></button>
    </div>
  );
};

export default YoutubeList;
