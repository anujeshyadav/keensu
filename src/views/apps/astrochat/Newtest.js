import AgoraRTC from "agora-rtc-sdk-ng";

const appId = "7d1f07c76f9d46be86bc46a791884023";

export const client = AgoraRTC.createClient({ mode: "rtc", codec: "h264" });

export const join = async (channelName, token, userId) => {
  await client.join(appId, channelName, token, userId);
  const localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
  const localVideoTrack = await AgoraRTC.createCameraVideoTrack();
  localVideoTrack.play("local-stream");
  return [localAudioTrack, localVideoTrack];
};

export const leave = async () => {
  await client.leave();
};
