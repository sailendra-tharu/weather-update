import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { FaHome } from "react-icons/fa";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Dashboard",
    key: "dashboard",
    icon: <FaHome />,
  },
];

const Sidebar: React.FC = () => {
  const [current, setCurrent] = useState("dashboard");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="vertical"
      items={items}
    />
  );
};

export default Sidebar;
