import React, { useState, useEffect } from "react";
import { client, join, leave } from "./Newtest";

const VideoCalls = () => {
  const [channelName, setChannelName] = useState("");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [remoteAudioTrack, setRemoteAudioTrack] = useState(null);
  const [remoteVideoTrack, setRemoteVideoTrack] = useState(null);

  useEffect(() => {
    const init = async () => {
      const tracks = await join(channelName, token, userId);
      setRemoteAudioTrack(tracks[0]);
      setRemoteVideoTrack(tracks[1]);
      setChannelName("anujesh");
      setToken(
        "007eJxTYDgh+fefxobNlcqHuZiV5tUksPQsnbky8DLD45MxN08G9yxRYDBPMUwzME82N0uzTDExS0q1MEtKNjFLNLc0tLAwMTAyXn4pMqUhkJEh7PIBZkYGCATx2RkS80qzUoszGBgA59ghrA=="
      );
      setUserId("0");
    };
    init();
    return () => {
      leave();
    };
  }, [channelName, token, userId]);

  return (
    <div>
      <h1>Video Call</h1>
      <div>
        <video id="local-stream" autoPlay muted></video>
      </div>
      <div>
        {remoteVideoTrack && <video id="remote-stream" autoPlay></video>}
      </div>
    </div>
  );
};

export default VideoCalls;
