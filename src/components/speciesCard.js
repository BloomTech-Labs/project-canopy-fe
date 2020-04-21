import React from 'react';
import styled from 'styled-components';

// image assets
import placeholder from './assets/image-placeholder.png'
import arrowDown from './assets/arrow/arrowDown.svg'
import arrowUp from './assets/arrow/arrowUp.svg'

export const SpeciesCard = props => {
    return (
        <div style={{width:'25%', backgroundColor:'#FCFCFC'}}>
            <img src={placeholder} alt={`${props.placeholder}`} style={{width:'100%'}}/>
            <div style={{padding:'1% 5%'}}>
                <SmallTextSpan>kingdom - phylum  prop</SmallTextSpan>
                <CommonName>Common name  prop</CommonName>
                <BinomialName>binomial  prop</BinomialName> 
            </div>
            <div style={{padding:'1% 5%', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <div>
                    <SmallTextSpan>Population</SmallTextSpan>
                    <p>status prop <img src={arrowDown} /></p>  
                </div>
                <ThreatStatus>CT</ThreatStatus>
            </div>
            <div style={{width:'100%', height:'8px', borderRadius:'0 0 4px 4px', backgroundColor:'red'}} />
        </div>
    )
}

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
`
const ThreatStatus = styled.span`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    color:#101212;
`