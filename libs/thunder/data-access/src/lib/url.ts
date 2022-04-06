export const url = new RegExp(/localhost/).test(window.location.origin.split('/', 3)[2])
  ? 'http://localhost:3000/thunder'
  : 'https://api.v-thomas.me/thunder';
