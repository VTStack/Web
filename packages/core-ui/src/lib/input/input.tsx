import styled from 'styled-components';

export const Input = styled.input`
  padding: 0.9rem;
  border-radius: 7.5px;
  border: 2px solid ${({ theme }) => theme.background.third};
  appearance: none;
  background: ${({ theme }) => theme.background.secondary};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text.third};
`;
