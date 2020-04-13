import React from 'react';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import {SearchBar} from './Search';
import {Overview} from './Overview'
import {AreaCard} from './AreaCards';
import {dummyData} from '../dummy';

const {Header, Content} = Layout;

export const Dashboard = () => {
    return(
        <div>
            <Header style={{backgroundColor:'#F0F0F0'}}> 
                <SearchBar />
            </Header>
        
            <Content>
                <Overview />
                <div style={{margin:'25px 50px', display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
                    {dummyData.map((e, i) => {
                        return (
                            <AreaCard
                            key={i} 
                            countryName={e.countryName} 
                            threatenedSpecies={e.threatenedSpecies} 
                            protectedSpecies={e.protectedSpecies} 
                            nonProtectedSpecies={e.nonProtectedSpecies} 
                            knownThreats={e.knownThreats}
                            hotspotHabitats={e.hotspotHabitats}
                             />
                        ) 
                    })}

                </div> 
            </Content>  
        </div>
    )
};

