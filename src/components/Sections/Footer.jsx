

import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import logo from "../../assets/img/footer.png"; 

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        {/* Logo and Tagline */}
        <LogoSection>
          <Logo>The Logic Lounge</Logo>
          <Tagline>
            Empowering Businesses, Transforming Visions — Your Trusted Partner for Innovative Software Solutions.
          </Tagline>
          <SocialLinks>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
          </SocialLinks>
        </LogoSection>

        {/* Links */}
        <LinksContainer>
          <Column>
            <h3>Services</h3>
            <ul>
              <li>App Development</li>
              <li>Web Development</li>
              <li>Ecommerce Development</li>
              <li>Blockchain Development</li>
              <li>Game Development</li>
              <li>Salesforce Solutions</li>
              <li>AI & ML</li>
              <li>Microsoft</li>
              <li>DevOps</li>
            </ul>
          </Column>
                  <LinksContainer>
         <Column>
             <h3>Quick Links</h3>
             <ul>
               <li>
                 <StyledLink to="home" smooth={true} offset={-80}>
                   Home
                 </StyledLink>
               </li>
               <li>
                 <StyledLink to="about" smooth={true} offset={-80}>
                   About
               </StyledLink>               </li>
              
               <li>
                 <StyledLink to="services" smooth={true} offset={-80}>
                   Services
               </StyledLink>               </li>
               <li>
                 <StyledLink to="hiretalent" smooth={true} offset={-80}>
                   Hire Talent
                 </StyledLink>
               </li>
               <li>
                 <StyledLink to="projects" smooth={true} offset={-80}>
                   Portfolio
                 </StyledLink>
               </li>
               <li>
                 <StyledLink to="careers" smooth={true} offset={-80}>
                   Careers
                 </StyledLink>
               </li>
               <li>
                 <StyledLink to="contact" smooth={true} offset={-80}>
                   Contact Us
                 </StyledLink>
               </li>
             </ul>
           </Column>
</LinksContainer>
          <Column>
            <h3>Contact</h3>
            <ul>
              <li>Email: contact@thelogiclounge.com</li>
              <li>Phone: +92 3084198014</li>
              <li>Address: 57 - L, Superior Group Corporate Office, Block L Gulberg III, Lahore, Punjab 54000
</li>
            </ul>
          </Column>
        </LinksContainer>

        {/* Offices */}
        <OfficesContainer>
          <h3>Our Offices</h3>
          <Offices>
        
            <Office>
              <img src={logo} alt="Pakistan Office" />
              <div>
                <h4>PAKISTAN OFFICE</h4>
                <p>Address: 57 - L, Superior Group Corporate Office, Block L Gulberg III, Lahore, Punjab 54000</p>
                <p>+92 3084198014</p>
              </div>
            </Office>
          </Offices>
        </OfficesContainer>

        {/* Footer Bottom */}
        <FooterBottom>
          <p>© 2025 - The Logic Lounge | All rights reserved</p>
          <div>
          <p>Connect with us to turn ideas into innovation and challenges into solutions.

          </p>
          </div>
        </FooterBottom>
      </FooterContainer>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: #00162e;
  color: #fff;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const LogoSection = styled.div`
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Tagline = styled.p`
  margin: 10px 0;
  font-size: 14px;
  color: #aaa;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    color: #fff;
    font-size: 18px;
    transition: color 0.3s;

    &:hover {
      color: #ffa500;
    }
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;

  h3 {
    font-size: 16px;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 14px;
      margin-bottom: 5px;
      color: #ccc;

      &:hover {
        color: #ffa500;
        cursor: pointer;
      }
    }
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
`;

const OfficesContainer = styled.div`
  h3 {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const Offices = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Office = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #7620ff;
  padding: 10px;
  border-radius: 8px;
  flex: 1;
  min-width: 300px;

  img {
    width: 50px;
    height: 50px;
  }

  h4 {
    font-size: 14px;
    margin: 0;
    color: #ffa500;
  }

  p {
    font-size: 12px;
    margin: 0;
    color: #ccc;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  p {
    font-size: 14px;
    margin: 0;
  }

  a {
    font-size: 14px;
    color: #fff;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      color: #ffa500;
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: color 0.3s;

  &:hover {
    color: #ddd;
  }
`;
