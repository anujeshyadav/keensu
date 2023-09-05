import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  CustomInput,
} from "reactstrap";

import axiosConfig from "../../../axiosConfig";

import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";
import { data } from "jquery";
import swal from "sweetalert";
export class ViewOneFaq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Answer: "",
      Data: {},
    };
    this.state = {
      eventN: [],
    };
  }

  handleSubmitAnswer = (e, data) => {
    console.log(data._id);
    e.preventDefault();
    let payload = {
      answer: this.state.Answer,
    };
    axiosConfig
      .post(`/user/reply/${data?._id}`, payload)
      .then((res) => {
        console.log(res.data.data);
        swal("Sucessfully", "Answer Given");
        this.setState({ Answer: "" });
      })
      .catch((err) => {
        console.log(err);
        swal("Something went wrong");
      });
  };

  async componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/user/getone_ask_qus/${id}`)
      .then((res) => {
        console.log(res?.data?.data);
        this.setState({ Data: res?.data?.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                You Got Question
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/user/faquserlist")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Row>
              <Col lg="6" md="6" sm="12" className="mb-2">
                <h6>Question</h6>
                <h6>{this.state.Data?.question}</h6>
              </Col>

              <Col lg="6" md="6" sm="12" className="mb-2">
                <Label>Your Answer</Label>
                <Input
                  required
                  type="text"
                  name="Answer"
                  placeholder="Enter Price Online"
                  value={this.state.Answer}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
            </Row>

            <Row>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Button
                  onClick={(e) => this.handleSubmitAnswer(e, this.state.Data)}
                  color="primary"
                  className="mr-1 mb-1"
                >
                  Save
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default ViewOneFaq;
