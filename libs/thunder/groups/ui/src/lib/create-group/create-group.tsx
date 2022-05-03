import { Button, Row, Input, Modal, Title, SharedButtonVariants } from '@v-thomas/core/ui';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useToggle } from '@v-thomas/external/hooks';
import { useGroups } from '@v-thomas/thunder/groups/hooks';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export function CreateGroupButton({ variant = 'contained' }: { variant?: SharedButtonVariants }) {
  const { register, handleSubmit } = useForm();
  const { createGroup } = useGroups();
  const [isOpen, toggleOpen] = useToggle(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    toggleOpen();
    createGroup(data);
  };

  return (
    <>
      <Button variant={variant} onClick={() => toggleOpen()}>
        Create Group
      </Button>
      <Modal isOpen={isOpen} width="20" onClickAway={() => toggleOpen()}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Title>Create Group</Title>
            <img
              src={'/assets/x-mark.svg'}
              alt=""
              onClick={() => toggleOpen()}
              style={{ cursor: 'pointer' }}
            />
          </Row>
          <Input {...register('groupName')} />
          <Button type="submit">Submit</Button>
        </Form>
      </Modal>
    </>
  );
}
