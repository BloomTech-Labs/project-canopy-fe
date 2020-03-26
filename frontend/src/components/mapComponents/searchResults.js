import React from 'react';

const searchResults = ({results}) => {
    

    return (
        <>
        <h1>Search Results!</h1>
        {results.map((result, i) => {
            return <h3 key={i}>
                {result.item}
                </h3>
        })}
        </>

    )
};

export default searchResults;