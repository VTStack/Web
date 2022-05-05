import { Button, SharedButtonVariants } from '@v-thomas/core/ui';
import { useToggle } from '@v-thomas/external/hooks';
import { NewGroupModal } from '../new-group-modal';

export function CreateGroupButton({ variant = 'contained' }: { variant?: SharedButtonVariants }) {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <>
      <Button variant={variant} onClick={() => toggleOpen()}>
        Create Group
      </Button>
      <NewGroupModal isOpen={isOpen} toggleOpen={toggleOpen} />
    </>
  );
}
