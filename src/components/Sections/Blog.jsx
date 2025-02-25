import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div  className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Tech Blog</h1>
            <p className="font15">
            You can focus on things that are barriers or you can focus on scaling the wall or redefining the problem.
              <br />
              Technology is best when it brings people together.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <BlogBox
    title="Powering the Future of Financial Education"
    text="Trading used to be a world for experts, a high-stakes game mostly played by brokers and experienced investors. Decades ago, you needed a deep understanding of market trends, special data access, and connections in the financial world to get involved."
    tag="Financial Education, AI"
    
    author="The Logic Lounge, Tech Blog"
    action={() => window.open("https://thelogicloungetechblogs.hashnode.dev/powering-the-future-of-financial-education", "_blank")}
  />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="DevOps: Revolutionizing Business Operations for a Smarter Future
                "
                text="As digital demands grow, DevOps will continue to evolve, with an increasing emphasis on AI-driven automation, enhanced security through DevSecOps, and scalability."
                tag="DevOps Practices"
                author="The Logic Lounge, Tech Blog"
                action={() => window.open("https://thelogicloungetechblogs.hashnode.dev/devops-revolutionizing-business-operations-for-a-smarter-future")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="How AI/ML Will Define the Next Decade of Innovation"
                text="Imagine a world where machines not only understand human behavior but also anticipate needs before we even realize them. This is the potential of Artificial Intelligence (AI) and Machine Learning (ML)."
                tag="AI/ML, Future Trends"
                author="The Logic Lounge, Tech Blog"
                action={() => window.open("https://thelogicloungetechblogs.hashnode.dev/how-aiml-will-define-the-next-decade-of-innovation")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Key Healthcare Trends to Follow in 2025
                "
                text="The healthcare industry is transforming rapidly, with advanced technologies reshaping patient care. By 2025, innovations in AI, wearable technology, and personalized medicine will significantly influence healthcare delivery."
                tag="Healthcare, Trends 2025"
                author="Luke Skywalker, 2 days ago"
                action={() => window.open("https://thelogicloungetechblogs.hashnode.dev/key-healthcare-trends-to-follow-in-2025")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="AI in Logistics and Supply Chain Management
                "
                text="The logistics and supply chain industry serves as the beating heart of the global economy, ensuring goods and services flow seamlessly across borders to meet the needs of billions &  unlocking new levels of efficiency."
                tag="Logistics, Supply Chain, AI "
                author="The Logic Lounge, Tech Blogs"
                action={() => window.open("https://thelogicloungetechblogs.hashnode.dev/ai-in-logistics-and-supply-chain-management")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="The Future of Blockchain: Trends and Innovations to Watch in 2025 and Beyond
                "
                text="As blockchain technology continues to evolve, it’s no longer just about cryptocurrencies; it has the potential to reshape entire industries."
                tag="BlockChain, Trends & Innovation"
                author="The Logic Lounge, Tech Blogs"
                action={() => window.open("https://thelogicloungetechblogs.hashnode.dev/the-future-of-blockchain-trends-and-innovations-to-watch-in-2025-and-beyond")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="The Logic Lounge's Blog" action={() => window.open("https://thelogicloungetechblogs.hashnode.dev/")} />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font15">
            From the initial stages of development to QA processes to robust IT operations to AI solutions, <br />
            we offer a broad range of tech services and solutions customized to your requirements.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
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