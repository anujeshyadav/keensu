import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import axios from "axios";
import { ContextLayout } from "../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Eye, Edit, Trash2, ChevronDown } from "react-feather";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import swal from "sweetalert";

class WaitQueueList extends React.Component {
  state = {
    rowData: [],
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    setText: null,
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 100,
        filter: true,
        // checkboxSelection: true,
        // headerCheckboxSelectionFilteredOnly: true,
        // headerCheckboxSelection: true,
      },
      {
        headerName: "Action",
        field: "Action",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <Button
                onClick={() =>
                  this.handleConnect(params?.data?.value?.callType, params)
                }
                className="mt-1"
                color="success"
                size="sm"
              >
                {this.state.setText ? (
                  <>{this.state.setText}</>
                ) : (
                  <>{params?.data?.value?.callType}</>
                )}
              </Button>
            </div>
          );
        },
      },
      {
        headerName: "Name",
        field: "fullname",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data?.user?.fullname}</span>
            </div>
          );
        },
      },
      {
        headerName: "User Bal",
        field: "balance",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data?.user?.amount}</span>
            </div>
          );
        },
      },

      {
        headerName: "Conversation Type",
        field: "type",
        filter: true,
        width: 200,

        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <Button
                onClick={() =>
                  this.handleConnect(params?.data?.value?.callType, params)
                }
                size="sm"
                color="primary"
                className="mt-2"
              >
                {this.state.setText != null ? (
                  <>{this.state.setText}</>
                ) : (
                  <>{params?.data?.value?.callType}</>
                )}
              </Button>
            </div>
          );
        },
      },

      // {
      //   headerName: "Wait Queue",
      //   field: "waiting_queue",
      //   filter: true,
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <span>{params.data.astroid?.waiting_queue}</span>
      //       </div>
      //     );
      //   },
      // },

      // {
      //   headerName: "Wait Time",
      //   field: "waiting_tym",
      //   filter: true,
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <span>{params.data?.astroid?.waiting_tym}</span>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "status",
      //   field: "status",
      //   filter: true,
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <span>{params.data?.status}</span>
      //       </div>
      //     );
      //   },
      // },

      // {
      //   headerName: "Actions",
      //   field: "sortorder",
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="actions cursor-pointer">
      //         <Route
      //           render={({ history }) => (
      //             <Eye
      //               className="mr-50"
      //               size="25px"
      //               color="green"
      //               onClick={() =>
      //                 history.push(
      //                   `/app/userride/viewUserRide/${params.data._id}`
      //                 )
      //               }
      //             />
      //           )}
      //         />
      //         <Route
      //           render={({ history }) => (
      //             <Edit
      //               className="mr-50"
      //               size="25px"
      //               color="blue"
      //               onClick={() => history.push("/app/userride/editUserRide")}
      //             />
      //           )}
      //         />
      //         <Trash2
      //           className="mr-50"
      //           size="25px"
      //           color="red"
      //           onClick={() => {
      //             let selectedData = this.gridApi.getSelectedRows();
      //             this.runthisfunction(params.data._id);
      //             this.gridApi.updateRowData({ remove: selectedData });
      //           }}
      //         />
      //       </div>
      //     );
      //   },
      // },
    ],
  };

  handleChat = (data) => {
    console.log(data);
  };

  handleConnect = (type, userdata) => {
    console.log(userdata.data);
    // if (type === "Chat") {
    //   this.props.history.push("/app/astrochat/chatastro");
    // }
    // if (type === "VoiceCall") {
    //   this.setState({ setText: "Calling" });
    //   this.handleJoinCall(userdata.data);
    // }
    // if (type === "Video") {
    //   let astrodata = JSON.parse(localStorage.getItem("astroData"));
    //   this.props.history.push(`/astrovideocall/${astrodata?._id}`);
    // }
  };
  handleJoinCall = (data) => {
    console.log(data);
    let astrodata = JSON.parse(localStorage.getItem("astroData"));

    // let bal = data?.userid?.amount;
    let obj = {
      userid: data?.value?.userId,
      astroid: astrodata?._id,
      From: astrodata?.mobile,
      To: data?.user?.mobile,
    };
    axiosConfig
      .post(`/user/make_call`, obj)
      .then((response) => {
        console.log("Calling from astro", response.data);
      })
      .catch((error) => {
        console.log(error?.response?.data?.error);
        if (error?.response?.data?.error) {
          swal("Try again after some Time ", "Internal server error or busy");
        }
      });
  };

  handleJoin = (data) => {
    console.log(data?.data);
    if (data?.data?.type === "Voice Call") {
      this.handleJoinCall(data);
    } else if (data?.data?.type === "Chat") {
      this.handleChat(data);
    }
  };
  async componentDidMount() {
    const astroId = localStorage.getItem("astroId");
    // this is only for call
    await axiosConfig
      .get(`/user/getWaitQueueList/${astroId}`)
      .then((response) => {
        console.log(response);
        let rowData = response.data?.waitQueueList;
        let reversedata = response.data?.waitQueueList.reverse();
        // console.log(reversedata);
        // console.log(rowData);

        this.setState({ rowData: reversedata });
      });
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };
  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };
  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };
  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Wait Queue List"
          breadCrumbParent="Home"
          breadCrumbActive="Wait Queue List"
        />

        <Row className="app-user-list">
          <Col sm="12"></Col>
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col>
                  <h1 sm="6" className="float-left">
                    Wait Queue List for Video and Chat
                  </h1>
                </Col>
                <Col></Col>
              </Row>
              <CardBody>
                {this.state.rowData === null ? null : (
                  <div className="ag-theme-material w-100 my-2 ag-grid-table">
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <div className="mb-1">
                        <UncontrolledDropdown className="p-1 ag-dropdown">
                          <DropdownToggle tag="div">
                            {this.gridApi
                              ? this.state.currenPageSize
                              : "" * this.state.getPageSize -
                                (this.state.getPageSize - 1)}{" "}
                            -{" "}
                            {this.state.rowData.length -
                              this.state.currenPageSize *
                                this.state.getPageSize >
                            0
                              ? this.state.currenPageSize *
                                this.state.getPageSize
                              : this.state.rowData.length}{" "}
                            of {this.state.rowData.length}
                            <ChevronDown className="ml-50" size={15} />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(20)}
                            >
                              20
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(50)}
                            >
                              50
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(100)}
                            >
                              100
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(134)}
                            >
                              134
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                      <div className="d-flex flex-wrap justify-content-between mb-1">
                        <div className="table-input mr-1">
                          <Input
                            placeholder="search..."
                            onChange={(e) =>
                              this.updateSearchQuery(e.target.value)
                            }
                            value={this.state.value}
                          />
                        </div>
                        <div className="export-btn">
                          <Button.Ripple
                            color="primary"
                            onClick={() => this.gridApi.exportDataAsCsv()}
                          >
                            Export as CSV
                          </Button.Ripple>
                        </div>
                      </div>
                    </div>
                    <ContextLayout.Consumer>
                      {(context) => (
                        <AgGridReact
                          gridOptions={{}}
                          rowSelection="multiple"
                          defaultColDef={defaultColDef}
                          columnDefs={columnDefs}
                          rowData={rowData}
                          onGridReady={this.onGridReady}
                          colResizeDefault={"shift"}
                          animateRows={true}
                          floatingFilter={false}
                          pagination={true}
                          paginationPageSize={this.state.paginationPageSize}
                          pivotPanelShow="always"
                          enableRtl={context.state.direction === "rtl"}
                        />
                      )}
                    </ContextLayout.Consumer>
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default WaitQueueList;
