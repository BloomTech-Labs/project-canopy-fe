import React from 'react'
import styled from 'styled-components';
import FuzzySearch from 'react-fuzzy';

const MapSearch = () => {

    return (
        <Search>
            <FuzzySearch />
        </Search>
    )
};

export default MapSearch;

const Search = styled.div`
    
`;