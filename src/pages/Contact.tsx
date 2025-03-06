import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
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

const ContactText = styled.p`
  margin-bottom: 2rem;
  font-size: 1.2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    text-decoration: none;
  }
`;

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 0.75rem;
`;

const SocialName = styled.span`
  font-weight: bold;
`;

const ContactForm = styled.form`
  margin-top: 3rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.9;
  }
`;

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted! This would normally send an email or message.');
  };

  return (
    <ContactContainer>
      <PageTitle>Contact</PageTitle>
      
      <ContactText>
        Feel free to reach out to me through any of the platforms below or by using the contact form.
      </ContactText>
      
      <SocialLinks>
        <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="/assets/images/social/linkedin.svg" alt="LinkedIn" />
          <SocialName>LinkedIn</SocialName>
        </SocialLink>
        
        <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="/assets/images/social/x.svg" alt="X (Twitter)" />
          <SocialName>Twitter</SocialName>
        </SocialLink>
        
        <SocialLink href="https://are.na" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="/assets/images/social/arena.svg" alt="Are.na" />
          <SocialName>Are.na</SocialName>
        </SocialLink>
        
        <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="/assets/images/social/github.svg" alt="GitHub" />
          <SocialName>GitHub</SocialName>
        </SocialLink>
      </SocialLinks>
      
      <ContactForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" required />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="subject">Subject</Label>
          <Input type="text" id="subject" name="subject" required />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" required />
        </FormGroup>
        
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact; 