//step 1 initialize board state
const gameData = [ 
  {
    space: 0,
    content: ''
  },
  {
    space: 1,
    content: ''
  },
  {
    space: 2,
    content: ''
  },
  {
    space: 3,
    content: ''
  },
  {
    space: 4,
    content: ''
  },
  {
    space: 5,
    content: ''
  },
  {
    space: 6,
    content: ''
  },
  {
    space: 7,
    content: ''
  },
  {
    space: 8,
    content: ''
  },
];



const winData = [
  (0, 1, 2) ||
  (3, 4, 5) ||
  (6, 7, 8) ||
  (0, 3, 6) ||
  (1, 4, 7) ||
  (2, 5, 8) ||
  (0, 4, 2) ||
  (2, 4, 6) 
];

export default { gameData, winData };