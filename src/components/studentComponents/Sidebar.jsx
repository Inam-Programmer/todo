import React from "react";
import { NavLink } from "react-router-dom";
import exam from "../../../public/exam.png";
import assignment from "../../../public/assignment.png";
import result from "../../../public/result.png";
import announcements from "../../../public/announcement.png";
import { ChartNoAxesCombined, Home, Phone } from "lucide-react";

const Sidebar = () => {
  const menus = [
    {
      path: "/dashboard",
      icon: <Home className="size-4" />,
      title: "Home",
    },
    {
      path: "coursework",
      icon: <img src={assignment} />,
      title: "Course Work",
    },
    {
      path: "exams",
      icon: <img src={exam} />,
      title: "Exams",
    },
    {
      path: "results",
      icon: <img src={result} />,
      title: "Results",
    },
    {
      path: "progress",
      icon: <ChartNoAxesCombined className="size-4" />,
      title: "Progress",
    },
    {
      path: "announcements",
      icon: <img src={announcements} />,
      title: "Announcements",
    },
    {
      path: "contact",
      icon: <Phone className="size-4" />,
      title: "Contact",
    },
  ];
  // bg-[#c0c1d6]

  return (
    <div className="hidden md:inline fixed md:w-56 top-16 left-0 min-h-[91.1vh] max-h-full overflow-hidden bg-[#2c2e3e] text-white border-r border-slate-200 py-4">
      <nav className="items-start px-2 lg:px-3 text-sm font-medium h-full">
        {menus.map((item, id) => (
          <div key={id}>
            <NavLink
              end={item.path === "/dashboard"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 my-1 text-muted-foreground transition-all hover:text-primary hover:bg-slate-100 hover:text-black ${
                  isActive ? "bg-slate-100 text-black" : ""
                }`
              }
              to={item.path}
            >
              <span className="size-4">{item.icon}</span>
              {item.title}
            </NavLink>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
