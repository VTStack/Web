import { Divider } from '@v-thomas/core/ui';

export function InvitePage() {
  // const dispatch = useDispatch<any>();
  // const state = useSelector(getInviteState);
  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const { inviteId }: any = useParams();
  // const router = useNavigate();
  // // useSelector(selectAllInvites);
  // useLayoutEffect(() => void dispatch(fetchInvite({ payload: { inviteId } })), [dispatch, inviteId]);
  // if (state.error === 'OWNER_OF_INVITE') return <InviteOwner />;
  // if (state.error === 'INVITE_NOT_FOUND') return <div>invite not found</div>;
  // async function accept() {
  //   dispatch(addMember({ payload: { inviteId } }));
  //   // router(`/app/group/${invite.}`);
  // }
  // async function decline() {
  //   router('../../groups');
  // }
  // <Modal width="auto" isOpen={true}>
  //   <Row gap="1">
  //     <Title>
  //       Invite to group <Code>{state.group?.name}</Code>
  //     </Title>
  //     <Text>You have been invited to {state.group?.name}. Do you want to join?</Text>
  //     <ButtonContainer style={{ marginLeft: 'auto' }}>
  //       <Button variant="outlined" onClick={decline}>
  //         Decline
  //       </Button>
  //       <Button onClick={accept}>Accept</Button>
  //     </ButtonContainer>
  //   </Row>
  // </Modal>
  return <Divider />;
}
