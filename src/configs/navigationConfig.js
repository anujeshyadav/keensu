import React from "react";
import * as Icon from "react-feather";
import { FaRupeeSign } from "react-icons/fa";
//
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home color="green" size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/",
  },
  {
    type: "groupHeader",
    groupTitle: "Component",
  },

  // {
  //   id: "requestuser",
  //   title: "Request User List",
  //   type: "item",
  //   icon: <Icon.Users color="blue" size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/userrequest/userrequestlist",
  // },

  {
    id: "callhistory",
    title: "Call History",
    type: "item",
    icon: <Icon.Phone color="green" size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/historycall/callhistory",
  },

  // {
  //   id: "conversationList",
  //   title: "Conversation List",
  //   type: "item",
  //   icon: <Icon.MessageCircle size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/conversation/conversationList",
  // },

  {
    id: "conversationintakeList",
    title: "Conversation Intake List",
    type: "item",
    icon: <Icon.Tablet color="blue" size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/conversation/intakelist",
  },

  {
    id: "chatastro",
    title: "Astro-Chat",
    type: "item",
    icon: <Icon.MessageSquare size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/astrochat/chatastro",
  },

  // {
  //   id: "chat",
  //   title: "Chat",
  //   type: "item",
  //   icon: <Icon.MessageSquare size={16} />,
  //   navLink: "/chat",
  //   permissions: ["admin", "editor"],
  // },

  {
    id: "Uploads",
    title: "Gallary",
    type: "item",
    icon: <Icon.Upload size={16} />,
    navLink: "/uploads",
    permissions: ["admin", "editor"],
  },

  {
    id: "products",
    title: "Product",
    type: "collapse",
    icon: <Icon.Box color="blue" size={20} />,
    children: [
      {
        id: "productlist",
        title: "Product List",
        type: "item",
        icon: <Icon.List color="orange" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/products/productlist",
      },
    ],
  },

  {
    id: "askuserquestion",
    title: "Users Ask Question",
    type: "item",
    icon: <Icon.HelpCircle color="red" size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/user/faquserlist",
    // navLink: "/app/askquestion/useraskqueslist",
  },
  {
    type: "groupHeader",
    groupTitle: "Videocall",
  },
  {
    id: "Videocall",
    title: "Videocall",
    type: "collapse",
    icon: <Icon.Video color="green" size={20} />,
    children: [
      // {
      //   id: "video",
      //   title: "Video-Channel",
      //   type: "item",
      //   icon: <Icon.List size={16} />,
      //   navLink: "/videocallmain",
      //   permissions: ["admin", "editor"],
      // },
      {
        id: "Yourvideo",
        title: "Videocall",
        type: "item",
        icon: <Icon.Video color="red" size={16} />,
        navLink: "/startvideocall",
        permissions: ["admin", "editor"],
      },
    ],
  },
  {
    type: "groupHeader",
    groupTitle: "LiveStreaming",
  },
  {
    id: "Yourstreaming",
    title: "LiveStreaming",
    type: "item",
    icon: <Icon.Video size={16} />,
    navLink: "/yourlivestream",
    permissions: ["admin", "editor"],
  },
  // {
  //   id: "liveStreaming",
  //   title: "LiveStreaming",
  //   type: "collapse",
  //   icon: <Icon.Video size={20} />,
  //   children: [
  //     {
  //       id: "video",
  //       title: "Streaming Channel",
  //       type: "item",
  //       icon: <Icon.List size={16} />,
  //       navLink: "/livestreaming",
  //       permissions: ["admin", "editor"],
  //     },
  //     {
  //       id: "Yourvideo",
  //       title: "LiveStreaming ",
  //       type: "item",
  //       icon: <Icon.Video size={16} />,
  //       navLink: "/yourlivestream",
  //       permissions: ["admin", "editor"],
  //     },
  //     // {
  //     //   id: "Yourvideolive",
  //     //   title: "LiveStreamingone",
  //     //   type: "item",
  //     //   icon: <Icon.Video size={16} />,
  //     //   navLink: "/yourlivestreamone",
  //     //   permissions: ["admin", "editor"],
  //     // },
  //   ],
  // },
  {
    id: "waitqueue",
    title: "WaitQueue for Voicecall",
    type: "item",
    icon: <Icon.List color="red" size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/waitqueue/WaitQueueList",
  },
  // {
  //   id: "waitqueuechat",
  //   title: "WaitQueue Chat/Video",
  //   type: "item",
  //   icon: <Icon.List color="red" size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/waitqueue/waitQueueListcall",
  // },

  {
    id: "orderhistory",
    title: "Order History",
    type: "item",
    icon: <Icon.Box color="green" size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/orderhistory/orderhisList",
  },

  {
    id: "astroratings",
    title: " Ratings and Reviews",
    type: "item",
    icon: <Icon.Star fill="#ffcc01" color="#ffcc01" size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/reviewrating/ratingreview",
  },

  // {
  //   id: "prediction",
  //   title: "Prediction",
  //   type: "item",
  //   icon: <Icon.BarChart2 size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/prediction/predictionlist",
  // },

  // {
  //   id: "poojapackage",
  //   title: "Pooja Package",
  //   type: "item",
  //   icon: <Icon.Package size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/poojapackage/packagelist",
  // },

  {
    id: "reportstatus",
    title: "Report",
    type: "collapse",
    icon: <Icon.List color="blue" size={20} />,
    children: [
      {
        id: "earning",
        title: "Earning",
        type: "item",
        icon: <Icon.Circle fill="green" color="green" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/report/earningreport",
      },
      {
        id: "callreport",
        title: "Call Earning",
        type: "item",
        icon: <Icon.List color="green" size={14} />,
        permissions: ["admin", "editor"],
        navLink: "/app/report/callreport",
      },
      // {
      //   id: "videocallreport",
      //   title: "Video call Report",
      //   type: "item",
      //   icon: <Icon.Video color="green" size={18} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/report/videocallreport",
      // },
      {
        id: "chatcallreport",
        title: "Chat/VideoCall Report",
        type: "item",
        icon: <Icon.List color="green" size={14} />,
        permissions: ["admin", "editor"],
        navLink: "/app/report/chatreport",
      },
    ],
  },

  {
    id: "withdrawalRequests",
    title: "Withdrawal Approves",
    type: "item",
    icon: <Icon.RefreshCw color="red" size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/transaction/withdrawlrqest",
  },

  {
    id: "transactionHistory",
    title: "Transaction History",
    type: "item",
    icon: <FaRupeeSign size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/transaction/transactionHistory",
  },

  {
    id: "payoutrequest",
    title: "Payout Request",
    type: "item",
    icon: <FaRupeeSign size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/report/payoutreport",
  },
  // {
  //   id: "adcommission",
  //   title: "Admin Commssion ",
  //   type: "item",
  //   icon: <Icon.DollarSign size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/report/asbycommissionlist",
  // },
  // {
  //   id: "faquserlist",
  //   title: "User FAQ",
  //   type: "item",
  //   icon: <Icon.HelpCircle size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/user/faquserlist",
  // },
];
export default navigationConfig;
