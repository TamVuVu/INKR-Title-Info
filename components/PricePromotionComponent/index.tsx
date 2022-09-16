import { Button, Col, Layout, Row } from "antd";
import React, { PropsWithChildren } from "react";
import styles from "./price-promotion.module.scss";
import Image from "next/future/image";
import TitleProfile from "../../public/kasane.jpg";
import {
  ShareAltOutlined,
  MoreOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { Content, Footer, Header } from "antd/lib/layout/layout";

class PricePromotionComponent extends React.Component<any, any> {
  render() {
    return (
      <Layout className={styles["price-promotion"] + " component"}>
        <Header className={styles["price-promotion__header"]}>
          Pricing & Promotion
        </Header>
        <Content className={styles["price-promotion__content"]}>
          <div className={styles["price-promotion__content--chapters"]}>
            <Row>
              <Col span={12} style={{ padding: "16px" }}>
                <p
                  className={
                    styles["price-promotion__content--chapters-status"]
                  }
                >
                  FREE
                </p>
                <p
                  className={
                    styles["price-promotion__content--chapters-number"]
                  }
                >
                  3 chapters
                </p>
              </Col>
              <Col span={12} style={{ padding: "16px" }}>
                <p
                  className={
                    styles["price-promotion__content--chapters-status"]
                  }
                >
                  LOCKED
                </p>
                <p
                  className={
                    styles["price-promotion__content--chapters-number"]
                  }
                >
                  7 chapters
                  <span
                    style={{
                      marginLeft: "5px",
                      color: "rgba(255, 255, 255, 0.45)",
                    }}
                  >
                    ({" "}
                    <DollarCircleOutlined
                      className="coin-icon"
                      style={{ fontSize: "13px", marginRight: "4px" }}
                    />
                    5/ chapter )
                  </span>
                </p>
              </Col>
            </Row>
            <div className={styles["price-promotion__content--price"]}>
              <div>
                <p className="price-total m-0">Total Price</p>
                <p className="price-description m-0">
                  Instant access all chapters <span> No ad</span>
                </p>
              </div>
              <div className="price-total--value">
                <DollarCircleOutlined
                  className="coin-icon"
                  style={{ fontSize: "16px" }}
                />
                <span style={{ marginLeft: "6px" }}>35</span>
              </div>
            </div>
          </div>
        </Content>
        <Footer>Footer</Footer>
        <style jsx>{`
          .price-total {
            color: rgba(255, 255, 255, 0.85) !important;
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
          }
          .price-description {
            color: rgba(255, 255, 255, 0.45) !important;
            font-size: 14px !important;
          }
          .price-description span {
            position: relative;
            margin-left: 4px;
          }
          .price-description span:before {
            content: ".";
            position: absolute;
            left: -6px;
            top: -3px;
          }
          .price-total--value {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 8px 16px;
            background: rgba(255, 255, 255, 0.08);
            border-radius: 8px;
            font-size: 16px;
            font-weight: 700;
            margin-left: 4px;
          }
        `}</style>
      </Layout>
    );
  }
}

export default PricePromotionComponent;
