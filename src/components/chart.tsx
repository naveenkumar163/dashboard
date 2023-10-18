import React from 'react';
import { Progress, Space } from 'antd';

const conicColors = { '0%': '#eb2a87', '50%': '#7e2aeb', '100%': 'white' };

const Chart = () => (
  <div style={{ display: 'flex', flexDirection: 'column', rowGap: 16, position: 'relative', background: 'white', padding: '10px', minHeight: '380px' }}>
    <h3 style={{ fontSize: '20px', lineHeight: '25px', fontWeight: 'bold', padding: '0', margin: '0' }}>Customers</h3>
    <p style={{ lineHeight: '0px', padding: '0', margin: '0' }}>Customer that buy products</p>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
      <Space wrap>
        <Progress type="circle" strokeWidth={10} size={150} percent={65} strokeColor={conicColors} style={{ fontSize: '10px' }} />
        <p style={{ position: 'absolute', lineHeight: '14px', left: '70px', top: '48%', fontWeight: 'bold' }}>Total New<br></br> Customer</p>
      </Space>
    </div>
  </div>
);

export default Chart;
