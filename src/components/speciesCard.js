import React, {useState} from 'react';
import styled from 'styled-components';
import ThreatBar from './threatBar.js';

// image assets
import placeholder from './assets/image-placeholder.png'
import { Modal } from 'antd';

export const SpeciesCard = props => {
    const { redlistCategory } = props;
    
    const rank = function(cat){
        if(cat === 'Critically Endangered'){
            return 'CT'
        } else if (cat === 'Endangered'){
            return 'EN'
        } else if (cat === 'Vulnerable'){
            return 'VU'
        }
    }
    
    return (
        <div style={{width:'22%', backgroundColor:'#FCFCFC', margin:'25px 1.5%'}} 
        onClick={() => {props.setModal2VisibleOnClick(true); 
        props.setSpeciesNameFunction(props.speciesName);
        props.setRedList(redlistCategory);
        props.setClassNameFunction(props.className)
        }}>
            <img src={placeholder} alt={`${props.placeholder}`} style={{width:'100%'}}/>
                <div style={{padding:'1% 5%'}}>
                    <SmallTextSpan>{props.kingdom} - {props.className}</SmallTextSpan>
                    <CommonName>{props.speciesName}</CommonName>
                    <BinomialName>{props.scientificName}</BinomialName> 
                </div>
                <div style={{padding:'0 5% 0 5%', margin:'0', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <div>
                        {/* <SmallTextSpan>Population</SmallTextSpan>
                        <p>status prop <img src={arrowDown} /></p>   */}
                    </div>
                    <ThreatStatus>{rank(redlistCategory)}</ThreatStatus>
                </div>
                <ThreatBar redlistCategory={redlistCategory}/>
        </div>
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
