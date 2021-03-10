import React from 'react';
import styled from 'styled-components'

const StyledFooter = styled.div`
    background: #002244;
    color: #ffff;
    display: flex;
    justify-content: space-between;
    padding: 30px;

    .social-icon {
        margin: 0 20px;
    }

    .rights {
        margin-right: 20px;
        display: flex;
    }

    .contact-us {
        text-decoration: none;
        color: #ffff;
        margin-right: 20px;
    }
`;

export const Footer = () => {

    return (
        <StyledFooter>
            <div className="socials-cover">
                <a href="/" className=""><img className="twitter-icon social-icon" src="twitter.png" alt="twitter" /></a>
                <a href="/" className=""><img className="instagram-icon social-icon" src="instagram.png" alt="instagram" /></a>
                <a href="/" className=""><img className="facebook-icon social-icon" src="facebook.png" alt="facebook" /></a>
            </div>

            <div className="rights">
                <a href="/" className="contact-us">Contact us </a>
                <div>© 2021 </div>
            </div>
        </StyledFooter>
    );
};
