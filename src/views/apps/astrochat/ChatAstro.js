import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "../../../assets/scss/pages/astrochat.scss";
import Buyimg from "../../../assets/img/boy-img.png";
import ChatAppList from "./ChatAppList";
import ChatAppMassage from "./ChatAppMassage";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import axiosConfig from "../../../axiosConfig";
import axios from "axios";
import swal from "sweetalert";
import { FaArrowAltCircleRight } from "react-icons/fa";

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tooglebtn: true,
      userChatList: [],
      userId: "",
      astroId: "",
      userData: null,
      msg: "",
      roomId: "",
      UserDetails: {},
      roomChatData: [],
      time: {},
      seconds: 60 * 15,
      reciver: "",
      minutes: 15,
      ModdleToggle: false,
      indexValue: 0,
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  handleaddBal = async () => {
    let astroid = localStorage.getItem("astroId");
    let userid = localStorage.getItem("CurrentChat_userid");
    let payload = {
      userId: userid,
      astroId: astroid,
      type: "Chat",
    };
    // console.log(payload);
    await axiosConfig
      .post(`/user/deductChatBalance`, payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  handleCloseChat = (e) => {
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
        window.location.replace("/");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  handleAddChat = async (e) => {
    e.preventDefault();

    let userid = localStorage.getItem("CurrentChat_userid");
    if (this.state.tooglebtn) {
      this.handleaddBal();
    }
    if (this.state.msg !== "") {
      this.setState({ tooglebtn: false });
      let obj = {
        reciver: userid,
        msg: this.state.msg,
      };
      let userIds = [userid];
      let astroid = localStorage.getItem("astroId");

      await axiosConfig
        .post(`/user/add_chatroom/${astroid}`, obj)
        .then(async (response) => {
          console.log(response);
          if (response.data.status === true) {
            this.setState({ msg: "" });
            await axiosConfig
              .get(`/user/allchatwithAstro/${astroid}`)
              .then((response1) => {
                console.log(response1?.data?.data);
                // this.getChatdata();

                if (response1.data.status === true) {
                  let filteredArray = response1?.data?.data.filter(function (
                    item
                  ) {
                    return (
                      userIds.indexOf(item?.userid?._id || item?.reciver?._id) >
                      -1
                    );
                  });
                  this.setState({ roomChatData: filteredArray });
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })

        .catch((error) => {
          console.log(error);
        });
    } else swal("Alert", "Input field is blank. Add Some Value");
  };

  getChatonedata = () => {
    setInterval(() => {
      let astroId = localStorage.getItem("astroId");
      let get_room_id = localStorage.getItem("get_room_id");
      let userid = localStorage.getItem("CurrentChat_userid");
      axiosConfig.get(`/user/getone_chat/${userid}/${astroId}`).then((res) => {
        // console.log(res.data.data?.roomid);
        if (res.data.data?.roomid) {
          this.setState({ roomId: res.data.data?.roomid });
          axiosConfig
            .get(`/user/allchatwithuser/${res.data.data?.roomid}`)
            .then((res) => {
              this.setState({ roomChatData: res.data.data });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    }, 3000);
  };
  componentDidMount() {
    let astroId = localStorage.getItem("astroId");
    let get_room_id = localStorage.getItem("get_room_id");
    let userid = localStorage.getItem("CurrentChat_userid");

    axiosConfig
      .get(`/user/viewoneuser/${userid}`)
      .then((res) => {
        // console.log(res.data.data);
        this.setState({ UserDetails: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });

    this.getChatonedata();
    axiosConfig.get(`/user/getone_chat/${userid}/${astroId}`).then((res) => {
      // console.log(res.data.data?.roomid);
      if (res.data.data?.roomid) {
        this.setState({ roomId: res.data.data?.roomid });
        axiosConfig
          .get(`/user/allchatwithuser/${res.data?.data?.roomid}`)
          .then((res) => {
            this.setState({ roomChatData: res.data.data });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        swal("No room id found. let user to message first");
      }
    });

    if (JSON.parse(localStorage.getItem("minute"))) {
      let minute = JSON.parse(localStorage.getItem("minute"));
      this.setState({ minutes: minute, seconds: minute * 60 });
      // this.startTimer();
      // this.secondsToTime(minute * 60);
    }

    // console.log(astroId);
    axiosConfig
      .get(`/user/astrogetRoomid/${astroId}`)
      .then((response) => {
        // console.log("Room id", response?.data?.data);
        if (response.data.status === true) {
          this.setState({
            userChatList: response?.data?.data,
            roomId: response?.data?.data?.roomid,
          });
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    let seconds =
      this.state.seconds !== 0 ? this.state.seconds - 1 : alert("out time");

    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }

  // getChatdata = () => {
  //   setInterval(() => {
  //     this.getChatRoomIdnew(this.state.userData, this.state.indexValue);
  //   }, 3000);
  // };

  getChatRoomIdnew = (user, i) => {
    console.log(user, i);
    this.setState({ userData: user });
    // this.setState({ ModdleToggle: true });
    let userIds = [user?.userid?._id];
    this.setState({
      userId: user?.userid?._id,
      roomId: user?.roomid,
      indexValue: i,
      astroId: user?.astroid?._id,
    });
    axiosConfig
      .get(`/user/allchatwithAstro/${user?.astroid?._id}`)
      .then((response) => {
        console.log(response?.data?.data);

        if (response.data.status === true) {
          console.log("allchat", response?.data.data);

          let filteredArray = response?.data?.data.filter(function (item) {
            return (
              userIds.indexOf(item?.userid?._id || item?.reciver?._id) > -1
            );
          });

          this.setState({ roomChatData: filteredArray });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getChatRoomId = (user, i) => {
    console.log(user, i);
    this.setState({ userData: user });
    this.setState({ ModdleToggle: true });
    let userIds = [user?.userid?._id];
    this.setState({
      userId: user?.userid?._id,
      roomId: user?.roomid,
      indexValue: i,
      astroId: user?.astroid?._id,
    });
    axiosConfig
      .get(`/user/allchatwithAstro/${user?.astroid?._id}`)
      .then((response) => {
        console.log(response?.data?.data);
        if (response.data.status === true) {
          console.log("allchat", response?.data.data);
          let filteredArray = response?.data?.data.filter(function (item) {
            return (
              userIds.indexOf(item?.userid?._id || item?.reciver?._id) > -1
            );
          });
          // console.log(filteredArray);
          this.setState({ roomChatData: filteredArray });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  submitHandler = async (e, astroId, userId) => {
    e.preventDefault();
    let astroid = localStorage.getItem("astroId");
    let userid = localStorage.getItem("CurrentChat_userid");
    if (this.state.msg !== "") {
      let obj = {
        reciver: userid,
        msg: this.state.msg,
      };
      let userIds = [userid];
      await axiosConfig
        .post(`/user/add_chatroom/${astroid}`, obj)
        .then(async (response) => {
          console.log("add chat room", response.data.status);
          if (response.data.status === true) {
            this.setState({ msg: "" });
            await axiosConfig
              .get(`/user/allchatwithAstro/${astroid}`)
              .then((response1) => {
                console.log(response1?.data?.data);
                if (response1.data.status === true) {
                  let filteredArray = response1?.data?.data.filter(function (
                    item
                  ) {
                    return (
                      userIds.indexOf(item?.userid?._id || item?.reciver?._id) >
                      -1
                    );
                  });
                  this.setState({ roomChatData: filteredArray });
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })

        .catch((error) => {
          console.log(error);
        });
    } else swal("Alert", "Input field is blank. Add Some Value");
  };

  handleChange = (e) => {
    this.setState({
      msg: e.target.value,
    });
  };

  render() {
    const { indexValue } = this.state;
    return (
      <div>
        <section className="">
          <Container>
            <Row>
              {this.state.ModdleToggle === false ? (
                <>
                  <Col lg="4">
                    <div class="mymessagehead">
                      <div class="mymsgsubhead">
                        <h1 class="title mx-1 mb-2">My messages</h1>
                        <ChatAppList
                          userChatList={
                            this.state.userChatList.length
                              ? this.state.userChatList
                              : []
                          }
                          getChatRoomId={(user, i) =>
                            this.getChatRoomId(user, i)
                          }
                        />
                      </div>
                    </div>
                  </Col>
                  <Col lg="8">
                    <div class="app rt-chat">
                      <div class="messages">
                        <div className="chat-header">
                          <p>
                            <span>
                              <img
                                src={
                                  this.state.UserDetails
                                    ? this.state.UserDetails?.userimg
                                    : Buyimg
                                }
                                className="app-img"
                                alt=""
                              />
                            </span>
                            {this.state.UserDetails
                              ? this.state.UserDetails?.fullname
                              : null}
                          </p>
                        </div>
                        <div class="messages-history">
                          <ChatAppMassage
                            roomChatData={
                              this.state.roomChatData.length > 0
                                ? this.state.roomChatData
                                : []
                            }
                          />
                        </div>
                        <form class="messages-inputs">
                          <input
                            type="text"
                            placeholder="Send a message"
                            onChange={(e) => {
                              this.handleChange(e);
                            }}
                            value={this.state.msg}
                          />
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              this.setState({ ModdleToggle: true });
                            }}
                          >
                            <i class="material-icons">send</i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col lg={this.state.ModdleToggle === true ? "12" : "8"}>
                    <Row>
                      <Col>
                        <FaArrowAltCircleRight
                          style={{ cursor: "pointer" }}
                          onClick={() => this.setState({ ModdleToggle: false })}
                          fill="#ffcc01"
                          size="40px"
                          className="mx-2 mb-2 faarrowalt"
                        />
                      </Col>
                      <Col>
                        <div className="d-flex justify-content-end mt-1">
                          {/* {this.state.tooglebtn === "false" ? "dddone" : null} */}
                          <Button
                            className="closebtnchat"
                            onClick={(e) => this.handleCloseChat(e)}
                            color="primary"
                          >
                            Close Chat
                          </Button>
                        </div>
                      </Col>
                    </Row>
                    <div class="app rt-chat">
                      <div class="messages">
                        <div className="chat-header">
                          <p>
                            <span>
                              <img
                                src={
                                  this.state.UserDetails
                                    ? this.state.UserDetails?.userimg
                                    : Buyimg
                                }
                                className="app-img"
                                alt=""
                              />
                            </span>
                            {this.state.UserDetails
                              ? this.state.UserDetails?.fullname
                              : null}
                          </p>
                          {/* <span className="appchattimer">
                            {this.state.time.m} :{this.state.time.s}
                          </span> */}
                        </div>
                        <div class="messages-history">
                          <ChatAppMassage
                            roomChatData={
                              this.state.roomChatData.length > 0
                                ? this.state.roomChatData
                                : []
                            }
                          />
                        </div>
                        <form class="messages-inputs">
                          <input
                            type="text"
                            placeholder="Send a message"
                            onChange={(e) => {
                              this.handleChange(e);
                            }}
                            value={this.state.msg}
                            defaultValue={""}
                          />
                          <button
                            onClick={(e) =>
                              this.state.tooglebtn
                                ? this.handleAddChat(e)
                                : this.submitHandler(
                                    e,
                                    this.state.astroId,
                                    this.state.userId
                                  )
                            }
                            // onClick={(e) =>
                            //   this.submitHandler(
                            //     e,
                            //     this.state.astroId,
                            //     this.state.userId
                            //   )
                            // }
                          >
                            <i class="material-icons">send</i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </Col>
                </>
              )}
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default ChatApp;
