import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col } from 'antd';
import { Heading } from './Heading';
import { SpeciesCard } from './speciesCard';
import { Modal } from 'antd';
import axios from 'axios'
import placeholder from './assets/image-placeholder.png'
const { Header, Content } = Layout;


const Species = ({ speciesList }) => {
    const [modal2Visible, setModal2Visible] = useState(false);
    const [speciesName, setSpeciesName] = useState('')
    const [redlistCategory, setRedlistCategory] = useState('')
    const [className, setClassName] = useState('')
    const [cardData, setCardData] = useState([])

    useEffect(() => {
        axios.post(`http://localhost:5000"/api/species`)
        .then(response => {
            console.log(response)
            setCardData(response)
        })
    },[])
    console.log(cardData)
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
                                        setModal2VisibleOnClick={setModal2VisibleOnClick}
                                        setSpeciesNameFunction={setSpeciesNameFunction}
                                        setRedList={setRedList}
                                        setClassNameFunction={setClassNameFunction}
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
            <p style={{fontFamily: 'IBM Plex Sans',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: '24px',
                    lineHeight: '31px'
            }}

            
            > {`${speciesName}`}</p>
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
                marginRight:'35%',
                marginLeft: '3%'
                }}>Description</p>
        </div>

        
        <div style={{display:'flex', 
        justifyContent:'space-between', 
        marginRight:'35%',
        marginBottom:'10%'
        }}>
       
            <div>
                <p style={bolded}>Cites: <div style={inlineBlock}>....</div></p>
                <p style={bolded}>Population: <div style={inlineBlock}>....</div></p>
                <p style={bolded}>Threats: <div style={inlineBlock}>....</div></p>
            </div>
            <div>
                <p style={bolded}>Class: <div style={inlineBlock}>{className}</div></p>
                <p style={bolded}>Habitat: <div style={inlineBlock}>....</div></p>
            </div>

        </div>
       
        </Modal>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        speciesList: state.speciesReducer.filteredThreatened
    }
}

export default connect(mapStateToProps, {})(Species)