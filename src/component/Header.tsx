import React from 'react';
import styled from 'styled-components'

const StyledHeader = styled.header`
    height: 400px;
    position: relative;
    background: #002244;
    .nav-cover {
        display: flex;
        justify-content: space-between;
        font-weight: 700;
    }
    .navbar-items {
        display: flex;
    }

    .navbar-items-left {
        margin: 10px 50px;
    }

    .navbar-items-right {
        margin: 10px 50px;
    }

    .navbar-item {
        margin: 20px; 
        text-decoration: none;
        color:  #ffff;
    }
    
    .navbar-item:hover {
     color:#6699CC;
    }

    
    .header-cover {
        width: 100%;
        min-height: 100%;
        display: flex;

    }

    .hero-cover {
        position: relative;
        width: 50%;
        min-height: 100%;
    }

    .chatbot-img {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
    }
    
    .header-text {
        color: #1F305E;
    }
   
    .list-header {
        color: #ffff;
        margin-top: 10%;
        font-size: 50px;
    }

    .hero-text {
        width: 50%;
        margin: auto;
        text-align: center;
        font-weight: 700;
    }
`;

export const Header = () => {

    return (
        <StyledHeader>
            <div className="nav-cover">
                <div className="navbar-items navbar-items-left">
                    <a href="#" className="navbar-item our-blog">Our blog</a>
                    <a href="#" className="navbar-item our-products">Our products</a>
                </div>
                <div className="navbar-items navbar-items-right">
                    <a href="#" className="navbar-item login">Login</a>
                    <a href="#" className="navbar-item signup">Sign up</a>
                </div>
            </div>
                <div className="hero-text">
                    <h1 className="list-header">Explore some of our smart responses</h1>
                </div>
        </StyledHeader>
    );
};
