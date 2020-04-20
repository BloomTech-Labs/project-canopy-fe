import React from 'react';
import {Link} from 'react-router-dom';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

// Imports all of the image assets
import dashboardLight from './assets/light/dashboard.svg';
import mapLight from './assets/light//map.svg';
import pawLight from './assets/light/paw.svg';
import treeLight from './assets/light/Tree.svg';
import dashboardGreen from './assets/green/dashboard.svg';
import mapGreen from './assets/green/map.svg';
import pawGreen from './assets/green/paw.svg';
import treeGreen from './assets/green/Tree.svg';

const {Sider} = Layout;

export const Nav = (props) =>{
    

    return (
        <Sider
            style={{
                height: '100vh',
                backgroundColor:'white'
            }}
        >
            <LogoCont>
                <h1>Project</h1>
                <h1>Canopy</h1>
            </LogoCont>    
            <NavItems>
                <Link to={`/`} className="navItem" id="dashboard">
                    <img src={dashboardLight} alt='dashboard' class="image_on" /> 
                    <img src={dashboardGreen} alt='dashboard' class="image_off"/>
                    Dashboard
                </Link>
                <Link to={`/maps`} className="navItem" id="map">
                    <img src={mapLight} alt='map' class="image_on" /> 
                    <img src={mapGreen} alt='map' class="image_off"/>
                    Map
                </Link>
                <Link to={`/species`} className="navItem" id="paw">
                    <img src={pawLight} alt='species' class="image_on" /> 
                    <img src={pawGreen} alt='species' class="image_off"/> 
                    Species
                </Link>
                <Link to={`/about`} className="navItem" id="tree">
                    <img src={treeLight} alt='About' class="image_on" /> 
                    <img src={treeGreen} alt='About' class="image_off"/>
                    About
                </Link>
            </NavItems>
            <NavFooter>
                <footer>© Project Canopy 2020</footer>
            </NavFooter>
        </Sider>
    )
};

const LogoCont = styled.div`
    display:flex;
    height: 15%;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    h1 {
        font-weight: bold;
        font-size: 1.7em;
        line-height: 31px;
    }
`;

const NavItems = styled.div`
    display:flex;
    height:30%;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    a {
        font-size: 1.3rem;
        line-height: 31px;
        color:#9F9F9F;
        text-decoration:none;
        width:100%;
        text-align:left;
    }
    a:visited {
        color:#9F9F9F;
        font-style:normal;
    }
    .navItem {
        width:70%;
        display:flex;
        justify-items:baseline;
    }
    .navItem:hover {
        color:#45735D;
        font-weight:bold;
    }
    img {
        margin-right:3%;
    }
    .image_off, .navItem:hover .image_on{
        display:none;
     }
     .image_on, .navItem:hover .image_off{
        display:block;
     }
`;

const NavFooter = styled.div`
    text-align:center;
    width:100%;
    position:absolute;
    bottom:0;
    padding:2.5% 0 2.5%;
    border-top: 1px solid #D5D5D5;
    footer {
        font-size: 12px;
        line-height: 16px;
    }
`;