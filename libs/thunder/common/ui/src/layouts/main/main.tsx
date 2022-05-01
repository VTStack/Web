// // import { Navigate, Outlet } from '@tanstack/react-location';
// import { checkAuth } from '@v-thomas/thunder/data-access';
// import { AnimatePresence } from 'framer-motion';
// import { useState } from 'react';
// import styled from 'styled-components';

// interface Inputs {
//   gap?: string;
//   maxWidth?: string;
// }

// const SMain = styled.div`
//   @media screen and (max-width: 800px) {
//     padding-inline: 1rem;
//   }

//   padding: 2rem;
//   display: flex;
//   flex-direction: column;
//   gap: ${(props: Inputs) => `${props.gap || '2'}rem`};
//   max-width: ${({ maxWidth = '1300px' }) => maxWidth};
//   min-height: 100vh;
//   margin: 0 auto;
// `;

// export function Main() {
//   const [user, setUser] = useState<boolean>(true);

//   checkAuth().then(setUser).catch(setUser.bind(undefined, false));
export {};
//   return user ? (
//     <SMain>
//       {/* @ts-ignore */}
//       <AnimatePresence initial={true} exitBeforeEnter={true}>
//         {/* <Outlet /> */}
//       </AnimatePresence>
//     </SMain>
//   ) : null;
// }
