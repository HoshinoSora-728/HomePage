import { youtubeApi } from "../api/youtube/service";

import { setName } from "../../../stores/information";
import { useDispatch } from "react-redux";

export const LoadYoutube = () => {
  const dispatch = useDispatch();
  const response = youtubeApi();

  dispatch(setName(response));
};
