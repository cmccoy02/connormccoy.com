import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
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

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <PageTitle>About Me</PageTitle>
      
      <Section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit sit amet consequat. 
          Aliquam erat volutpat. Aliquam venenatis gravida nisl sit amet facilisis. Nullam cursus fermentum velit sed laoreet.
        </p>
        <p>
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. 
          Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.
        </p>
      </Section>
      
      <Section>
        <SectionTitle>Experience</SectionTitle>
        <p>
          Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Viverra nam libero justo laoreet sit amet cursus. 
          Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Aliquam sem et tortor consequat id porta nibh venenatis cras.
        </p>
        <p>
          Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Arcu felis bibendum ut tristique et egestas quis ipsum. 
          Tincidunt vitae semper quis lectus nulla at volutpat diam ut.
        </p>
      </Section>
      
      <Section>
        <SectionTitle>Skills</SectionTitle>
        <p>
          Nunc sed augue lacus viverra vitae congue eu consequat. Sed turpis tincidunt id aliquet risus feugiat in ante metus. 
          Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque.
        </p>
        <p>
          Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Sit amet tellus cras adipiscing enim eu. 
          Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing.
        </p>
      </Section>
    </AboutContainer>
  );
};

export default About; 