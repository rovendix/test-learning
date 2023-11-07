import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home.jsx";
import { createBrowserRouter } from "react-router-dom";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import InstructorLayout from "../pages/Instructor/Layout.jsx";
import InstructorDashboard from "../pages/Instructor/Dashboard/Dashboard.jsx";
import InstructorCourses from "../pages/Instructor/Courses/Courses.jsx";
import NewCourse from "../pages/Instructor/Courses/NewCourse/NewCourse.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "signin", index: true, element: <Signin /> },
      { path: "signup", element: <Signup /> },
      { path: "forget-password", element: <ForgetPassword /> },
    ],
  },
  {
    path: "/instructor",
    element: <InstructorLayout />,
    children: [
      {
        index: true,
        element: <InstructorDashboard />,
      },
      {
        path: "courses",
        index: true,
        element: <InstructorCourses />,
      },
      {
        path: "courses/new",
        element: <NewCourse />,
      },
    ],
  },
]);
export default router;
