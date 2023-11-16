import React from "react";
import useGetData from "../../../../../hooks/useGetData";
import { BaseApi } from "../../../../../util/BaseApi";
import { useLocation } from "react-router-dom";
import NewVideo from "./Video/NewVideo/NewVideo";
import VideoForm from "./Video/Components/VideoForm/VideoForm";

function Topic() {
  const location = useLocation();
  const pathList = location.pathname.split("/");
  const len = pathList.length;
  const { topic, loading, error } = useGetData(
    BaseApi +
      `/courses/${pathList[len - 3]}/${pathList[len - 2]}/${pathList[len - 1]}`
  );
  if (topic?.type === "video") {
    return (
      <div>
        <h1>Video</h1>
      </div>
    );
  } else if (topic?.type === "quiz") {
    return (
      <div>
        <h1>Quiz</h1>
      </div>
    );
  } else if (topic?.type === "assignment") {
    return (
      <div>
        <h1>Assignment</h1>
      </div>
    );
  } else {
    return <NewVideo />;
  }
}

export default Topic;
