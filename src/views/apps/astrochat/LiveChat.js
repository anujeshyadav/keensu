import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "../../assets/scss/chat.scss";

import axiosConfig from "../../../axiosConfig";
// import { SlCallOut } from "react-icons/sl";
// import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import swal from "sweetalert";
import LiveChatAppMassage from "./LiveChatAppMassage";
import images from "../../../assets/img/profile/post-media/25.jpg";

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.countRef = React.createRef();
    this.apicall = React.createRef();
    this.callmsg = React.createRef();

    this.state = {
      roomChatData: [],
      Index: "",
      data: {},
      sendbutton: "",
      Activeastro: {},
      CurrentRoomid: "",
      userId: "",
      astroId: "",
      msg: "hello",
      roomId: "",
    };
  }

  handleliveChat = () => {
    let id = this.props?.sellerid;

    localStorage.setItem("sellerid", id);
    setInterval(() => {
      axiosConfig
        .get(`/user/liveChat_byseller/${id}`)
        .then((res) => {
          this.setState({ roomChatData: res.data?.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
  };

  componentDidMount = () => {
    let id = this.props?.sellerid;

    this.handleliveChat();
    axiosConfig
      .get(`/user/liveChat_byseller/${id}`)
      .then((res) => {
        console.log(res.data?.data);
        this.setState({ roomChatData: res.data?.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                  <img src={images} className="app-img" alt="image" />
                </span>
                {/* {this.state.Activeastro?.fullname} */}
              </p>
            </div>
            <div class="messages-history">
              <LiveChatAppMassage
                roomChatData={
                  this.state.roomChatData && this.state.roomChatData?.length > 0
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
