import React, { ReactChildren, ReactNode } from "react";
import { createBrowserRouter, Navigate, useNavigate } from "react-router-dom";
import Home from "../page/home";
import LoginPage from "../page/login";
import { NotFound } from "../page/not-found";
import { PATH } from "./router";
interface AuxProps {
  children: ReactNode;
}
export interface IMyRouter {
  path: PATH;
  component: ReactNode;
  authenticate: boolean;
}

/**
 * Declare router here
 */

export const ROUTER: IMyRouter[] = [
  {
    path: PATH.LOGIN,
    component: <LoginPage />,
    authenticate: false,
  },
  {
    path: PATH.NOT_FOUND,
    component: <NotFound />,
    authenticate: false,
  },
  {
    path: PATH.HOME,
    component: <Home />,
    authenticate: true,
  },

];

export const ProtectedRoute = ({
  children
}: AuxProps) => {
  const user = window.localStorage.getItem("user");
  const userParse = user ? JSON.parse(user) : "initialValue";
  if (!userParse.accessToken) {
    // user is not authenticated
    return <Navigate to={PATH.LOGIN} />;
  }
  return <div>{children}</div>
    ;
};

/**
 *  func mapping router
 */
export const browserRouter = createBrowserRouter(

  ROUTER.map((router) => {
    return {
      path: router.path,
      element: router.authenticate ? <ProtectedRoute>{router.component} </ProtectedRoute> : <LoginPage />
    };
  })
);
