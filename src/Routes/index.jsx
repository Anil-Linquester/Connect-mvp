import { createBrowserRouter } from "react-router-dom";

import LoginContainer from "../conatiners/LoginContainer";
import Home from "../pages/Home";
import RegistrationContainer from "../conatiners/RegistrationContainer";

export const Router = createBrowserRouter([
  {
    path: "/",
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
]);
