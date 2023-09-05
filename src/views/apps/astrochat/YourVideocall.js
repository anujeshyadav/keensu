import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import AgoraUIKit, { layout } from "agora-react-uikit";
import { useParams } from "react-router-dom";
import axiosConfig from "../../../axiosConfig";
import { history } from "../../../history";
import swal from "sweetalert";

function YourVideocall() {
  const [videoCall, setVideoCall] = useState(false);
  const [channelNamecreated, setchannelName] = useState("");
  const [Status, setStatus] = useState("");
  const [Token, setToken] = useState("");
  const [Addcall, setAddcall] = useState(false);
  const param = useParams();

  useEffect(() => {}, []);
  const rtcProps = {
    // Pass your App ID here.
    appId: "7d1f07c76f9d46be86bc46a791884023",

    // channel: "anujesh",
    channel: channelNamecreated,
    // Pass your temp token here.
    token: (Token && Token) || localStorage.getItem("astrotokenforvideocall"),

    // Set the user ID.
    uid: 0,
    // Set the user role
    // layout: layout.grid,
    // layout: isPinned ? layout.pin : layout.grid,
  };
  const callbacks = {
    ["user-left"]: (user) => {
      if (user) {
        swal("User Leave The Room");
      }
    },
    EndCall: (e) => {
      handleCloseChat(e);
      setVideoCall(false);
      window.location.reload();
    },
  };

  const handlestatus = async (e) => {
    e.preventDefault();
    let userid = localStorage.getItem("CurrentChat_userid");
    let astroid = localStorage.getItem("astroId");
    let payload = {
      astroAccount: astroid,
    };
    if (Status === "Active") {
      await axiosConfig
        .post(`/user/astroVideoCall`, payload)
        .then((res) => {
          console.log(res.data);
          setchannelName(res.data.channelName);
          setToken(res.data.astroAccount);
          localStorage.setItem("astrotokenforvideocall", res.data.astroAccount);
          if (res.data.channelName && res.data.astroAccount) {
            setAddcall(true);
            setVideoCall(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (Status === "Deactive") {
      handleCloseChat(e);
      setAddcall(false);
    }

    if ((userid !== "" && userid !== undefined && userid !== null) || userid) {
      let load = {
        userId: userid,
        astroId: astroid,
        type: "Video",
      };

      await axiosConfig
        .post(`/user/deductChatBalance`, load)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  const handleCloseChat = (e) => {
    e.preventDefault();
    let astroid = localStorage.getItem("astroId");
    let userid = localStorage.getItem("CurrentChat_userid");
    let value = {
      userId: userid,
      astroId: astroid,
    };
    axiosConfig
      .post(`/user/changeStatus`, value)
      .then((res) => {
        console.log(res);
        localStorage.removeItem("CurrentChat_userid");
        window.location.replace("/");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <div className="videocallmain mt-2">
      <Card className="mt-2">
        <Row>
          <Col lg="4" md="4" sm="4">
            <div className="container mt-2 mb-1">
              <Button onClick={(e) => handlestatus(e)} color="success">
                Join VideoCall
              </Button>
            </div>
          </Col>

          <Col lg="6" md="6" sm="6">
            <div className="container mt-1 mb-1">
              <Row>
                <Col className="mt-1">
                  <FormGroup check>
                    <Input
                      value="Active"
                      onClick={(e) => {
                        setStatus(e.target.value);
                      }}
                      name="radio1"
                      type="radio"
                    />
                    <Label check>Online</Label>
                  </FormGroup>
                </Col>
                <Col className="mt-1">
                  <FormGroup check>
                    <Input
                      value="Deactive"
                      onClick={(e) => {
                        setStatus(e.target.value);
                        setAddcall(false);
                        handleCloseChat(e);
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
          <Col>
            <Col>
              <div className="d-flex justify-content-end mt-1">
                <Button
                  className="closebtnchat"
                  onClick={(e) => handleCloseChat(e)}
                  color="primary"
                >
                  Close VideoCall
                </Button>
              </div>
            </Col>
          </Col>
        </Row>
        <Row>
          {videoCall && Status === "Active" ? (
            <>
              <div style={{ display: "flex", width: "90vw", height: "80vh" }}>
                <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
              </div>
            </>
          ) : (
            <>
              {Addcall === true ? (
                <>
                  {/* <div className="mx-2 mb-2"> */}
                  {/* <Button onClick={() => setVideoCall(true)} color="success">
                      Click to join Now
                    </Button> */}
                  {/* </div> */}
                </>
              ) : null}
            </>
          )}
        </Row>
      </Card>
    </div>
  );
}

export default YourVideocall;
