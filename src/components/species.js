import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col } from 'antd';
import Heading from './Heading';
import { SpeciesCard } from './speciesCard';


const { Content } = Layout;

const Species = ({ speciesList }) => {
    const [ species, setSpecies ] = useState(speciesList)
    const [ results, setResults ] = useState([])

    useEffect(() => {
        if(results.length > 0){
            setSpecies(results.map(result => result.item))
        } else {
            setSpecies(speciesList)
        }
    }, [speciesList, results])

    return (
        <div>
            <Heading 
                context={'species'} 
                setResults={setResults} 
                speciesList={speciesList} />
            
            <Content>
                <Row >
                    <Col style={{ display:'flex', flexWrap:'wrap'}} offset={1} span={22}>
                        {species.map((species, i )=> {
                            return <SpeciesCard 
                                        key={i}
                                        className={species.className}
                                        redlistCategory={species.redlistCategory}
                                        speciesName={species.speciesName}
                                        scientificName={species.scientificName}
                                        kingdom={species.kingdomName}
                                        phylum={species.phylumName}
                                        populationTrend={species.populationTrend}
                                        commonName={species.commonName}
                                    />   
                        })}
                    </Col>
                </Row>
            </Content>

        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        speciesList: state.speciesReducer.threatenedSpecies
    }
}

export default connect(mapStateToProps, {})(Species)