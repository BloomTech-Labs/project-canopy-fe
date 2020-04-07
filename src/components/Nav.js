import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import treeLogo from './assets/treeLogo.svg';
import dashboardLight from './assets/light/dashboard.svg';
import mapLight from './assets/light//map.svg';
import pawLight from './assets/light/paw.svg';
import treeLight from './assets/light/Tree.svg';

import dashboardGreen from './assets/green/dashboard.svg';
import mapGreen from './assets/green/map.svg';
import pawGreen from './assets/green/paw.svg';
import treeGreen from './assets/green/Tree.svg';

export const Nav = () =>{
    return (
        <NavCont>
            <LogoCont>
                <img src={treeLogo} />
                <h1>Project Canopy</h1>
            </LogoCont>    

            <NavItems>
                <Link className="navItem" id="dashboard">
                    <img src={dashboardLight} class="image_on" /> 
                    <img src={dashboardGreen} class="image_off"/>
                    Dashboard
                </Link>
                <Link className="navItem" id="map">
                    <img src={mapLight} class="image_on" /> 
                    <img src={mapGreen} class="image_off"/>
                    Map
                </Link>
                <Link className="navItem" id="paw">
                    <img src={pawLight} class="image_on" /> 
                    <img src={pawGreen} class="image_off"/> 
                    Species
                </Link>
                <Link className="navItem" id="tree">
                    <img src={treeLight} class="image_on" /> 
                    <img src={treeGreen} class="image_off"/>
                    About
                </Link>
            </NavItems>

            <NavFooter>
                <footer>© Project Canopy 2020</footer>
            </NavFooter>
        </NavCont>
    )
};

const NavCont = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:15%;
    height:100vh;
    background-color:white;
`;

const LogoCont = styled.div`
    display:flex;
    width:100%;
    height: 20vh;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-bottom:1px solid #D5D5D5;
    h1 {
        font-weight: bold;
        font-size: 24px;
        line-height: 31px;
    }
`;

const NavItems = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    width:100%;
    height:34vh;
    padding-top:2vh;
    padding-bottom:40vh;
    a {
        font-size: 24px;
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
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:4vh;
    border-top: 1px solid #D5D5D5;
    footer {
        font-size: 12px;
        line-height: 16px;
    }
`;