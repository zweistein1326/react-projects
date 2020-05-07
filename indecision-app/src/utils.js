console.log('utils.js is running');

export const square = (x) => x * x;
export const add = (x, y) => x + y;

// export { square, add }; --> named export



export default (x, y) => x - y;
//exports - default export

// export { square, add, subtract as default };




//exports- 