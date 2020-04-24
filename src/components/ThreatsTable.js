import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { connect } from 'react-redux';

const ThreatTable = ({ tableData }) => {

    const columns = [
        {
          title: 'Threat',
          dataIndex: 'name',
          key: 'CountryName',
        },
        {
          title: 'Number of occurances',
          dataIndex: 'count',
          key:'totalThreatened',
        },
      ];
      
      return(
        <div style={{width:'100%'}}>
          <Table
            columns={columns}
            dataSource={tableData}
            bordered
            pagination={false}
            scroll={{ y: 240 }}
            title={() => <h2 style={{fontSize:'1.3em'}}>Threats to species</h2>}
          />
        </div>
      )    
};

const mapStateToProps = state => {
  return {
    tableData: state.tableReducer.threats_tableData
  }
};

export default connect(mapStateToProps,{})(ThreatTable);
