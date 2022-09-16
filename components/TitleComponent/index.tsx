import { Button, Col, Row } from "antd";
import React, { PropsWithChildren } from "react";
import styles from "./title.module.scss";
import Image from "next/future/image";
import TitleProfile from "../../public/kasane.jpg";
import { ShareAltOutlined, MoreOutlined } from "@ant-design/icons";

const tagLabels = ["18+", "New", "Trending", "Best Seller", "Manga"];
class TitleComponent extends React.Component<any, any> {
  render() {
    return (
      <div className={styles.title + " component"}>
        <div className={styles.title__profile}>
          <Image src={TitleProfile} alt="kasane" />
        </div>
        <div className={styles.title__details}>
          <h2>Kasane</h2>
          <p>By Kodansha</p>
          <p>
            <span>Drama</span> - <span>10 chapters</span>
          </p>
          <Row gutter={[16, 8]}>
            {tagLabels &&
              tagLabels.map((item, index) => (
                <Col>
                  <label
                    key={index}
                    className={styles["title__details--tag-label"]}
                  >
                    {item}
                  </label>
                </Col>
              ))}
          </Row>
          <Button className={styles["title__button--read-more"]}>
            Read First Chapter For Free
          </Button>
        </div>

        <Row gutter={8} wrap={false}>
          <Col>
            <Button className={styles.title__buttons}>
              <ShareAltOutlined />
            </Button>
          </Col>
          <Col>
            <Button className={styles.title__buttons}>
              <MoreOutlined />
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TitleComponent;
