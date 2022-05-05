import { Button, Row, Input, Modal, Title, Text, Col } from '@v-thomas/core/ui';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useGroups } from '@v-thomas/thunder/groups/hooks';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export function NewGroupModal({ isOpen, toggleOpen }: { isOpen: boolean; toggleOpen: () => void }) {
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
  const { createGroup } = useGroups();

  const onSubmit = (data: any) => {
    toggleOpen();

    const { groupName, description } = data;
    createGroup({ groupName, description });
  };

  return (
    <Modal isOpen={isOpen} width="20">
      <Row>
        <Title>Create Group</Title>
        <img src={'/assets/x-mark.svg'} alt="" onClick={() => toggleOpen()} style={{ cursor: 'pointer' }} />
      </Row>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Col gap="0.3">
          <Input {...register('groupName', { required: true, minLength: 3 })} />
          <Text>* Group name</Text>
        </Col>
        <Col gap="0.3">
          <Input {...register('description', { required: true, minLength: 10 })} />
          <Text>* Group description</Text>
        </Col>
        <Button type="submit">Submit</Button>
      </Form>
    </Modal>
  );
}
