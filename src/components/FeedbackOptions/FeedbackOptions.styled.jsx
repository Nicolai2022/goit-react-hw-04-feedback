import styled from '@emotion/styled';

export const FeedbackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  padding: 20px;
`;

export const FeedbackButton = styled.button`
  background-color: #f1c0c0;
  color: #572929;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  border: 2px solid #f5f5c5;

  &:hover {
    background-color: #b4a5c5;
    color: #f1c0c0;
  }
`;
