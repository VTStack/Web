// export const url = process.env?.['DEV'] ? 'http://localhost:3000' : 'http://localhost:3000';
export const url = new RegExp(/localhost/).test(window.location.origin.split('/', 3)[2])
  ? 'http://localhost:3000/thunder'
  : 'http://api.v-thomas.xyz/thunder';
