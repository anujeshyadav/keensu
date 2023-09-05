import React from "react";

import {
  CardBody,
  FormGroup,
  Form,
  Input,
  Button,
  Label,
  Col,
} from "reactstrap";
import { Phone } from "react-feather";
import { loginWithJWT } from "../../../../redux/actions/auth/loginActions";
import { connect } from "react-redux";

import { Route } from "react-router-dom";
import swal from "sweetalert";
// import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
class LoginJWT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      otpMsg: "",
      otp: "",
    };
  }
  handlechange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSignUp = (e) => {
    window.location.replace("/#/pages/register");
  };
  handleLogin = (e) => {
    e.preventDefault();
    axiosConfig
      .post("/user/loginsendotp", {
        mobile: this.state.mobile,
      })
      .then((response) => {
        console.log(response.data);
        this.setState({ otpMsg: response.data.msg });
        if (response.data.msg === "Waiting for Admin Approval") {
          swal("Waiting for Admin Approval");
        }
      })
      .catch((error) => {
        console.log(error.response);
        swal(
          "error!",
          "Invalied! Please enter valied Phone No. or Password",
          "error"
        );
      });
  };
  handleOtp = (e) => {
    e.preventDefault();
    if (this.state.otp) {
      axiosConfig
        .post("/user/verifyotp", {
          mobile: this.state.mobile,
          otp: this.state.otp,
        })

        .then((response) => {
          if (response.data.msg === "otp verified") {
            swal("Login Successfull");
            localStorage.setItem("astroId", response.data._id);
            localStorage.setItem("astroData", JSON.stringify(response.data));
            // localStorage.setItem("user_id", response.data.data._id);
            // this.props.history.push("/");
            window.location.replace("/#/");
          }
        })
        .catch((error) => {
          console.log(error.response.data._id);
          swal(
            "error!",
            "Invalied! Please enter valied Phone No. or Password",
            "error"
          );
        });
    } else swal("Enter Otp First");
  };

  render() {
    return (
      <React.Fragment>
        {this.state.otpMsg === "otp Send Successfully" ? (
          <CardBody className="pt-1">
            <Form onSubmit={this.handleOtp}>
              <FormGroup className="form-label-group position-relative has-icon-left">
                <Input
                  type="number"
                  name="otp"
                  required
                  placeholder="Enter OTP"
                  maxLength={6}
                  value={this.state.otp}
                  onChange={this.handlechange}
                  // required
                />

                <Label>OTP*</Label>
              </FormGroup>

              <div className="d-flex justify-content-center">
                <Route
                  render={({ history }) => (
                    <Button.Ripple color="primary" type="submit">
                      Login
                    </Button.Ripple>
                  )}
                />
              </div>
            </Form>
          </CardBody>
        ) : (
          <CardBody className="pt-1">
            <Form onSubmit={this.handleLogin}>
              <FormGroup className="form-label-group position-relative has-icon-left">
                <div className="form-group mtb-10">
                  <Label>Mobile Number*</Label>
                  <PhoneInput
                    countryCodeEditable={false}
                    className="mob-int"
                    country={"in"}
                    value={this.state.mobile}
                    onChange={(mobile) => {
                      this.setState({ mobile: mobile });
                      console.log(mobile);
                    }}
                  />
                  {this.state.mobileError !== "" ? (
                    <span style={{ color: "red" }}>
                      {this.state.mobileError}
                    </span>
                  ) : null}
                </div>
                {/* </Col> */}
              </FormGroup>

              <div className="d-flex justify-content-center">
                <Route
                  render={({ history }) => (
                    <Button.Ripple color="primary" type="submit">
                      Get OTP
                    </Button.Ripple>
                  )}
                />
              </div>
            </Form>

            <div className="d-flex mt-2">
              <div>New On Our PlatForm </div>
              <Route
                render={({ history }) => (
                  <div
                    className="ml-1"
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={this.handleSignUp}
                  >
                    Sign up
                  </div>
                )}
              />
              {/* <Route
                render={({ history }) => (
                  <button color="primary" type="submit">
                    Sign up
                  </button>
                )}
              /> */}
            </div>
          </CardBody>
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    values: state.auth.login,
  };
};

export default connect(mapStateToProps, { loginWithJWT })(LoginJWT);
// export function getastroID() {
//   const name = JSON.parse(localStorage.getItem("astroData"));
//   const astroname = name.fullname;
//   return astroname;
// }
