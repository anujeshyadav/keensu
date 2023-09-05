import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../../assets/scss/pages/users.scss";
import {
  UncontrolledDropdown,
  Badge,
  Media,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";

import * as Icon from "react-feather";
import { Route } from "react-router-dom";
import axiosConfig from "../../../axiosConfig";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Bell } from "react-feather";
import "moment-timezone";
import moment from "moment";
import swal from "sweetalert";

const handleNavigation = (e, path) => {
  e.preventDefault();
  window.location.replace(path);
};

const NavbarUser = () => {
  const [profilepic, setProfilepic] = useState([]);
  const [astronotification, setAstronotification] = useState([]);
  const [newStatus, setNewStatus] = useState("");
  const [viewnotify, setViewnotify] = useState("");
  const [countnotify, setCountnotify] = useState("");
  const [ButtonText, setButtonText] = useState("Offline");
  const history = useHistory();

  const handleofflineAstro = (e) => {
    e.preventDefault();
    let astroid = localStorage.getItem("astroId");
    let astroData = JSON.parse(localStorage.getItem("astroData"));
    // debugger;
    // if (!astroData) {
    //   window.location.replace("/#/pages/login");
    // }
    console.log(astroData?.token);
    // .post(`/user/status_change/${astroid}`, {
    axiosConfig
      .get(`/user/logout`, {
        headers: { Authorization: `Bearer ${astroData?.token}` },
      })
      .then((res) => {
        console.log(res.data);
        localStorage.removeItem("astroId");
        localStorage.removeItem("astroData");
        window.location.replace("/#/pages/login");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const getAllnotification = async () => {
    const astroId = localStorage.getItem("astroId");
    await axiosConfig
      .get(`/user/wait_queue_list/${astroId}`)
      .then((res) => {
        console.log(res.data.data);
        let newdata = res.data.data;
        let newarr = newdata.filter(
          (value) => value?.type === "Video" || value?.type === "Chat"
        );
        // console.log(newarr);
        setAstronotification(res.data.data);
        setViewnotify(res.data.count);
        handlenotification();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const newgetAllnotification = async () => {
    const astroId = localStorage.getItem("astroId");
    if (astroId) {
      await axiosConfig
        .get(`/user/wait_queue_list/${astroId}`)
        .then((res) => {
          // console.log(res.data.data);
          setAstronotification(res.data.data);
          setViewnotify(res.data.count);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handlenotification = () => {
    setInterval(() => {
      newgetAllnotification();
    }, 5000);
  };
  useEffect(() => {
    getAllnotification();
    async function getOneUser() {
      try {
        const astroId = localStorage.getItem("astroId");
        const data = await axiosConfig.get(`/admin/getoneAstro/${astroId}`);
        setProfilepic(data.data.data);
      } catch (error) {
        console.log("SomeThing Wrong");
      }
    }
    getOneUser();
  }, []);

  const handleshowofflineAstro = (e) => {
    e.preventDefault();
    let astroid = localStorage.getItem("astroId");
    axiosConfig
      .post(`/user/status_change/${astroid}`, {
        status: ButtonText,
      })
      .then((res) => {
        console.log(res.data);
        swal("Status changed Successfully");

        if (res.data.message === "success") {
          if (ButtonText === "Offline") {
            setButtonText("Online");
          } else setButtonText("offline");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleshowChangeMode = (e) => {
    e.preventDefault();

    let astroid = localStorage.getItem("astroId");
    axiosConfig
      .post(`/user/status_change/${astroid}`, {
        callingStatus: newStatus,
      })
      .then((res) => {
        console.log("res", res.data.data);
        swal("Status changed Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleStatus = (data) => {
    console.log(data);
    localStorage.setItem("notification_Accepted_id", data?._id);
    localStorage.setItem("CurrentChat_userid", data?.userid?._id);
    localStorage.setItem("get_room_id", true);
    let accept = {
      status: "Accept",
    };
    axiosConfig
      .post(`/user/acceptNotificationByAstro/${data?._id}`, accept)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    let type = data?.type;
    // axiosConfig
    //   .get(`/admin/dltNotificattion/${data?._id}`)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    if (type === "Chat") {
      history.push("/app/astrochat/chatastro");
    }
    if (type === "Video") {
      let astrodata = JSON.parse(localStorage.getItem("astroData"));
      window.open(`#/astrovideocall/${astrodata?._id}`, "_blank");
      // history.push(`//${astrodata?._id}`, "_blank");
    }
  };
  const handledelStatus = (data) => {
    axiosConfig
      .get(`/admin/dltNotificattion/${data?._id}`)
      .then((res) => {
        console.log(res);
        getAllnotification();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="">
      <ul className="nav navbar-nav navbar-nav-user float-right">
        <li>
          <select
            className="mt-1"
            onChange={(e) => setNewStatus(e.target.value)}
            id=""
          >
            <option value="Available">--Select--</option>
            <option value="Wait">Wait</option>
            <option value="Available">Available</option>
            <option value="Busy">Busy</option>
          </select>
          <Button
            onClick={handleshowChangeMode}
            size="sm"
            className="ml-1  btn btn-success "
          >
            Mark {newStatus && newStatus}
          </Button>
        </li>
        <li>
          <Button
            onClick={handleshowofflineAstro}
            size="sm"
            className="ml-1 mt-1 btn btn-success "
          >
            Mark {ButtonText && ButtonText}
          </Button>
        </li>

        <UncontrolledDropdown
          className="dropdown-notification nav-item"
          tag="li"
        >
          <DropdownToggle
            tag="a"
            data-toggle="dropdown"
            // aria-expanded={this.state.dropdownNotification}
            className="nav-link nav-link-label"
          >
            <Bell size={21} />

            <Badge pill color="primary" className="badge-up">
              {viewnotify + countnotify}
            </Badge>
          </DropdownToggle>

          <DropdownMenu tag="ul" right className="dropdown-menu-media">
            <li className="dropdown-menu-header">
              <div className="dropdown-header mt-0">
                <h3 className="text-white">{viewnotify + countnotify}</h3>
                <span className="notification-title"> Notifications</span>
              </div>
            </li>
            <PerfectScrollbar
              className="media-list overflow-hidden position-relative"
              options={{
                wheelPropagation: false,
              }}
            >
              <div className="">
                {astronotification
                  .map((data, i) => (
                    <Media key={i} className="dddddfd">
                      <Media left href="#">
                        <Bell size={21} />
                      </Media>
                      <Media body>
                        <Media
                          heading
                          className="success media-heading"
                          tag="h6"
                        >
                          <smaill className="notification-text ml-1">
                            <img
                              className="mr-2"
                              style={{ borderRadius: "8px" }}
                              src={data?.userid?.userimg}
                              width="22px"
                              height="22px"
                            />
                            <span>{data?.userid?.fullname}</span>
                          </smaill>
                        </Media>
                        <small className="notification-text">
                          <p className="mb-0">
                            Request for: <span>{data.type}</span>
                          </p>
                        </small>
                        <div className="bottom-tag">
                          <Button
                            onClick={() => handleStatus(data)}
                            className="success media-heading gt-1"
                          >
                            Accept
                          </Button>
                          <Button
                            onClick={() => handledelStatus(data)}
                            className="denger media-heading gt-2"
                          >
                            Reject
                          </Button>
                        </div>
                      </Media>
                      <small>
                        <time
                          className="media-meta"
                          dateTime="2015-06-11T18:29:20+08:00"
                        >
                          {moment(data.createdAt).format("ll")}
                        </time>
                      </small>
                    </Media>
                  ))
                  .reverse()}
              </div>
            </PerfectScrollbar>
            <li className="dropdown-menu-footer">
              <DropdownItem tag="a" className="p-1 text-center">
                Read all notifications
              </DropdownItem>
            </li>
          </DropdownMenu>
        </UncontrolledDropdown>

        {/* astrologet api call */}
        <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
          <DropdownToggle tag="a" className="nav-link dropdown-user-link">
            <div className="user-nav d-sm-flex d-none">
              {profilepic?.fullname}
            </div>
            <span data-tour="user">
              <img
                src={profilepic?.img}
                className="round"
                height="40"
                width="40"
                alt="avatar"
              />
            </span>
          </DropdownToggle>

          <DropdownMenu right>
            <DropdownItem
              tag="a"
              href="#"
              onClick={(e) => handleNavigation(e, "/#/pages/profile")}
            >
              <Icon.User size={14} className="mr-50" />
              <span className="align-middle">Edit Profile</span>
            </DropdownItem>

            <DropdownItem divider />
            <Route
              render={({ history }) => (
                <DropdownItem tag="a" onClick={(e) => handleofflineAstro(e)}>
                  <Icon.Power size={14} className="mr-50" />
                  <span className="align-middle">LogOut</span>
                </DropdownItem>
              )}
            />
          </DropdownMenu>
        </UncontrolledDropdown>
      </ul>
    </div>
  );
};
export default NavbarUser;
