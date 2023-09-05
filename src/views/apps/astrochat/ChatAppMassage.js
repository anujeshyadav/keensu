import React from "react";
// import { Link } from "react-router-dom";
// import { Container } from "reactstrap";
import "../../../assets/scss/pages/astrochat.scss";
// import Buyimg from "../../../assets/img/boy-img.png";
// import Countdown from "react-countdown";

class ChatAppMassage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log("props value", this.props.roomChatData);
    return (
      <>
        {this.props.roomChatData?.length
          ? this.props.roomChatData
              .map((chat, index) => {
                return (
                  <>
                    {chat.type === "astrologer" ? (
                      <div class="message me">
                        <div class="message-body">{chat?.msg}</div>
                      </div>
                    ) : (
                      <div className="message">
                        <div class="message-body">{chat?.msg}</div>
                      </div>
                    )}
                  </>
                );
              })
              .reverse()
          : null}
      </>
    );
  }
}

export default ChatAppMassage;
