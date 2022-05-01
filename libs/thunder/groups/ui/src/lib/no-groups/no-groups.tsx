import { Text, Title } from '@v-thomas/core-ui';
import styled from 'styled-components';
import { CreateGroupButton } from '../create-group/create-group';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
`;

export function NoGroups() {
  return (
    <Container>
      <Title data-testid="nogroups-title">You dont have any groups!</Title>
      <Text data-testid="nogroups-description">You can create a group here:</Text>
      <CreateGroupButton variant="outlined" />
    </Container>
  );
}

export default NoGroups;
