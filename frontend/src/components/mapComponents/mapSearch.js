import React, { useState } from 'react'
import { connect } from 'react-redux';
import SearchResults from './searchResults.js';
import Fuse from 'fuse.js';
import styled from 'styled-components';
import { uniqueBinomial } from '../../actions/mapActions.js';



const MapSearch = (props) => {
    const { searchBinomial } = props;
    const [search, setSearch] = useState('');
    
    // const binomialNames = dataPoints.features.map(species => {
    //     return species.properties.binomial
    // })

    // const uniqueBinomial = binomialNames.filter((name, i) => {
    //     return binomialNames.indexOf(name) === i
    // })
    console.log('search', searchBinomial)
   

    const options = {
        shouldSort: true,
        includeScore: true,
        threshold: 0.4,
        location: 0,
        distance: 10,
        minMatchCharLength: 5,
        // keys: [
        //   'properties.binomial'
        // ]
      };


    const fuse = new Fuse(searchBinomial, options)
    const results = fuse.search(search)

    console.log("this is results", results)


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
            <SearchResults results={results}/>
        </Search>
    )
};

const mapStateToProps = (state) => {
    return {
        searchBinomial: state.searchBinomial,
    }
};

export default connect(mapStateToProps, {})(MapSearch);

const Search = styled.div`
    width: 400px;
`;