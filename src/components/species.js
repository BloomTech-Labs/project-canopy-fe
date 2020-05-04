import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col } from 'antd';
import Heading from './Heading';
import { SpeciesCard } from './speciesCard';
import { Modal } from 'antd';
import axios from 'axios'
import placeholder from './assets/image-placeholder.png'

const url = process.env.REACT_APP_BACKENDURL
    ? process.env.REACT_APP_BACKENDURL
    : "http://localhost:5000";

const { Content } = Layout;


const Species = ({ speciesList }) => {
    const [modal2Visible, setModal2Visible] = useState(false);
    const [speciesName, setSpeciesName] = useState('')
    const [redlistCategory, setRedlistCategory] = useState('')
    const [className, setClassName] = useState('')
    const [cardData, setCardData] = useState([])
    const [scientificName, setScientificName]= useState({scientificName: ''})
    const [ species, setSpecies ] = useState(speciesList)
    const [ results, setResults ] = useState([])
    const [habitat ,setHabitat] = useState([])

    useEffect(() => {
        axios.post(`${url}/api/species/`, scientificName)
        .then(res => {
            console.log('res', res)
            setCardData(res.data)
            setHabitat(res.data.habitats)
        })
    },[scientificName])

    useEffect(() => {
        if(results.length > 0){
            setSpecies(results.map(result => result.item))
        } else {
            setSpecies(speciesList)
        }
    }, [speciesList, results])

    console.log('habitat', habitat)
    console.log('cardData',cardData)

    function setModal2VisibleOnClick(modal2Visible) {
        setModal2Visible( modal2Visible );
      }
    
    

      function setSpeciesNameFunction(data){
        setSpeciesName(data)
      }

      function setRedList(data){
        setRedlistCategory(data)
      }

      function setClassNameFunction(data){
        setClassName(data)
      }
      function setScientificNameFunction(data){
        setScientificName(data)
      }


      function threatColor(redlistCategory){
      if(redlistCategory === 'Critically Endangered'){
          return '#EE404E'
      } else if (redlistCategory === 'Endangered'){
          return '#FEA482'
      } else if (redlistCategory === 'Vulnerable'){
          return '#FED0A3'
      }
    }
    const bolded = {
        fontFamily: 'IBM Plex Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '16px',
    }
    const inlineBlock = {
        display:'inline-block', 
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px'
    }
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
                                        setModal2VisibleOnClick={setModal2VisibleOnClick}
                                        setSpeciesNameFunction={setSpeciesNameFunction}
                                        setRedList={setRedList}
                                        setClassNameFunction={setClassNameFunction}
                                        setScientificNameFunction={setScientificNameFunction}
                                        populationTrend={species.populationTrend}
                                        commonName={species.commonName}
                                    />   
                        })}
                    </Col>
                </Row>
            </Content>
        <Modal
          centered
          visible={modal2Visible}
          onOk={() => setModal2VisibleOnClick(false)}
          onCancel={() => setModal2VisibleOnClick(false)}
          footer={null}
          style={{ minwidth:'100%'}}
          closable={false}
        >
        <div style={{ backgroundColor:threatColor(redlistCategory), width:'100%', padding:'20px'}}> 
            <p style={{display:'inline-block',
            fontFamily: 'IBM Plex Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '72px',
            lineHeight: '94px',
            marginRight: '5%',
            marginBottom: '0%'
    }}> {cardData.name ? cardData.name.charAt(0) : scientificName.scientificName.charAt(0)}</p>
    <div style={{display:'inline-block'}}>
            <p style={{fontFamily: 'IBM Plex Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '24px',
            lineHeight: '31px',
            display:'inline-block',
            marginBottom: '5%'
    }}> {cardData.name ? cardData.name : scientificName.scientificName}</p>
            <p style={{fontFamily: 'IBM Plex Sans',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14px',
            lineHeight: '18px',
            marginBottom: '0%'
    }}>{cardData.name ? scientificName.scientificName : null}</p>
    </div>
        </div>

        <img style={{ width:'100%' }} src={placeholder}/>

        <div style={ { display:'flex', justifyContent:'Space-between' }}>
            <p style={{backgroundColor:threatColor(redlistCategory),
                width:'45%', 
                borderRadius: '10px', 
                fontWeight:'bold', 
                textAlign:'center', 
                marginTop:'2%', 
                fontFamily: 'IBM Plex Sans', 
                fontSize: '24px', 
                lineHeight: '23px'
        }}>{redlistCategory}</p>
            <p style={{fontFamily: 'IBM Plex Sans',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '20px',
                lineHeight: '21px',
                marginTop:'1%',
                marginRight:'28%',
                marginLeft: '3%'
                }}>Description</p>
        </div>

        
        <div style={{display:'flex', 
        justifyContent:'space-between',
        marginBottom:'10%'
        }}>
       
            <div style={{width:'50%', marginRight:'3%'}}>
                <p style={bolded}>Cites: <div style={inlineBlock}>{cardData.CITES_list}</div></p>

                <p style={bolded}>Population: <div style={inlineBlock}>{cardData.populationTrend ? cardData.populationTrend : 'unknown'}</div></p>
                <p style={bolded}>Threats: <div style={inlineBlock}>{cardData.threats}</div></p>
            </div>
            <div style={{width:'50%'}}>
                <p style={bolded}>Class: <div style={inlineBlock}>{className}</div></p>
                    <p style={bolded}> Habitat:
                        {habitat.map((habitat) => {
                                return <div style={{ fontWeight: 'normal', display:'inline-block' }}>{habitat.name}</div>
                            })}
                    </p>
            </div>

        </div>
       
        </Modal>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        speciesList: state.speciesReducer.threatenedSpecies
    }
}

export default connect(mapStateToProps, {})(Species)