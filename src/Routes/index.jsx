import { createBrowserRouter } from "react-router-dom";

import LoginContainer from "../conatiners/LoginContainer";
import Home from "../pages/Home";
import RegistrationContainer from "../conatiners/RegistrationContainer";
import LandingPage from "../pages/LandingPage";
// import EditFormComponent from "../pages/EditFormComponent";
import EditFormContaier from "../conatiners/EditFormContainer";
import PostContainer from "../conatiners/PostContainer";

export const Router = createBrowserRouter([
  {
    path:"/",
    element: <LandingPage />
  },
  {
    path: "/login",
    element: <LoginContainer />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/register",
    element: <RegistrationContainer />,
  },
  {
    path: "/edit-form",
    element: <EditFormContaier/>
  },
  {
    path: "/post",
    element: <PostContainer/>
  }
]);
