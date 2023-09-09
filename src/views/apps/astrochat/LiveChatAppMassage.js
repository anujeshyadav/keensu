import React from "react";
import "../../../assets/scss/pages/astrochat.scss";
import { Col, Row } from "reactstrap";
import image from "../../../assets/user.jpg";

class ChatAppMassage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // debugger;
    // console.log("props value", this.props.roomChatData);
    return (
      <>
        {this.props.roomChatData && this.props.roomChatData.length
          ? this.props.roomChatData
              .map((chat, index) => {
                {
                  /* console.log(chat); */
                }
                return (
                  <>
                    {/* {chat.type === "user" ? ( 
                      <div class="message me">
                        <div class="message-body">{chat?.msg}</div>
                      </div>
                    ) : ( */}
                    <>
                      <div key={index} className="message">
                        <div class="message-body">
                          <Row>
                            <Col lg="4">
                              <img
                                style={{ borderRadius: "50%" }}
                                width="40px"
                                height="40px"
                                src={image}
                              />
                            </Col>
                            <Col lg="8">
                              <Row>
                                <h6 className="container">
                                  <b>{chat?.username}</b>
                                </h6>
                              </Row>
                              <Row>
                                <h6 className="container">{chat?.msg}</h6>
                              </Row>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </>
                    {/* )} */}
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
