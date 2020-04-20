import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Card } from 'antd';


export const SpeciesCards = () => {
    return (
    <>
        <Card style={{ width: 320 }} cover={<img alt="example" src="" />}>
        <Meta title="Eastern Gorilla" description="Gorilla beringei" />
    </Card>
    </>
    )
}