import React from 'react';
import styled from 'styled-components';

const EssaysContainer = styled.div`
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

const EssayList = styled.div`
  margin-top: 2rem;
`;

const EssayCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const EssayTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const EssayDate = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
  font-style: italic;
`;

const EssayExcerpt = styled.p`
  margin-bottom: 1.5rem;
`;

const ReadMoreLink = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: bold;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Essays: React.FC = () => {
  return (
    <EssaysContainer>
      <PageTitle>Essays</PageTitle>
      
      <EssayList>
        <EssayCard>
          <EssayTitle>The Future of Remote Work</EssayTitle>
          <EssayDate>May 15, 2023</EssayDate>
          <EssayExcerpt>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit sit amet consequat. 
            Aliquam erat volutpat. Aliquam venenatis gravida nisl sit amet facilisis. Nullam cursus fermentum velit sed laoreet.
          </EssayExcerpt>
          <ReadMoreLink href="#">Read More</ReadMoreLink>
        </EssayCard>
        
        <EssayCard>
          <EssayTitle>Design Systems in Modern Web Development</EssayTitle>
          <EssayDate>April 3, 2023</EssayDate>
          <EssayExcerpt>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. 
            Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.
          </EssayExcerpt>
          <ReadMoreLink href="#">Read More</ReadMoreLink>
        </EssayCard>
        
        <EssayCard>
          <EssayTitle>The Role of AI in Creative Industries</EssayTitle>
          <EssayDate>March 12, 2023</EssayDate>
          <EssayExcerpt>
            Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Viverra nam libero justo laoreet sit amet cursus. 
            Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Aliquam sem et tortor consequat id porta nibh venenatis cras.
          </EssayExcerpt>
          <ReadMoreLink href="#">Read More</ReadMoreLink>
        </EssayCard>
      </EssayList>
    </EssaysContainer>
  );
};

export default Essays; 