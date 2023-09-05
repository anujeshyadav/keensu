import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "../../assets/scss/chat.scss";

import axiosConfig from "../../../axiosConfig";
import { SlCallOut } from "react-icons/sl";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import swal from "sweetalert";
import LiveChatAppMassage from "./LiveChatAppMassage";

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.countRef = React.createRef();
    this.apicall = React.createRef();
    this.callmsg = React.createRef();

    this.state = {
      Index: "",
      data: {},
      sendbutton: "",
      Activeastro: {},
      CurrentRoomid: "",
      roomChatData: [],
      userId: "",
      astroId: "",
      msg: "hello",
      roomId: "",
    };
  }

  handleliveChat = () => {
    setInterval(() => {
      const astroId = localStorage.getItem("astroId");
      axiosConfig
        .get(`/user/liveChat_byseller/1`)
        // .get(`/user/liveChat_byseller/${astroId}`)
        .then((res) => {
          console.log(res.data);
          this.setState({ roomChatData: res?.data.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
  };

  componentDidMount = () => {
    this.handleliveChat();
    console.log(this.props);
    // const astroId = localStorage.getItem("astroId");

    // axiosConfig
    //   .get(`/admin/getoneAstro/${astroId}`)
    //   .then((res) => {
    //     console.log(res.data.data);
    //     this.setState({ Activeastro: res?.data?.data });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // let user_id = JSON.parse(localStorage.getItem("user_id"));
  };

  // handlechat = () => {
  //   console.log(this.state.roomId);
  //   axiosConfig
  //     .get(`/user/allchatwithuser/${this.state.roomId}`)
  //     .then((response) => {
  //       console.log(response?.data?.data);
  //       if (response.data.status === true) {
  //         this.setState({ roomChatData: response?.data.data });
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // submitHandler = async (e, astroId, userId) => {
  //   e.preventDefault();
  //   let astroid = localStorage.getItem("astroId");
  //   let userid = localStorage.getItem("CurrentChat_userid");
  //   if (this.state.msg !== "") {
  //     let obj = {
  //       reciver: userid,
  //       msg: this.state.msg,
  //     };
  //     let userIds = [userid];
  //     await axiosConfig
  //       .post(`/user/add_chatroom/${astroid}`, obj)
  //       .then(async (response) => {
  //         console.log("add chat room", response.data.status);
  //         if (response.data.status === true) {
  //           this.setState({ msg: "" });
  //           await axiosConfig
  //             .get(`/user/allchatwithAstro/${astroid}`)
  //             .then((response1) => {
  //               console.log(response1?.data?.data);
  //               if (response1.data.status === true) {
  //                 let filteredArray = response1?.data?.data.filter(function (
  //                   item
  //                 ) {
  //                   return (
  //                     userIds.indexOf(item?.userid?._id || item?.reciver?._id) >
  //                     -1
  //                   );
  //                 });
  //                 this.setState({ roomChatData: filteredArray });
  //               }
  //             })
  //             .catch((error) => {
  //               console.log(error);
  //             });
  //         }
  //       })

  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } else swal("Alert", "Input field is blank. Add Some Value");
  // };

  // handleChange = (e) => {
  //   this.setState({
  //     msg: e.target.value,
  //   });
  // };

  render() {
    return (
      <div className="">
        <div class="app rt-chats">
          <div class="messages">
            <div className="chat-header">
              <p>
                <span>
                  <img
                    // src={this.state.Activeastro?.img}
                    className="app-img"
                    alt="image"
                  />
                </span>
                {/* {this.state.Activeastro?.fullname} */}
              </p>
            </div>
            <div class="messages-history">
              <LiveChatAppMassage
                roomChatData={
                  this.state.roomChatData.length > 0
                    ? this.state.roomChatData
                    : []
                }
              />
            </div>
            {/* <form class="messages-inputs">
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
                  this.submitHandler(e, this.state.astroId, this.state.userId)
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
            </form> */}
          </div>
        </div>
      </div>
    );
  }
}
export default ChatApp;
