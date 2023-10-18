import React from 'react';
import { Space, Row, Col } from "antd";
import {
    DownOutlined,
} from '@ant-design/icons';


const Graph = () => (
    <div className='graph' style={{ background: 'white', padding: '10px', minHeight: '380px', }}>
        <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Col>
                <h3 style={{ fontSize: '20px', lineHeight: '25px', fontWeight: 'bold', padding: '0', margin: '0' }}>Overview</h3>
                <p style={{ lineHeight: '20px', padding: '0', margin: '0' }}>Monthly Earning</p>
            </Col>
            <Col>
                <p style={{ fontSize: '15px', lineHeight: '20px', fontWeight: 'bold', padding: '0', margin: '0' }}>Quartely &nbsp; <DownOutlined /></p>
            </Col>
        </Row>
        <Space>
            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 20 }}>
                <Col style={{ margin: '0 13px 0 0px', padding: '0 10px' }}>
                    <div style={{ height: 180, width: 30, background: '#e6e6e6', borderRadius: '50px', position: 'absolute', bottom: 20 }}></div>
                    <span>Jan</span>
                </Col>
                <Col style={{ margin: '0 13px', padding: '0 10px' }}>
                    <div style={{ height: 160, width: 30, background: '#e6e6e6', borderRadius: '50px', position: 'absolute', bottom: 20 }}></div>
                    <span>Feb</span>
                </Col>
                <Col style={{ margin: '0 13px', padding: '0 10px' }}>
                    <div style={{ height: 250, width: 30, background: '#e6e6e6', borderRadius: '50px', position: 'absolute', bottom: 20 }}></div>
                    <span>Mar</span>
                </Col>
                <Col style={{ margin: '0 13px', padding: '0 10px' }}>
                    <div style={{ height: 220, width: 30, background: '#e6e6e6', borderRadius: '50px', position: 'absolute', bottom: 20 }}></div>
                    <span>Apr</span>
                </Col>
                <Col style={{ margin: '0 13px', padding: '0 10px' }}>
                    <div style={{ height: 230, width: 30, background: '#e6e6e6', borderRadius: '50px', position: 'absolute', bottom: 20 }}></div>
                    <span>May</span>
                </Col>
                <Col style={{ margin: '0 13px', padding: '0 10px' }}>
                    <div style={{ height: 140, width: 30, background: '#e6e6e6', borderRadius: '50px', position: 'absolute', bottom: 20 }}></div>
                    <span>Jun</span>
                </Col>
                <Col style={{ margin: '0 13px', padding: '0 10px' }}>
                    <div style={{ height: 230, width: 30, background: '#e6e6e6', borderRadius: '50px', position: 'absolute', bottom: 20 }}></div>
                    <span>Jul</span>
                </Col>
                <Col style={{ margin: '0 13px', padding: '0 10px' }}>
                    <div style={{ height: 250, width: 30, background: 'blue', borderRadius: '50px', position: 'absolute', bottom: 20 }}></div>
                    <span>Aug</span>
                </Col>
                <Col style={{ margin: '0 13px', padding: '0 10px' }}>
                    <div style={{ height: 240, width: 30, background: '#e6e6e6', borderRadius: '50px', position: 'absolute', bottom: 20 }}></div>
                    <span>Sep</span>
                </Col>
                <Col style={{ margin: '0 13px', padding: '0 10px' }}>
                    <div style={{ height: 230, width: 30, background: '#e6e6e6', borderRadius: '50px', position: 'absolute', bottom: 20 }}></div>
                    <span>Oct</span>
                </Col>
                <Col style={{ margin: '0 13px', padding: '0 10px' }}>
                    <div style={{ height: 210, width: 30, background: '#e6e6e6', borderRadius: '50px', position: 'absolute', bottom: 20 }}></div>
                    <span>Nov</span>
                </Col>
                <Col style={{ margin: '0 13px', padding: '0 10px' }}>
                    <div style={{ height: 240, width: 30, background: '#e6e6e6', borderRadius: '50px', position: 'absolute', bottom: 20 }}></div>
                    <span>Dec</span>
                </Col>
            </Row>
        </Space>
    </div>
);

export default Graph;
