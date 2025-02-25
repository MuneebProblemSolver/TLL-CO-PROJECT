import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="services">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Expertise &
Featured Skills</h1>
            <p className="font15">
            Technology is on our nerves. We don’t just build solutions,  <br />
            we create brands. Opting for our services is choosing excellence for your business.
             
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
        
                title="Custom Software Development"
                text="Partner with us and take your digital presence to its full potential and surpass the competition."
                offers={[
                  { name: "Andriod App", cheked: true },
                  { name: "IOS App", cheked: true },
                  { name: "Web Apps", cheked: true },
                  { name: "Shopify", cheked: true },
                  { name: "Wordpress", cheked: true },
                  { name: "Megneto", cheked: true },


                ]}
             
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
             
                title="Power Platforms"
                text="At The Logic Lounge, we harness the power of Microsoft's Power Platform to revolutionize how you operate, analyze, and innovate. Delivering convenience-focused Power Platform development."
                offers={[
                  { name: "Power Apps", cheked: true },
                  { name: "Power Automate", cheked: true },
                  { name: "Power BI", cheked: true },
                  { name: "SharePoint", cheked: true },
                  { name: "Dataverse", cheked: true },
                  { name: "Power Pages", cheked: true },
                ]}
       
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
             
                title="DevOps"
                text="Our DevOps development services are designed to ensure consistent enhancements in software quality, scalability, and predictability.  We aim to assist businesses in meeting customer demands."
                offers={[
                  { name: "Amazon Web Services", cheked: true },
                  { name: "Microsoft Azure", cheked: true },
                  { name: "Google Cloud Platform", cheked: true },
                  { name: "Digital Ocean", cheked: true },
                  { name: "Docker", cheked: true },
                  { name: "Kubernetes", cheked: true },

                ]}
    
              />
            </TableBox>
            
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




