import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhone } from "react-icons/fa";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";
import FullButton from "../Buttons/FullButton";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let’s Work Together</h1>
            <p className="font17">
              Your Needs, Our Code – Building Solutions for You!
              <br />
              Whether you’re looking to build something new and exciting or need our help with an ongoing project, we’ve got you covered.
            </p>
            <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
              <ContactButton>
                <FaEnvelope className="icon" />
                <div className="info">
                  <span className="label">Mail Us</span>
                  <span className="detail">contact@thelogiclounge.com</span>
                </div>
              </ContactButton>
              <ContactButton>
                <FaPhone className="icon" />
                <div className="info">
                  <span className="label">Call Us</span>
                  <span className="detail">+92 3084198014</span>
                </div>
              </ContactButton>
            </ButtonsRow>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form action="https://formsubmit.co/thelogiclounge7@gmail.com" method="POST">
                <label className="font13">Name</label>
                <input type="text" id="fname" name="fname" className="font10 extraBold" required />
                <label className="font13">Email</label>
                <input type="text" id="email" name="email" className="font10 extraBold" required />
                <label className="font13">Phone</label>
                <input type="text" id="phone" name="phone" className="font10 extraBold" required />
                <label className="font13">Company</label>
                <input type="text" id="subject" name="subject" className="font10 extraBold" required />
                <label className="font13">Services You are Looking For</label>
                <input type="text" id="services" name="services" className="font10 extraBold" required />
                <label className="font13">Message</label>
                <textarea rows="4" cols="50" required type="text" id="message" name="message" className="font10 extraBold" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://thelogiclounge.com/" />
                <FullButton title="Submit" type="submit" />
              </Form>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6" />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;
const ButtonsRow = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ContactButton = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: #f7f7f7;
  border-radius: 8px;
  width: 290px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: #e0e0e0;
  }

  .icon {
    font-size: 24px;
    color: #580cd2;
  }

  .info {
    display: flex;
    flex-direction: column;

    .label {
      font-size: 16px;
      font-weight: 600;
    }

    .detail {
      font-size: 14px;
      color: #707070;
    }
  }
`;
