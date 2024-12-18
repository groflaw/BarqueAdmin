import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error, Login, HomeLayout } from "./pages";
import Home from "./pages/DashBoard";
import Boat from "./pages/Boats";
import Detail from "./pages/Boats/Detail";
import BoatHome from "./pages/Boats/Home";
import BoatOption from "./pages/Boats/Option";
import BoatInfo from "./pages/Boats/BoatInfo";
import BoatPlan from "./pages/Boats/Plan";
import BoatLocation from "./pages/Boats/Location";
import BoatPicture from "./pages/Boats/Picture";
import BoatCancellation from "./pages/Boats/Cancellation";
import BoatAccessories from "./pages/Boats/Accessories";
import BoatAllowes from "./pages/Boats/Allowes";
import BoatDocImage from "./pages/Boats/DocImage";

import Users from "./pages/Users";
import UsersHome from "./pages/Users/Home";

import Bookings from "./pages/Bookings";
import BookingsHome from "./pages/Bookings/Home";

import Sales from "./pages/Sales";
import SalesHome from "./pages/Sales/Home";

import Guest from "./pages/Guest";
import GuestHome from "./pages/Guest/Home";

import Message from "./pages/Message";
import MessageHome from "./pages/Message/Home";

import Refunds from "./pages/Refunds";
import RefundsHome from "./pages/Refunds/Home";
import RefundDetail from "./pages/Refunds/Detail";
import RefundProof from "./pages/Refunds/Proof";

import Reviews from "./pages/Reviews";
import ReviewsHome from "./pages/Reviews/Home";

import Data from "./pages/Data";
import DataHome from "./pages/Data/Home";

import AdminUsers from './pages/AdminUsers';
import AdminUsersHome from "./pages/AdminUsers/Home";

import { store } from "./store";
import { ErrorElement } from "./components";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorElement />,
      },
      {
        path: "boat",
        element: <Boat />,
        children: [
          {
            index: true,
            element: <BoatHome />,
          },
          {
            path: "detail",
            element: <Detail />,
          },
          {
            path: "option",
            element: <BoatOption />,
          },
          {
            path: "info",
            element: <BoatInfo />,
          },
          {
            path: "plan",
            element: <BoatPlan />,
          },
          {
            path: "location",
            element: <BoatLocation />,
          },
          {
            path: "picture",
            element: <BoatPicture />,
          },
          {
            path: "cancellation",
            element: <BoatCancellation />,
          },
          {
            path: "accessories",
            element: <BoatAccessories />,
          },
          {
            path: "allowes",
            element: <BoatAllowes />,
          },
          {
            path: "docimage",
            element: <BoatDocImage />,
          },
        ],
      },
      {
        path: "users",
        element: <Users />,
        children: [
          {
            index: true,
            element: <UsersHome />,
          },
        ],
      },
      {
        path: "bookings",
        element: <Bookings />,
        children: [
          {
            index: true,
            element: <BookingsHome />,
          },
        ],
      },
      {
        path: "sales",
        element: <Sales />,
        children: [
          {
            index: true,
            element: <SalesHome />,
          },
        ],
      },
      {
        path: "guest",
        element: <Guest />,
        children: [
          {
            index: true,
            element: <GuestHome />,
          },
        ],
      },
      {
        path: "message",
        element: <Message />,
        children: [
          {
            index: true,
            element: <MessageHome />,
          },
        ],
      },
      {
        path: "refunds",
        element: <Refunds />,
        children: [
          {
            index: true,
            element: <RefundsHome />,
          },
          {
            path: "detail",
            element: <RefundDetail />,
          },
          {
            path: "proof",
            element: <RefundProof />,
          },
        ],
      },
      {
        path: "reviews",
        element: <Reviews />,
        children: [
          {
            index: true,
            element: <ReviewsHome />,
          },
        ],
      },
      {
        path: "data",
        element: <Data />,
        children: [
          {
            index: true,
            element: <DataHome />,
          },
        ],
      },
      {
        path : "adminusers",
        element : <AdminUsers />,
        children :[
          {
            index : true,
            element : <AdminUsersHome />
          }
        ]
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
