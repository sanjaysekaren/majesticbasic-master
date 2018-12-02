import data from './bookData.json';

// export function sampleData(state = {
//     books: []
// }, action) {
//     switch (action.type) {
//         case 'sampleBookData':
//             return { ...state, books: action.payload };
//         default:
//             return state;
//     }
// }

export default () => data;

// export default (state = [],action)=>{
//     switch(action.type){
//         case 'sampleBookData':
//             return { ...state, books: action.payload };
//         default:
//             return state;
//     }
// }