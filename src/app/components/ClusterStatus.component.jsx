/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";

import React, { useEffect, useState } from "react";

import { server } from "./ClusterStatus.style";

export const ClusterStatus = ({ method }) => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("red");

  useEffect(() => {
    getStatus();
  }, []);

  const getStatus = () => {
    const graphData = method();
    graphData.then((data) => {
      setStatus(data.status);
      setLoading(false);
    });
  };

  return (
    <>
      {loading && <p>loading...</p>}
      {!loading && (
        <div css={server}>
          {status === "green" ? (
            <>
              <span className="material-icons green">
                radio_button_checked
              </span>
              <p>
                <i>Online</i>
              </p>
            </>
          ) : (
            <>
              <span className="material-icons red">
                radio_button_unchecked
              </span>
              <p>
                <i>Offline</i>
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
};
