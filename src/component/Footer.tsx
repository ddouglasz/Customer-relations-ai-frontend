import React from 'react';
import styled from 'styled-components'

const StyledFooter = styled.div`
    /* height: 100px; */
    background: #002244;
    color: #ffff;
    display: flex;
    justify-content: space-between;
    padding: 50px;

    .socials-cover {
        /* padding-top: 15px; */
    }

    .twitter-icon {
        
    }
    .instagram-icon {

    }
    .facebook-icon {

    }

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
                <a href="#" className=""><img className="twitter-icon social-icon" src="twitter.png" alt="twitter image" /></a>
                <a href="#" className=""><img className="instagram-icon social-icon" src="instagram.png" alt="instagram image" /></a>
                <a href="#" className=""><img className="facebook-icon social-icon" src="facebook.png" alt="facebook image" /></a>
            </div>

            <div className="rights">
            <a href="#" className="contact-us">Contact us </a>
            <div>© 2021 </div>
            </div>
        </StyledFooter>
    );
};
