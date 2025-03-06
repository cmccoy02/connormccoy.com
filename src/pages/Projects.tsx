import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProjectsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.5rem;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.border};
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.div<{ imageUrl: string }>`
  height: 200px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const ProjectLink = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  align-self: flex-start;
  
  &:hover {
    opacity: 0.9;
    text-decoration: none;
  }
`;

const ExternalLink = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  align-self: flex-start;
  
  &:hover {
    opacity: 0.9;
    text-decoration: none;
  }
`;

const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      <PageTitle>Projects</PageTitle>
      
      <ProjectGrid>
        <ProjectCard>
          <ProjectImage imageUrl="/assets/images/bridge.svg" />
          <ProjectContent>
            <ProjectTitle>Bridge</ProjectTitle>
            <ProjectDescription>
              A SaaS startup aimed at helping companies manage their technical debt efficiently.
            </ProjectDescription>
            <ProjectLink to="/projects/bridge">View Project</ProjectLink>
          </ProjectContent>
        </ProjectCard>
        
        <ProjectCard>
          <ProjectImage imageUrl="https://via.placeholder.com/300x200" />
          <ProjectContent>
            <ProjectTitle>Project Two</ProjectTitle>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit.
            </ProjectDescription>
            <ExternalLink href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </ExternalLink>
          </ProjectContent>
        </ProjectCard>
        
        <ProjectCard>
          <ProjectImage imageUrl="https://via.placeholder.com/300x200" />
          <ProjectContent>
            <ProjectTitle>Project Three</ProjectTitle>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit.
            </ProjectDescription>
            <ExternalLink href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </ExternalLink>
          </ProjectContent>
        </ProjectCard>
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects; 