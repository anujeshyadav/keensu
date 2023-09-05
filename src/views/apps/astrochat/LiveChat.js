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
        .get(`/user/liveChat_msgbyastro/${astroId}`)
        .then((res) => {
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
    const astroId = localStorage.getItem("astroId");

    axiosConfig
      .get(`/admin/getoneAstro/${astroId}`)
      .then((res) => {
        console.log(res.data.data);
        this.setState({ Activeastro: res?.data?.data });
      })
      .catch((err) => {
        console.log(err);
      });

    let user_id = JSON.parse(localStorage.getItem("user_id"));
  };

  handlechat = () => {
    console.log(this.state.roomId);
    axiosConfig
      .get(`/user/allchatwithuser/${this.state.roomId}`)
      .then((response) => {
        console.log(response?.data?.data);
        if (response.data.status === true) {
          this.setState({ roomChatData: response?.data.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  submitHandler = async (e, astroid, userId) => {
    e.preventDefault();

    const astroId = localStorage.getItem("astroId");
    let userid = JSON.parse(localStorage.getItem("user_id"));

    if (this.state.msg != "") {
      let obj = {
        astroid: astroId,
        msg: this.state.msg,
      };
    } else swal("Input filed is blank", "Fill it before send");
  };

  handleChange = (e) => {
    this.setState({
      msg: e.target.value,
    });
  };

  render() {
    return (
      <div className="">
        <div class="app rt-chats">
          <div class="messages">
            <div className="chat-header">
              <p>
                <span>
                  <img
                    src={this.state.Activeastro?.img}
                    className="app-img"
                    alt=""
                  />
                </span>
                {this.state.Activeastro?.fullname}
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
          </div>
        </div>
      </div>
    );
  }
}
export default ChatApp;
