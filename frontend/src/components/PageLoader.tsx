import React from 'react';
import { Spin } from 'antd';
import { SyncOutlined } from '@ant-design/icons';

const PageLoader: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Spin indicator={<SyncOutlined style={{ fontSize: 72, color: 'blue' }} spin />} />
    </div>
  );
};

export default PageLoader;