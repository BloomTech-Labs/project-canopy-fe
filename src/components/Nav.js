import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Layout, Dropdown, Menu} from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

// Imports all of the image assets
import treeLogo from './assets/treeLogo.svg';
import pcLogo from './assets/pcLogo.svg';
import dashboardLight from './assets/light/dashboard.svg';
import pawLight from './assets/light/paw.svg';
import treeLight from './assets/light/Tree.svg';
import dashboardBlue from './assets/blue/dashboard.svg';
import pawBlue from './assets/blue/paw.svg';
import treeBlue from './assets/blue/Tree.svg';

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
                <img src={treeLogo} alt='logo'/>
                <img src={pcLogo} alt='text logo'/>
            </LogoCont>    
            <NavItems>
                
                    <NavItem context='dashboard' imgContextL={dashboardLight} imgContextG={dashboardBlue} routeContext=''/>
                    <NavItem context='species' imgContextL={pawLight} imgContextG={pawBlue} routeContext='species'/>
                    <NavItem context='about' imgContextL={treeLight} imgContextG={treeBlue} routeContext='about'/>
                
            </NavItems>
            <NavFooter>
                <footer>© Project Canopy 2020</footer>
            </NavFooter>
        </Sider>
    )
};

const NavItem = props => {

    return (
        <Switch>
            <Route exact path={`/${props.routeContext}`}>
                <Link to={`/`} className="navItem" id={`${props.context}`}>
                    <img src={props.imgContextG} alt={`${props.context}`} />
                    <a className='onPage'>{`${props.context}`.charAt(0).toUpperCase()+ `${props.context}`.slice(1)}</a>
                </Link>
            </Route>
            <Route>
                <Link to={`/${props.routeContext}`} className="offPage navItem" id={`${props.context}`}>
                    <img src={props.imgContextL} alt={`${props.context}`} class="image_on" /> 
                    <img src={props.imgContextG} alt={`${props.context}`} class="image_off"/>
                    {`${props.context}`.charAt(0).toUpperCase()+ `${props.context}`.slice(1)}
                </Link>
            </Route>    
        </Switch>
    )
}

const LogoCont = styled.div`
    display:flex;
    height: 15%;
    flex-direction:column;
    align-items:center;
    justify-content:center;
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
        text-decoration:none;
        width:100%;
        text-align:left;
        color:#9F9F9F;
        
    }
    a:visited {
        font-style:normal;
    }
    .onPage {
        color:#324F7B;
        font-weight:bold;
    }
    .navItem {
        width:70%;
        display:flex;
        justify-items:baseline;
    }
    .navItem:hover {
        color:#324F7B;
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