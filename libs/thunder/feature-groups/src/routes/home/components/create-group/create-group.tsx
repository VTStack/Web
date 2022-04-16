import { Button, Row, Input, Modal, Title, SharedButtonVariants } from '@v-thomas/shared/ui';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useGroups, useToggle } from '@v-thomas/thunder/hooks';
import Cross from '@v-thomas/shared/assets/x-mark.svg';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export function CreateGroupButton({ variant = 'contained' }: { variant?: SharedButtonVariants }) {
  const { register, handleSubmit } = useForm();

  const [isOpen, toggleOpen] = useToggle(false);
  const { addGroup } = useGroups();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = ({ groupName }: any) => {
    toggleOpen();
    addGroup(groupName);
  };

  return (
    <>
      <Button variant={variant} onClick={toggleOpen}>
        Create Group
      </Button>
      <Modal isOpen={isOpen} width="30" onClickAway={toggleOpen}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Title>Create Group</Title>
            <img src={Cross} alt="" onClick={toggleOpen} style={{ cursor: 'pointer' }} />
          </Row>
          <Input {...register('groupName')} />
          <Button type="submit">Submit</Button>
        </Form>
      </Modal>
    </>
  );
}
