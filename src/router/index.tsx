import { useRoutes, Navigate } from "react-router-dom";
import Login from "@/views/login";
import { RouteObject } from "./interface/index";

export const rootRouter: RouteObject[] = [];

const rootRouters: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/login"></Navigate>
	},
	{
		path: "/login",
		element: <Login />,
		meta: {
			title: "登录页",
			key: "login",
			requiresAuth: false
		}
	}
];
