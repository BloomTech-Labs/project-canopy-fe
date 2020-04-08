import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import {Card} from 'antd';

export function AreaCard(props){
    const {countryName, threatenedSpecies, protectedSpecies, nonProtectedSpecies, knownThreats, hotspotHabitats} = props;
    return(
        <Card title={`${countryName}`} style={{border:'0', width:'29%', marginTop:'2%'}}>
            <p>{`${threatenedSpecies}` || `#`} threatened species</p>
            <p>{`${protectedSpecies}` || `#`} threatened species</p>
            <p>{`${nonProtectedSpecies}` || `#`} threatened species</p>
            <p>{`${knownThreats}` || `#`} threatened species</p>
            <p>{`${hotspotHabitats}` || `#`} threatened species</p>
        </Card>
    )
}