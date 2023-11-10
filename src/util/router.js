import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home.jsx";
import { createBrowserRouter } from "react-router-dom";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import InstructorLayout from "../pages/Instructor/Layout.jsx";
import InstructorDashboard from "../pages/Instructor/Dashboard/Dashboard.jsx";
import InstructorCourses from "../pages/Instructor/Courses/Courses.jsx";
import EditCourseInfo from "../pages/Instructor/Courses/EditCourseInfo/EditCourseInfo.jsx";
import CourseContent from "../pages/Instructor/Courses/CourseContent/CourseContent.jsx";
import ChapterContent from "../pages/Instructor/Courses/Chapters/ChapterContent/ChapterContent.jsx";
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
        element: <InstructorCourses />,
      },
      {
        path: "courses/:courseId",
        children: [
          {
            index: true,
            element: <CourseContent />,
          },
          {
            path: "edit",
            element: <EditCourseInfo />,
          },
        ],
      },
      {
        path: "courses/:courseId/:chapterId",
        children: [
          {
            index: true,
            element: <ChapterContent />,
          },
        ],
      },
    ],
  },
]);
export default router;
