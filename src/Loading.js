import React from "react";
import Loader from "react-loader-spinner";
import { usePromiseTracker } from "react-promise-tracker";
import "./loading.css";

const Loading = () => {

  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <div className="loader">
          <Loader
            type="ThreeDots"
            color="rgba(244, 149, 149, 0.8)"
            width="100"
            height="100"
          />
      </div>
    )
  );
};

export default Loading;
