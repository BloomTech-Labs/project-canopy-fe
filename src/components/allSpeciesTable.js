import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { connect } from 'react-redux';

const AllSpeciesTable = ({ filteredAllSpecies }) => {

    const columns = [
        {
            title: 'Class',
            dataIndex: 'className',
            key: 'speciesName',
        },
        {
            title: 'Species',
            dataIndex: 'speciesName',
            key:'speciesName',
        },
        {
            title: 'Redlist Category',
            dataIndex: 'redlistCategory',
            key:'speciesName',
          },
      ];
      
      return(
        <div style={{width:'100%'}}>
          <Table
            columns={columns}
            dataSource={filteredAllSpecies}
            bordered
            pagination={false}
            scroll={{ y: 240 }}
            title={() => <h2 style={{fontSize:'1.3em'}}>All Species List</h2>}
          />
        </div>
      )    
};

const mapStateToProps = state => {
  return {
    filteredAllSpecies: state.speciesReducer.filteredAllSpecies
  }
};

export default connect(mapStateToProps,{})(AllSpeciesTable);
