import { Breadcrumb, Layout, Menu, Col, Row } from "antd";
import AboutComponent from "../components/AboutComponent";
import TitleComponent from "../components/TitleComponent";
import "antd/dist/antd.css";
import PricePromotionComponent from "../components/PricePromotionComponent";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <div className="man-app">
      <div className="container">
        <Row gutter={32}>
          <Col span={15}>
            <Content className="left-content col-15">
              <TitleComponent />
              <PricePromotionComponent />
            </Content>
          </Col>
          <Col span={9}>
            <Sider className="right-content col-9">
              <AboutComponent />
            </Sider>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
