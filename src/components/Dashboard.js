import React, { useState } from 'react';
import ProTable from '@ant-design/pro-table';
import {
  DatePicker,
  Select,
  Modal,
  Tag,
  Button,
  Typography,
  message,
} from 'antd';
import data from '../data/dashboard.json';
import EXPERTS from '../data/experts.json';
const { Text, Title } = Typography;

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const columns = [
    {
      title: 'Test Taken',
      dataIndex: 'test_taken',
      render: (text) => {
        return <Text>{text}</Text>;
      },
    },
    {
      title: 'Test Score',
      dataIndex: 'test_score',
      render: (text) => {
        return <Text>{text}</Text>;
      },
    },
    {
      title: 'Rating',
      dataIndex: 'score_rating',
      render: (text) => {
        return (
          <Tag className={`${text} status`}>
            {text.toUpperCase().replace('_', ' ')}
          </Tag>
        );
      },
    },
  ];

  return (
    <>
      <Title level={1} className="title">
        DASHBOARD
      </Title>
      <div className="tableContainer">
        <ProTable
          size="small"
          columns={columns}
          dataSource={data}
          rowKey="test_taken"
          search={false}
          toolBarRender={() => [
            <Button onClick={() => setShowModal(true)} type="primary">
              Book Consult
            </Button>,
          ]}
          pagination={{
            pageSize: 15,
            showSizeChanger: false,
            showTotal: false,
          }}
        />
      </div>
      <Modal
        title="Book Consult"
        open={showModal}
        onOk={() => {
          setShowModal(false);
          message.success('Expert Booked');
        }}
        onCancel={() => setShowModal(false)}
        bordered={true}
        okText="Book"
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Title level={5}>Choose Expert</Title>
          <Select options={EXPERTS} />
          <Title level={5}>Pick a date</Title>
          <DatePicker />
        </div>
      </Modal>
      <div className="modalContainer"></div>
    </>
  );
};

export default Dashboard;
