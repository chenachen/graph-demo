import { FC } from "react";
import { Menu } from "antd";
import { EditFilled } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function getItems(): MenuItem[] {
  return [
    {
      label: "g6 demo",
      key: "/g6_demo",
      icon: <EditFilled />,
    },
    {
      label: "x6 demo",
      key: "/x6_demo",
      icon: <EditFilled />,
    },
    {
      label: "echarts demo",
      key: "echarts",
      icon: <EditFilled />,
      children: [
        {
          label: "line chart",
          key: "/echarts/line",
          icon: <EditFilled />,
        },
        {
          label: "bar chart",
          key: "/echarts/bar",
          icon: <EditFilled />,
        },
      ],
    },
  ];
}

const LayoutMenu: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const items = getItems();

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[pathname]}
      items={items}
      onSelect={(k) => navigate(k.key)}
    />
  );
};

export default LayoutMenu;
