import React, { useState } from 'react'
import { connect } from 'react-redux';
import SearchResults from './searchResults.js';
import Fuse from 'fuse.js';
import styled from 'styled-components';

const MapSearch = (props) => {
    const { searchBinomial } = props;
    const [ search, setSearch ] = useState('');

    const options = {
        shouldSort: true,
        includeScore: true,
        threshold: 0.4,
        location: 0,
        distance: 10,
        minMatchCharLength: 5,
      };

    //Passing array of binomial names into fuse as search list
    const fuse = new Fuse(searchBinomial, options)
    const results = fuse.search(search)

    return (
        <Search>
            <label>Search for a species by binomial name</label>
            <input 
                type='text'
                name='speciesSearch'
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value)
                }}
            />
            <SearchResults results={results} />
        </Search>
    )
};

const mapStateToProps = (state) => {
    return {
        searchBinomial: state.searchBinomial,
        dataPoints: state.dataPoints
    }
};

export default connect(mapStateToProps, {})(MapSearch);

const Search = styled.div`
    width: 400px;
`;