import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import sublogo from '../../assets/sublogo.png';
import {
  stackoverflowMenu,
  productsMenu,
  companyMenu,
  stackexchangenetworkMenu,
  snsMenu,
} from './FooterLink';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('/login')) setIsVisible(false);
    else if (location.pathname.includes('/signup')) setIsVisible(false);
    else setIsVisible(true);
  }, [location.pathname]);

  if (!isVisible) return null;
  else
    return (
      <>
        <Footerbox>
          <div className="footer-content">
            <div className="footer-logo">
              <img src={sublogo} alt="stackoverflowlogo"></img>
            </div>
            <div className="footer-menu1">
              <h5>STACK OVERFLOW</h5>
              <ul>
                {stackoverflowMenu.map((el) => (
                  <li key={el[1]}>
                    <a href={el[0]}>{el[1]}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-menu2">
              <h5>PRODUCTS</h5>

              <ul>
                {productsMenu.map((el) => (
                  <li key={el[1]}>
                    <a href={el[0]}>{el[1]}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-menu3">
              <h5>COMPANY</h5>
              <ul>
                {companyMenu.map((el) => (
                  <li key={el[1]}>
                    <a href={el[0]}>{el[1]}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-menu4">
              <h5>STACK EXCHANGE NETWORK</h5>
              <ul>
                {stackexchangenetworkMenu.map((el) => (
                  <li key={el[1]}>
                    <a href={el[0]}>{el[1]}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-footer">
              <ul>
                {snsMenu.map((el) => (
                  <li key={el[1]}>
                    <a href={el[0]}>{el[1]}</a>
                  </li>
                ))}
              </ul>
              <p>
                Site design/logo © 2023 Stack Exchange Inc; user contributions
                licensed under CC BY-SA. rev 2023.4.13.4387
              </p>
            </div>
          </div>
        </Footerbox>
      </>
    );
};

const Footerbox = styled.div`
  background-color: #232629;
  display: flex;
  position: relative;
  gap: 10px;
  width: 100%;
  height: 8%;
  color: whitesmoke;
  justify-content: center;
  position: relative;
  img {
    width: 44px;
    height: 44px;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      margin: 4px 0px;
    }
    a {
      text-decoration: none;
      color: #80878e;
      &:hover {
        color: whitesmoke;
      }
    }
  }
  .footer-content {
    margin: 0;
    display: flex;
    width: 1250px;
    font-size: 13px;
    justify-content: space-around;
    margin: 22px 0px;
    @media (max-width: 600px) {
      flex-direction: column;
      padding: 6px;
      font-size: 11px;
      li {
        display: inline;
        padding: 6px 12px 6px 0px;
      }
    }
  }
  .footer-footer {
    margin-top: -22px;
    display: flex;
    font-size: 11px;
    justify-content: space-between;
    flex-direction: column;
    width: 30%;
    color: #80878e;
    ul {
      margin: 22px 0px;
    }
    li {
      display: inline;
      margin: 3px;
    }
  }
`;

export default Footer;
