import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";

export default function Carrers() {
  return (
    <Wrapper id="careers">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Grow With Us
</h1>
            <p className="font20">
            Let’s Create Big Stories Together

            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <BlogBox
    title="AWS Cloud Developer
    "
    text="Develop and deploy cloud solutions on Amazon Web Services.Optimize cloud infrastructure for performance and reliability. Troubleshoot and optimize existing applications. Collaborate with teams for seamless deployments."
    tag="No. OF Positions # 01"
    
    author="Apply Now"
    action={() => {
        // Check if the JotformFeedback script is loaded
        if (window.JotformFeedback) {
          const JFL_250222154077448 = new window.JotformFeedback({
            formId: '250222154077448',
            base: 'https://form.jotform.com/',
            windowTitle: 'Online Job Application Form by The Logic Lounge',
            backgroundColor: '#FFA500',
            fontColor: '#FFFFFF',
            type: '1',
            height: 500,
            width: 700,
            openOnLoad: true, // Open immediately when the action is triggered
          });
        } else {
          console.error('JotformFeedback is not loaded. Ensure the script is added globally.');
        }
      }}
  />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="MERN Stack Developer with Microservices Experience

                "
                text="Develop and maintain scalable web applications using MERN stack.Focus on microservices architecture for efficient application performance."
                tag="No. of Positions # 02"
                author="Apply Now "
                action={() => {
                  // Check if the JotformFeedback script is loaded
                  if (window.JotformFeedback) {
                    const JFL_250222154077448 = new window.JotformFeedback({
                      formId: '250222154077448',
                      base: 'https://form.jotform.com/',
                      windowTitle: 'Online Job Application Form by The Logic Lounge',
                      backgroundColor: '#FFA500',
                      fontColor: '#FFFFFF',
                      type: '1',
                      height: 500,
                      width: 700,
                      openOnLoad: true, // Open immediately when the action is triggered
                    });
                  } else {
                    console.error('JotformFeedback is not loaded. Ensure the script is added globally.');
                  }
                }}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Backend Developer(NodeJS)"
                text="Develop scalable backend solutions to support high-performance applications. Collaborate with cross-functional teams to design and implement new features. Troubleshoot, debug and resolve issues to ensure system reliability."
                tag="No. of Positions # 05"
                author="Apply Now"
                action={() => {
                  // Check if the JotformFeedback script is loaded
                  if (window.JotformFeedback) {
                    const JFL_250222154077448 = new window.JotformFeedback({
                      formId: '250222154077448',
                      base: 'https://form.jotform.com/',
                      windowTitle: 'Online Job Application Form by The Logic Lounge',
                      backgroundColor: '#FFA500',
                      fontColor: '#FFFFFF',
                      type: '1',
                      height: 500,
                      width: 700,
                      openOnLoad: true, // Open immediately when the action is triggered
                    });
                  } else {
                    console.error('JotformFeedback is not loaded. Ensure the script is added globally.');
                  }
                }}
              />
            </div>
          </div>
          <div className="row textCenter">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
  <BlogBox
    title="HR Interns"
    text="Join our team as an HR Intern and gain valuable experience in recruitment, onboarding, employee engagement, and HR operations. You'll assist in sourcing and hiring talent, maintaining employee records, coordinating training programs, and supporting daily HR functions."
    tag="Interns"
    author="Apply Now"
    action={() => {
      // Check if the JotformFeedback script is loaded
      if (window.JotformFeedback) {
        const JFL_250222154077448 = new window.JotformFeedback({
          formId: '250222154077448',
          base: 'https://form.jotform.com/',
          windowTitle: 'Online Job Application Form by The Logic Lounge',
          backgroundColor: '#FFA500',
          fontColor: '#FFFFFF',
          type: '1',
          height: 500,
          width: 700,
          openOnLoad: true, // Open immediately when the action is triggered
        });
      } else {
        console.error('JotformFeedback is not loaded. Ensure the script is added globally.');
      }
    }}
  />
</div>

       
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
               </div>
          </div>
        </div>
      </div>
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          
        
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;