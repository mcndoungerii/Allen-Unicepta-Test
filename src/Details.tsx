import { FC } from "react";
import { detailsInfo, image } from "./modal/modal";
import { Modal, Typography, Card, Space } from "antd";

const { Title } = Typography;
const Details: FC<detailsInfo> = ({
  isModalVisible,
  handleCancel,
  handleOk,
  item
}) => {
  return (
    <Modal
      title={"Modal for " + item.data[0].media_type}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Title level={5}>Title</Title>
      <a href={item.data[0].title}>{item.data[0].title}</a>
      <Title level={5}>Href</Title>
      <a href={item.href}>{item.href}</a>
      <Title level={5}>Description</Title>
      <p>{item.data[0].description}</p>
      <Title level={5}>Description 508</Title>
      <p>{item.data[0].description_508}</p>
      <Title level={5}>Center</Title>
      <p>{item.data[0].center}</p>
      <Title level={5}>Date Created</Title>
      <p>{item.data[0].date_created}</p>
      <Title level={5}>Nasa ID</Title>
      <a href={item.data[0].nasa_id}>{item.data[0].nasa_id}</a>
      <Title level={5}>Media Type</Title>
      <p>{item.data[0].media_type}</p>
      {item.data[0].photographer ? <Title level={5}>Photographer</Title> : null}
      <p>{item.data[0].photographer}</p>
      {item.data[0].location ? <Title level={5}>Location</Title> : null}
      <p>{item.data[0].location}</p>
      <Title level={5}>Links</Title>
      {item.links.map((it: image, i) => {
        return (
          <Space key={i}>
            <Card title={it.rel}>
              <Title level={5}>Href</Title>
              <a href={it.href}>{it.href}</a>
              <Title level={5}>Rel</Title>
              <p>{it.rel}</p>
              <Title level={5}>Render</Title>
              <p>{it.render}</p>
            </Card>
          </Space>
        );
      })}
    </Modal>
  );
};

export default Details;
