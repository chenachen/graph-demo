import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Layout, theme } from "antd";
import Menu from "./Menu";

const { Content, Sider } = Layout;

const BaseLayout: FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="tw-h-full">
      <Sider breakpoint="lg" collapsedWidth="0">
        <Menu />
      </Sider>
      <Content style={{ margin: "24px 16px" }}>
        <div
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
          className="tw-h-full"
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};

export default BaseLayout;
