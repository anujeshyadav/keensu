import React, { useEffect, useState } from "react";
import { Button, Card, Col, FormGroup, Input, Label, Row } from "reactstrap";
import AgoraUIKit from "agora-react-uikit";
import LiveChat from "./LiveChat";
import "./../../../assets/scss/video.scss";
import axiosConfig from "../../../axiosConfig";
import { useParams } from "react-router-dom";

function YourliveStream() {
  const [videoCall, setVideoCall] = useState(false);
  const [liveid, setliveId] = useState("");
  const [channelNamecreated, setchannelName] = useState("");
  const [Status, setStatus] = useState("");
  const [Token, setToken] = useState("");
  const [Paramid, setParamid] = useState("");
  const [Addcall, setAddcall] = useState(false);
  const [livestraming, setlivestraming] = useState(false);

  const [view, setview] = useState(false);
  const [listofchannel, setlistofchannel] = useState();
  const param = useParams();

  const rtcProps = {
    // Pass your App ID here.
    appId: "211ddf5d3ed341acaf8f7608e94b7c91",
    // appId: "7d1f07c76f9d46be86bc46a791884023",
    // Set the channel name.
    channel: channelNamecreated,
    enableVideo: true,

    token: (Token && Token) || localStorage.getItem("astrotokenforlivestream"),

    uid: 0,

    role: "host",
  };

  useEffect(() => {
    setParamid(param.id);
    const handlePopstate = () => {
      window.history.pushState(null, null, window.location.pathname);
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  const callbacks = {
    // ["user-left"]: (user) => {
    //   window.close();
    // },

    EndCall: async () => {
      console.log(param.id);
      await axiosConfig
        .delete(`/user/dltliveChat/${Paramid}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
      await axiosConfig
        .get(`/user/disConnectLiveStream/${Paramid}`)
        .then((res) => {
          console.log(res.data);
          setVideoCall(false);

          // window.close();
        })
        .catch((err) => {
          console.log(err.response);
        });
      window.close();
    },
  };

  const handlestatus = async (e) => {
    e.preventDefault();

    const payload = {
      astroAccount: Paramid,
      status: true,
    };

    if (Status === "Active") {
      await axiosConfig
        .post(`/user/astroLiveStreaming`, payload)
        .then((res) => {
          console.log(res.data?.data);
          if (res.data.msg === "already exists") {
            setToken(res.data?.token);
            setliveId(res.data?._id);
            localStorage.setItem("liveid", res.data?.id);
            setchannelName(res.data?.channelName);
            setlivestraming(true);
          }
          if (res.data?.status) {
            localStorage.setItem("liveid", res.data?.data?._id);
            setToken(res.data?.data?.token);
            setchannelName(res.data?.data?.channelName);
            setliveId(res.data?.data?._id);
            setlivestraming(true);
          }

          localStorage.setItem(
            "astrotokenforlivestream",
            res.data?.data?.token
          );
          setVideoCall(true);
        })
        .catch((err) => {
          console.log(err.response?.data);
        });
    }
    if (Status === "Deactive") {
      await axiosConfig
        .delete(`/user/dltliveChat/${Paramid}`)
        .then((res) => {
          console.log(res.data);
          // window.close();
        })
        .catch((err) => {
          console.log(err.response);
        });
      await axiosConfig
        .get(`/user/disConnectLiveStream/${Paramid}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
      localStorage.removeItem("astrotokenforlivestream");
      window.close();
    }
  };

  const handleofflinestreaming = async () => {
    await axiosConfig
      .delete(`/user/dltliveChat/${Paramid}`)
      .then((res) => {
        // console.log(res.data);
        // window.close();
      })
      .catch((err) => {
        console.log(err.response);
      });
    await axiosConfig
      .get(`/user/disConnectLiveStream/${Paramid}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
    window.close();
  };
  return (
    <div className="videocallmain mt-2">
      <Card className="livesellerdiv">
        <Row className="mt-2">
          <Col lg="4" md="4" sm="4">
            <div className="container mt-2 mb-1">
              <Button onClick={(e) => handlestatus(e)} color="success">
                Start Live
              </Button>
            </div>
          </Col>
          <Col>
            <div className="container mt-1 mb-1">
              <Row>
                {livestraming === false ? (
                  <>
                    <Col className="mt-1">
                      <FormGroup check>
                        <Input
                          value="Active"
                          onClick={(e) => {
                            setStatus(e.target.value);
                          }}
                          name="radio1"
                          type="radio"
                        />{" "}
                        <Label check>Online</Label>
                      </FormGroup>
                    </Col>
                  </>
                ) : null}

                <Col className="mt-1">
                  <FormGroup check>
                    <Input
                      value="Deactive"
                      onClick={(e) => {
                        handleofflinestreaming();
                        setStatus(e.target.value);
                      }}
                      name="radio1"
                      type="radio"
                    />{" "}
                    <Label check>Offline</Label>
                  </FormGroup>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <div className="mt-1 mb-1">
          {videoCall && Status === "Active" ? (
            <>
              <div className="container">
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "80vh",
                    border: "1px solid black",
                    borderRadius: "8px",
                  }}
                  className="maindivstream container mt-3 mb-3 "
                >
                  <div
                    style={{
                      marginLeft: "-10px",
                      display: "flex",
                      width: "60vw",
                      height: "80vh",
                      borderRadius: "8px",
                    }}
                    className=""
                  >
                    <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "30vw",
                      height: "80vh",
                    }}
                  >
                    <div>
                      <LiveChat sellerid={param.id} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {Addcall === true ? (
                <>
                  <Button onClick={() => setVideoCall(true)} color="success">
                    liveStreams Now
                  </Button>
                </>
              ) : null}
            </>
          )}
        </div>
      </Card>
    </div>
  );
}

export default YourliveStream;
