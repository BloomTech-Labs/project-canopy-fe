import React from 'react';
import styled from 'styled-components';


// image assets
import placeholder from './assets/image-placeholder.png';
import arrowDown from './assets/arrow/arrowDown.svg'
import arrowUp from './assets/arrow/arrowUp.svg'

export const SpeciesCard = props => {
    const { redlistCategory, populationTrend, className, commonName, scientificName, kingdom } = props;

    const arrow = function(trend){
        if(trend === 'Decreasing'){
            return arrowDown;
        } else if(trend === 'Increasing'){
            return arrowUp;
        } else {
            return null;
        }
    };
    
    const rank = function(cat){
        if(cat === 'Critically Endangered'){
            return 'CT'
        } else if (cat === 'Endangered'){
            return 'EN'
        } else if (cat === 'Vulnerable'){
            return 'VU'
        }
    };
    
    let threatColor = '';
    
    if(redlistCategory === 'Critically Endangered'){
        threatColor = '#EE404E'
    } else if (redlistCategory === 'Endangered'){
        threatColor = '#FEA482'
    } else if (redlistCategory === 'Vulnerable'){
        threatColor = '#FED0A3'
    }
    
    const Card = styled.div`
        width: 22%;
        min-width: 260px;
        background-color: #FCFCFC;
        margin: 25px 1.5%;
        border-bottom: 10px solid ${threatColor};
        border-radius:0 0 4px 4px;
    `;

    return (
        <Card>
            <img src={placeholder} alt='placeholder' style={{width:'100%'}}/>
                <div style={{padding:'1% 5%', height:'130px'}}>
                    <SmallTextSpan>{kingdom} - {className}</SmallTextSpan>
                    <CommonName>{commonName ? commonName : props.speciesName}</CommonName>
                    <BinomialName>{scientificName}</BinomialName> 
                </div>
                <div style={{padding:'0 5% 0 5%', margin:'0', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    {/* <Spacer/> */}
                    <div>
                        <SmallTextSpan>Population</SmallTextSpan>
                        <p> {populationTrend} <img src={arrow(populationTrend)} /></p>  
                    </div>
                    <ThreatStatus>{rank(redlistCategory)}</ThreatStatus>
                </div>
        </Card>
    )
};

const SmallTextSpan = styled.span`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color:#9F9F9F;
`;

const CommonName = styled.h1`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    margin:0;
`

const BinomialName = styled.p`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color:#9F9F9F;
    margin:0;
`
const ThreatStatus = styled.span`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    color:#101212;
`
