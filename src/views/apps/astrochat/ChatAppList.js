import React from "react";

import "../../../assets/scss/pages/astrochat.scss";
import { CloudLightning } from "react-feather";

class ChatAppList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Index: "",
      connecting_usrid: "",
      userChatList: this.props?.userChatList,
      roomid: "",
    };
  }
  componentDidMount() {
    let currentuserid = localStorage.getItem("CurrentChat_userid");
    this.setState({ connecting_usrid: currentuserid });
  }

  render() {
    const { userChatList } = this.props;

    return (
      <ul
        className="listofchat"
        style={{ listStyle: "none", marginLeft: "none", cursor: "pointer" }}
      >
        {userChatList && userChatList?.length
          ? userChatList?.map((user, i) => {
              if (this.state.connecting_usrid === user?.userid?._id) {
                return (
                  <li
                    key={i}
                    className="newmainheaading mt-1 mb-1"
                    style={{
                      backgroundColor: `${
                        // this.state.Index === i
                        //   ? "#ef9014"
                        //   : "white" ||
                        this.state.connecting_usrid === user?.userid?._id
                          ? "#ef9014"
                          : "white"
                      }`,
                      borderRadius: "8px",
                      height: "60px",
                    }}
                    onClick={() => {
                      this.props.getChatRoomId(user, i);
                      this.setState({ Index: i });
                    }}
                  >
                    <div
                      className="imglf"
                      onClick={() => this.props.getChatRoomId(user, i)}
                    >
                      <img
                        src={user?.userid?.userimg[0]}
                        className="app-img"
                        alt=""
                      />
                    </div>
                    <div className="lst-con mt-1">
                      <h5>{user?.userid?.fullname}</h5>
                      <p>{user.msg.slice(0, 25)}</p>
                    </div>
                  </li>
                );
              } else {
                return null;
              }
            })
          : null}
      </ul>
    );
  }
}

export default ChatAppList;
