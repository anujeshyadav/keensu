import React from "react";
import swal from "sweetalert";
import Stepper from "bs-stepper";
import axiosConfig from "../../../../axiosConfig";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bs-stepper/dist/css/bs-stepper.min.css";
import { Route } from "react-router-dom";
import { Container, Row, Col, Input, Form, Button, Label } from "reactstrap";
import "../../../../assets/scss/pages/users.scss";
class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      otp: "",
      email: "",
      mobile: "",
    };
    this.state = {
      gender: "",
      dob: "",
      primary_skills: "",
      all_skills: "",
      language: "",
      exp_in_years: "",
      conrubute_hrs: "",
      hear_abt_astrology: "",
      other_online_platform: "",
      why_onboard_you: "",
      suitable_tym_interview: "",
      crnt_city: "",
      income_src: "",
      highest_qualification: "",
      degree_deploma: "",
      clg_scl_name: "",
      lrn_abt_astrology: "",
      insta_link: "",
      fb_link: "",
      linkedln_link: "",
      youtube_link: "",
      website_link: "",
      anybody_prefer: "",
      min_earning_expe: "",
      max_earning_expe: "",
      long_bio: "",
      status: "Active",
      callCharge: "",
      fullname: "",
      img: {},
      min_amount: "",
      max_amount: "",
      // availability: {},
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      Thursday: "",
      Friday: "",
      Saturday: "",
      Sunday: "",
      password: "",
      cnfmPassword: "",
      approvedstatus: "false",
      otpverify: "true",
      selectedName: "",
      selectedFile: {},
    };
  }
  //Image Submit Handler
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    // this.setState({ selectedName: event.target.files[0].name });
  };

  componentDidMount() {
    this.stepper = new Stepper(document.querySelector("#stepper1"), {
      linear: false,
      animation: true,
    });
  }

  handleBackToLogin = (e) => {
    window.location.replace("/#");
  };
  handlechange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changeHandler = (e) => {
    console.log("value", e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    let astroId = localStorage.getItem("astroId");
    console.log("astroId", astroId);
    const data = new FormData();
    data.append("_id", astroId);
    data.append("gender", this.state.gender);
    data.append("dob", this.state.dob);
    data.append("primary_skills", this.state.primary_skills);
    data.append("language", this.state.language);
    data.append("all_skills", this.state.all_skills);
    data.append("exp_in_years", this.state.exp_in_years);
    data.append("conrubute_hrs", this.state.conrubute_hrs);
    data.append("hear_abt_astrology", this.state.hear_abt_astrology);
    data.append("other_online_platform", this.state.other_online_platform);
    data.append("why_onboard_you", this.state.why_onboard_you);
    data.append("suitable_tym_interview", this.state.suitable_tym_interview);
    data.append("crnt_city", this.state.crnt_city);
    data.append("income_src", this.state.income_src);
    data.append("highest_qualification", this.state.highest_qualification);
    data.append("degree_deploma", this.state.degree_deploma);
    data.append("clg_scl_name", this.state.clg_scl_name);
    data.append("lrn_abt_astrology", this.state.lrn_abt_astrology);
    data.append("insta_link", this.state.insta_link);
    data.append("fb_link", this.state.fb_link);
    data.append("linkedln_link", this.state.linkedln_link);
    data.append("youtube_link", this.state.youtube_link);
    data.append("website_link", this.state.website_link);
    data.append("anybody_prefer", this.state.anybody_prefer);
    data.append("min_earning_expe", this.state.min_earning_expe);
    data.append("max_earning_expe", this.state.max_earning_expe);
    data.append("long_bio", this.state.long_bio);
    data.append("status", this.state.status);
    data.append("callCharge", this.state.callCharge);
    data.append("fullname", this.state.fullname);
    // data.append("availability", this.state.availability);
    data.append("max_amount", this.state.max_amount);
    data.append("min_amount", this.state.min_amount);
    data.append("password", this.state.password);
    data.append("cnfmPassword", this.state.cnfmPassword);
    // data.append("sunday", this.state.Sunday);
    // data.append("monday", this.state.Monday);
    // data.append("tuesday", this.state.Tuesday);
    // data.append("wednesday", this.state.Wednesday);
    // data.append("thursday", this.state.Thursday);
    // data.append("friday", this.state.Friday);
    // data.append("saturday", this.state.Saturday);

    // data.append("email", this.state.email);
    // data.append("mobile", this.state.mobile);
    if (this.state.selectedFile !== null) {
      data.append("img", this.state.selectedFile);
    }
    axiosConfig
      .post(`/user/editAstroDetails/${this.state.userId}`, data)
      .then((response) => {
        console.log(response.data);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/");
      })
      .catch((error) => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error.response);
      });
  };

  stepperFirst = () => {
    const { email, mobile, fullname } = this.state;
    axiosConfig
      .post("/user/signup", {
        mobile: parseInt(mobile) !== isNaN ? parseInt(mobile) : "null",
        email: email,
        fullname: fullname,
        moblie: mobile,
      })
      .then((response) => {
        this.stepper.next();
        console.log("UserDetails", response.data);
        let userInfo = response.data.user;
        localStorage.setItem("astroId", response.data._id);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        swal("Error!", " Wrong details", "error");
      });
  };
  stepperSecond = () => {
    const { otp, mobile } = this.state;
    console.log(otp, mobile);
    axiosConfig
      .post("/user/verifyotp", {
        otp: parseInt(otp, mobile) !== isNaN ? parseInt(otp) : "null",
        // otp: otp,
        mobile: mobile,
      })
      .then((response) => {
        this.stepper.next();
        let userInfo = response.data.user;
        this.setState({ userId: response.data._id });
        localStorage.setItem("user_id", response.data._id);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        swal("Error!", " Wrong UserName or Password", "error");
      });
  };

  render() {
    return (
      <Container className="setpage">
        <section className="ptb-30 ">
          <div className="stp-1">
            <h4 className="th-2">Astrologer Register</h4>
            <div id="stepper1" className="bs-stepper">
              <div className="bs-stepper-header">
                <div className="step" data-target="#test-l-1">
                  <button className="step-trigger">
                    <span className="bs-stepper-circle">1</span>
                    <span className="bs-stepper-label">Personal Details</span>
                  </button>
                </div>
                <div className="line"></div>
                <div className="step" data-target="#test-otp">
                  <button className="step-trigger">
                    <span className="bs-stepper-circle">2</span>
                    <span className="bs-stepper-label">Verify OTP</span>
                  </button>
                </div>
                <div className="line"></div>
                <div className="step" data-target="#test-l-2">
                  <button className="step-trigger">
                    <span className="bs-stepper-circle">3</span>
                    <span className="bs-stepper-label">Skill Details</span>
                  </button>
                </div>
                <div className="line"></div>
                <div className="step" data-target="#test-l-3">
                  <button className="step-trigger">
                    <span className="bs-stepper-circle">4</span>
                    <span className="bs-stepper-label">Other Details</span>
                  </button>
                </div>
                {/* <div className="line"></div>
                <div className="step" data-target="#test-l-4">
                  <button className="step-trigger">
                    <span className="bs-stepper-circle">5</span>
                    <span className="bs-stepper-label">Availability </span>
                  </button>
                </div> */}
              </div>
              <div className="bs-stepper-content">
                <Form className="m-1" onSubmit={this.submitHandler}>
                  <div id="test-l-1" className="content">
                    <Row>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>FullName*</Label>
                          <Input
                            type="text"
                            name="fullname"
                            required
                            placeholder="Enter Your FullName"
                            value={this.state.fullname}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>

                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>Email Address*</Label>
                          <Input
                            type="email"
                            name="email"
                            required
                            placeholder="Enter Your email"
                            value={this.state.email}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>Mobile Number*</Label>
                          <PhoneInput
                            countryCodeEditable={false}
                            className="mob-int"
                            country={"in"}
                            value={this.state.mobile}
                            onChange={(mobile) => {
                              this.setState({ mobile: mobile });
                            }}
                          />
                          {this.state.mobileError !== "" ? (
                            <span style={{ color: "red" }}>
                              {this.state.mobileError}
                            </span>
                          ) : null}
                        </div>
                      </Col>
                    </Row>
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-primary"
                        onClick={() => this.stepperFirst()}
                      >
                        Next
                      </button>
                      <Route
                        render={({ history }) => (
                          <div
                            className="ml-1"
                            style={{ color: "blue", cursor: "pointer" }}
                            onClick={this.handleBackToLogin}
                          >
                            Back To Login
                          </div>
                        )}
                      />
                    </div>
                  </div>

                  <div id="test-otp" className="content">
                    <Row>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>OTP*</Label>
                          <Input
                            type="text"
                            required
                            name="otp"
                            placeholder="Enter Your OTP"
                            value={this.state.otp}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                    </Row>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.stepperSecond()}
                    >
                      Next
                    </button>
                  </div>
                  <div id="test-l-2" className="content">
                    <Row>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>Gender*</Label>
                          <select
                            className="form-control"
                            value={this.state.gender}
                            onChange={this.changeHandler}
                            name="gender"
                          >
                            <option selected>--select--</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>DOB*</Label>
                          <Input
                            type="date"
                            required
                            name="dob"
                            maxLength="8"
                            value={this.state.dob}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>Primary Skills*</Label>
                          <Input
                            placeholder="Primary Skills"
                            name="primary_skills"
                            type="text"
                            value={this.state.primary_skills}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>All Skills*</Label>
                          <Input
                            placeholder="All Skills"
                            name="all_skills"
                            type="text"
                            value={this.state.all_skills}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>

                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>Minimum Amount*</Label>
                          <Input
                            placeholder="Enter Amount"
                            name="min_amount"
                            type="text"
                            value={this.state.min_amount}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>

                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>Maximum Amount*</Label>
                          <Input
                            required
                            placeholder="Enter Amount"
                            name="max_amount"
                            type="text"
                            value={this.state.max_amount}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>Language*</Label>
                          <Input
                            placeholder="Language"
                            name="language"
                            type="text"
                            value={this.state.language}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>Experience in years*</Label>
                          <Input
                            type="number"
                            placeholder="Experience years"
                            name="exp_in_years"
                            required
                            value={this.state.exp_in_years}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div class="form-group mtb-10">
                          <Label>
                            How many hours you can contribute daily?*
                          </Label>
                          <Input
                            type="number"
                            placeholder="Daily Hours"
                            name="conrubute_hrs"
                            required
                            value={this.state.conrubute_hrs}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>Where did you hear about Astrotalk?*</Label>
                          <Input
                            required
                            type="text"
                            name="hear_abt_astrology"
                            value={this.state.hear_abt_astrology}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="12">
                        <p className="mb-0 mt-10">
                          Are you working on any other online platform?*
                        </p>
                        <Row>
                          <Col md="6">
                            <div className="form-group mtb-10">
                              <Label>Name of platform</Label>
                              <Input
                                type="text"
                                required
                                name="other_online_platform"
                                value={this.state.other_online_platform}
                                onChange={this.changeHandler}
                              />
                            </div>
                          </Col>
                          {/* <Col md="6">
                            <div className="form-group mtb-10">
                              <Label>Monthly Earning</Label>
                              <Input type="number" value={this.state.mont} />
                            </div>
                          </Col> */}
                        </Row>
                      </Col>
                    </Row>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.stepper.next()}
                    >
                      Next
                    </button>
                  </div>
                  <div id="test-l-3" className="content mt-5">
                    <Row>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>
                            Why do you think we should onboard you?*
                          </Label>
                          <Input
                            type="text"
                            required
                            name="why_onboard_you"
                            value={this.state.why_onboard_you}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>What is a suitable time for interview*</Label>
                          <Input
                            type="text"
                            required
                            name="suitable_tym_interview"
                            value={this.state.suitable_tym_interview}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>Which city do you currently live in?</Label>
                          <Input
                            type="text"
                            required
                            name="crnt_city"
                            value={this.state.crnt_city}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>Call Charge</Label>
                          <Input
                            type="number"
                            required
                            name="callCharge"
                            value={this.state.callCharge}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>
                            Main source of business (other than astrology)*
                          </Label>
                          <Input
                            placeholder="source of business"
                            name="income_src"
                            type="text"
                            value={this.state.income_src}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>Select your highest qualification*</Label>
                          <Input
                            placeholder="qualification"
                            name="highest_qualification"
                            type="text"
                            value={this.state.highest_qualification}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>Degree/Diploma*</Label>
                          <Input
                            placeholder="Degree/Diploma"
                            name="degree_deploma"
                            type="text"
                            value={this.state.degree_deploma}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>College/School/University*</Label>
                          <Input
                            type="text"
                            name="clg_scl_name"
                            required
                            value={this.state.clg_scl_name}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>From where did you learn Astrology?</Label>
                          <Input
                            type="text"
                            name="lrn_abt_astrology"
                            required
                            value={this.state.lrn_abt_astrology}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <Label>User Image</Label>
                        <Input
                          className="form-control"
                          type="file"
                          name="img"
                          onChange={this.onChangeHandler}
                        />
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>Instagram profile link</Label>
                          <Input
                            type="text"
                            name="insta_link"
                            required
                            value={this.state.insta_link}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>Facebook profile link</Label>
                          <Input
                            type="text"
                            name="fb_link"
                            required
                            value={this.state.fb_link}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>LinkedIn profile link</Label>
                          <Input
                            type="text"
                            name="linkedln_link"
                            required
                            value={this.state.linkedln_link}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>Youtube channel link</Label>
                          <Input
                            type="text"
                            name="youtube_link"
                            required
                            value={this.state.youtube_link}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>Name of the person who referred you?</Label>
                          <Input
                            type="text"
                            name="anybody_prefer"
                            required
                            value={this.state.anybody_prefer}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>
                            Minimum Earning Expectation from Astrogyata*
                          </Label>
                          <Input
                            type="number"
                            name="min_earning_expe"
                            required
                            value={this.state.min_earning_expe}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>
                            Maximum Earning Expectation from Astrogyata*
                          </Label>
                          <Input
                            type="number"
                            name="max_earning_expe"
                            required
                            value={this.state.max_earning_expe}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>Website profile link</Label>
                          <Input
                            type="text"
                            name="website_link"
                            required
                            value={this.state.website_link}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label>Password</Label>
                          <Input
                            type="password"
                            name="password"
                            placeholder=" Password"
                            required
                            value={this.state.password}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mtb-10">
                          <Label> Confirm Password</Label>
                          <Input
                            type="password"
                            name="cnfmPassword"
                            placeholder="Confirm Password"
                            required
                            value={this.state.cnfmPassword}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="12">
                        <div className="form-group mtb-10">
                          <Label>Long bio*</Label>
                          <textarea
                            type="text"
                            className="form-control"
                            name="long_bio"
                            required
                            value={this.state.long_bio}
                            onChange={this.changeHandler}
                            placeholder="Please let us know more about you"
                          />
                        </div>
                      </Col>
                    </Row>
                    <p className="ptb-10">
                      You can reach out to us for Astrologer onboarding support
                      team at onboarding@Astrogyata.com in case of any issues or
                      queries.
                    </p>
                    {/* <button className="btn btn-primary" onClick={() => this.s}>
                      Submit
                    </button> */}
                    <Button type="submit" className="btn btn-primary mt-5">
                      Submit
                    </Button>
                  </div>
                  {/* <div id="test-l-4" className="content"> */}
                  {/* <div>
                        {inputList.map((x, i) => {
                          return (
                            <div className="box">
                              <input
                                name="firstName"
                                placeholder="Enter First Name"
                                value={x.firstName}
                                onChange={e => handleInputChange(e, i)}
                              />
                              <input
                                className="ml10"
                                name="lastName"
                                placeholder="Enter Last Name"
                                value={x.lastName}
                                onChange={e => handleInputChange(e, i)}
                              />
                              <div className="btn-box">
                                {inputList.length !== 1 && <button
                                  className="mr10"
                                  onClick={() => handleRemoveClick(i)}>Remove</button>}
                                {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                              </div>
                            </div>
                          );
                        })}
                      </div> */}
                  {/* <Avilitiy /> */}
                  {/* <Button type="submit" className="btn btn-primary mt-5">
                      Submit
                    </Button> */}
                  {/* </div> */}
                </Form>
              </div>
            </div>
          </div>
        </section>
      </Container>
    );
  }
}
export default Register;
