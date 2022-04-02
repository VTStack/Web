import styled from 'styled-components';

import { Card } from '@v-thomas/shared/ui';

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.25rem;
`;

export const Container = styled(Card)`
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 0.25rem;
  padding: 0;
`;

export const LowerContainer = styled.div`
  padding: 0.75rem;
`;
