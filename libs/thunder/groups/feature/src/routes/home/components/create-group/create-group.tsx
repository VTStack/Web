import { Button, Row, Input, Modal, Title, SharedButtonVariants } from '@v-thomas/core-ui';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useToggle } from '@v-thomas/thunder/hooks';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Cross from '@v-thomas/shared/assets/x-mark.svg';
import { useGroups } from '@v-thomas/thunder/groups/hooks';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export function CreateGroupButton({ variant = 'contained' }: { variant?: SharedButtonVariants }) {
  const { register, handleSubmit } = useForm();

  const [isOpen, toggleOpen] = useToggle(false);

  const onSubmit = (data: any) => {
    toggleOpen();
    createGroup(data);
  };

  const { createGroup } = useGroups();

  return (
    <>
      <Button variant={variant} onClick={toggleOpen}>
        Create Group
      </Button>
      <Modal isOpen={isOpen} width="20" onClickAway={toggleOpen}>
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
