import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";
import axios from "axios";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import axiosConfig from "../../../axiosConfig";
import swal from "sweetalert";

export default class AddCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      customer_email: "",
      mobile_no: "",
      dateofregister: "",
      password: "",
      cnfpassword: "",
      dateofbirth: "",
      selectedFile: null,
      status: "",
    };
  }

  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    // this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("fullname", this.state.first_name);
    data.append("email", this.state.customer_email);
    data.append("mobile", this.state.mobile_no);
    // data.append("gender", this.state.gender);
    // data.append("city", this.state.city);
    data.append("dob", this.state.dateofbirth);
    data.append("password", this.state.password);
    data.append("cnfmPassword", this.state.cnfpassword);
    if (this.state.selectedFile !== null) {
      data.append("userimg", this.state.selectedFile);
    }

    // this.setState({ otp: false });
    if (this.state.password === this.state.cnfpassword) {
      axiosConfig
        .post(`/user/usersignup`, data)
        .then((response) => {
          console.log(response.data.msg);
          // localStorage.setItem("auth-token", response.data.token);
          this.setState({
            // token: response.data.token,
            otpMsg: response.data.otp,
          });
          swal("Success!", " Register Successful Done!", "success");
          // this.props.history.push("/");
        })
        .catch((error) => {
          console.log(error.response.data.message === "already exists");
          if (error.response.data.message === "already exists") {
            swal("user Already register with same mobile and email");
          }
          // swal("Error!", "Something went wrong", "error");
        });
    } else swal("Password and Confirm password does not match");

    // OLD CODE
    // axiosConfig
    //   .post("/user/customersignup", this.state)
    //   .then((response) => {
    //     console.log(response);
    //     alert("Customer Added Successful");
    //     this.props.history.push("/app/customer/customerList");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Customer"
          breadCrumbParent="Home"
          breadCrumbActive="Add Customer "
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 sm="6" className="float-left">
                Add User
              </h1>
            </Col>

            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/userrequest/userrequestlist")
                    }
                  >
                    {" "}
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>first Name</Label>
                  <Input
                    required
                    type="text"
                    name="first_name"
                    placeholder="Enter full Name"
                    value={this.state.first_name}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label> Email</Label>
                  <Input
                    required
                    type="email"
                    name="customer_email"
                    placeholder="Email"
                    value={this.state.customer_email}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Mobile No.</Label>
                  <Input
                    required
                    type="number"
                    name="mobile_no"
                    placeholder="Mobile No."
                    value={this.state.mobile_no}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>DOB</Label>
                  <Input
                    required
                    type="date"
                    name="dateofbirth"
                    placeholder="Enter Confirm  Password"
                    value={this.state.sortorder}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Date Of Register</Label>
                  <Input
                    required
                    type="date"
                    name="dateofregister"
                    placeholder="Enter Confirm  Password"
                    value={this.state.sortorder}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Password </Label>
                  <Input
                    required
                    type="text"
                    name="password"
                    placeholder="Enter Password"
                    value={this.state.sortorder}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Confirm Password </Label>
                  <Input
                    required
                    type="text"
                    name="cnfpassword"
                    placeholder="Enter Confirm  Password"
                    value={this.state.sortorder}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
              </Row>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label className="mb-1">Status</Label>
                <div
                  className="form-label-group"
                  onChange={(e) => this.changeHandler1(e)}
                >
                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="status"
                    value="Active"
                  />
                  <span style={{ marginRight: "20px" }}>Active</span>

                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="status"
                    value="Inactive"
                  />
                  <span style={{ marginRight: "3px" }}>Inactive</span>
                </div>
              </Col>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add User
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
