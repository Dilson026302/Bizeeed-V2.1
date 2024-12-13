import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../assets/styles/Sidebar.css";

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false); // Hover state

  const menuItems = [
    {
      name: "Dashboard Home",
      path: "/dashboard",
      icon: <img src="public/assets/icons/home-icon.png" alt="Dashboard" />,
      end: true,
    },
    {
      name: "Social Accounts Linking",
      path: "/dashboard/social-accounts",
      icon: <img src="/assets/icons/connect-icon.png" alt="Social Accounts" />,
    },
    {
      name: "Publishing & Scheduling",
      path: "/dashboard/publishing",
      icon: <img src="/assets/icons/schedule-icon.png" alt="Publishing & Scheduling" />,
    },
    {
      name: "Analytics",
      path: "/dashboard/analytics-home",
      icon: <img src="/assets/icons/analytics-icon.png" alt="Analytics" />,
    },
    {
      name: "Digital Marketing",
      path: "/dashboard/digital-marketing",
      icon: <img src="/assets/icons/digitalmarketing-icon.png" alt="Digital Marketing" />,
    },
    {
      name: "AI Assistant",
      path: "/dashboard/ai-assistant",
      icon: <img src="/assets/icons/brainstorm-icon.png" alt="AI Assistant" />,
    },
    {
      name: "Influencer Management",
      path: "/dashboard/influencer-managment",
      icon: <img src="/assets/icons/heart-icon.png" alt="Influencer Management" />,
    },
    {
      name: "Competitor Analysis",
      path: "/dashboard/competitor-analysis",
      icon: <img src="/assets/icons/competitoranalysis-icon.png" alt="Competitor Analysis" />,
    },
    {
      name: "Product Development",
      path: "/dashboard/product-development",
      icon: <img src="/assets/icons/quillpen-icon.png" alt="Product Development" />,
    },
    {
      name: "Website Management",
      path: "/dashboard/website-management",
      icon: <img src="assets/icons/website-icon.png" alt="Website Management" />,
    },
    {
      name: "Team & Tasks",
      path: "/dashboard/team-tasks",
      icon: <img src="assets/icons/layers-icon.png" alt="Team & Tasks" />,
    },
  ];
  

  return (
    <div
      className={`sidebar ${isCollapsed && !isHovered ? "collapsed" : ""}`}
      onMouseEnter={() => setIsHovered(true)} // Expand on hover
      onMouseLeave={() => setIsHovered(false)} // Collapse when not hovering
    >
      

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.end} // Apply the "end" prop for exact match
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            title={isCollapsed ? item.name : ""}
          >
            <span className="sidebar-icon">{item.icon}</span>
            {(!isCollapsed || isHovered) && <span className="sidebar-text">{item.name}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
