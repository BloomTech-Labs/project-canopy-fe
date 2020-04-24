import React from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col } from 'antd';
import { Heading } from './Heading';
import { SpeciesCard } from './speciesCard';


const { Content } = Layout;

const Species = ({ speciesList }) => {

    return (
        <div>
            <Heading context={'species'}/>
            
            <Content>
                <Row >
                    <Col  style={{ display:'flex', flexWrap:'wrap'}} offset={1} span={22}>
                        {speciesList.map((species, i )=> {
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