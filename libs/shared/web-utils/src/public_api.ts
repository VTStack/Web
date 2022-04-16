const style = `
  font-weight: bold;
  color: red;
  font-size: 40px
`;

const style1 = `
  font-weight: bold;
  color: white;
  font-size: 20px
`;

console.log(
  `%cHi!
I'm Vincent!
`,
  style
);

console.log(`%cWelcome to one of my projects! you can reach me here:`, style1);

const linkStyle = `
  color: lightblue;
  text-decoration: underline;
`;

console.log(
  `%c
vincent.nathan.thomas@gmail.com
`,
  linkStyle
);

export {};
