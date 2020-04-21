import React from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col } from 'antd';
import { Heading } from './Heading';
import { SpeciesCard } from './speciesCard';


const { Header, Content } = Layout;

const Species = ({ speciesList }) => {

    return (
        <div>
            <Header style={{backgroundColor:'#F0F0F0', height:'15vh'}}>
                
                <div style={{color:'#F0F0F0'}}>Placeholder for search bar and language select</div>
                <Heading context={'species'}/>
                    
            </Header>
            
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
        speciesList: state.speciesReducer.filteredThreatened
    }
}

export default connect(mapStateToProps, {})(Species)