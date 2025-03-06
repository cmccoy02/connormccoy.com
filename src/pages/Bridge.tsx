import React from 'react';
import styled from 'styled-components';

const BridgeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const BridgeLogo = styled.img`
  width: 150px;
  height: auto;
  margin: 0 auto 3rem;
  display: block;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Bridge: React.FC = () => {
  return (
    <BridgeContainer>
      <BridgeLogo src="/assets/images/bridge.svg" alt="Bridge Logo" />
      
      <Section>
        <SectionTitle>The Problem</SectionTitle>
        <p>
          Technical debt is a critical issue that affects software development teams across industries. 
          As codebases grow and evolve, the accumulation of shortcuts, workarounds, and outdated practices 
          can significantly slow down development, increase maintenance costs, and reduce overall software quality.
        </p>
        <p>
          Many organizations struggle to effectively track, prioritize, and address technical debt, 
          leading to decreased productivity, increased bug rates, and developer frustration.
        </p>
      </Section>
      
      <Section>
        <SectionTitle>Our Solution</SectionTitle>
        <p>
          Bridge is a comprehensive technical debt management platform designed to help development teams 
          identify, track, and systematically address technical debt in their codebases.
        </p>
        <p>
          Our solution integrates with existing development workflows and tools to provide visibility into 
          technical debt across projects, enabling teams to make informed decisions about when and how to address it.
        </p>
      </Section>
      
      <Section>
        <SectionTitle>Progress</SectionTitle>
        <p>
          We are currently in the early development phase of Bridge, focusing on building the core 
          functionality and integrations with popular development tools and platforms.
        </p>
        <p>
          Our team is working closely with beta users to refine the product and ensure it addresses 
          the real-world challenges of managing technical debt in diverse development environments.
        </p>
      </Section>
      
      <Section>
        <SectionTitle>Our Roadmap</SectionTitle>
        <p>
          Our development roadmap includes the following key milestones:
        </p>
        <ul>
          <li>Q2 2023: Alpha release with core functionality</li>
          <li>Q3 2023: Beta program with selected partners</li>
          <li>Q4 2023: Public launch with integrations for major development platforms</li>
          <li>Q1 2024: Advanced analytics and reporting features</li>
          <li>Q2 2024: Enterprise features and customization options</li>
        </ul>
      </Section>
    </BridgeContainer>
  );
};

export default Bridge; 