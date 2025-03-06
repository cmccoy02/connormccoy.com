import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 4rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  margin-bottom: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

const HeroImage = styled.div`
  width: 100%;
  max-width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  background-image: url('/assets/images/me.png');
  background-size: cover;
  background-position: center;
  border: 4px solid ${({ theme }) => theme.colors.accent};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.title};
`;

const CurrentlySection = styled.section`
  margin-top: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
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
`;

const ActivityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const ActivityCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.border};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ActivityImage = styled.div<{ imageUrl: string }>`
  height: 150px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const ActivityContent = styled.div`
  padding: 1.5rem;
`;

const ActivityTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ActivityText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Hero>
        <HeroContent>
          <Title>Hey there ✌️</Title>
          <Subtitle>I'm Connor. I'm an entrepreneur, artist, and designer.</Subtitle>
        </HeroContent>
        <HeroImage />
      </Hero>

      <CurrentlySection>
        <SectionTitle>Currently</SectionTitle>
        <ActivityGrid>
          <ActivityCard>
            <ActivityImage imageUrl="/assets/images/naval.jpg" />
            <ActivityContent>
              <ActivityTitle>Reading</ActivityTitle>
              <ActivityText>The Almanack of Naval Ravikant</ActivityText>
            </ActivityContent>
          </ActivityCard>
          
          <ActivityCard>
            <ActivityImage imageUrl="/assets/images/emerald.jpg" />
            <ActivityContent>
              <ActivityTitle>Playing</ActivityTitle>
              <ActivityText>Emerald Shores</ActivityText>
            </ActivityContent>
          </ActivityCard>
          
          <ActivityCard>
            <ActivityImage imageUrl="/assets/images/crockett.jpg" />
            <ActivityContent>
              <ActivityTitle>Listening</ActivityTitle>
              <ActivityText>Davy Crockett by Charley Crockett</ActivityText>
            </ActivityContent>
          </ActivityCard>
          
          <ActivityCard>
            <a href="/projects/bridge">
              <ActivityImage imageUrl="/assets/images/bridge.svg" />
              <ActivityContent>
                <ActivityTitle>Building</ActivityTitle>
                <ActivityText>Bridge</ActivityText>
              </ActivityContent>
            </a>
          </ActivityCard>
          
          <ActivityCard>
            <ActivityImage imageUrl="/assets/images/true_detective.jpg" />
            <ActivityContent>
              <ActivityTitle>Watching</ActivityTitle>
              <ActivityText>True Detective: Night Country</ActivityText>
            </ActivityContent>
          </ActivityCard>
        </ActivityGrid>
      </CurrentlySection>
    </HomeContainer>
  );
};

export default Home; 