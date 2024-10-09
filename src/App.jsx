import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignUp } from "./components/pages/SignUp";
import { Login } from "./components/pages/Login";
import StudentsDashboard from "./dashboard/StudentDashboard";
import Home from "./components/pages/student/Home";
import Profile from "./components/pages/student/Profile";
import ChangePassword from "./components/pages/student/ChangePassword";
import CourseWork from "./components/pages/student/CourseWork"
import Exams from "./components/pages/student/Exams";
import Results from "./components/pages/student/Results";
import CourseProgress from "./components/pages/student/CourseProgress";
import Announcements from "./components/pages/student/Announcements";
import Contact from "./components/pages/student/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <StudentsDashboard />,

    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "changepassword",
        element: <ChangePassword />,
      },
      {
        path: "coursework",
        element: <CourseWork />,
      },
      {
        path: "exams",
        element: <Exams />,
      },
      {
        path: "results",
        element: <Results />,
      },
      {
        path: "progress",
        element: <CourseProgress />,
      },
      {
        path: "announcements",
        element: <Announcements />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
