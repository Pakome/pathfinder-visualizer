let walls;
export function getRecursiveDivisionMaze(grid, startNode, finishNode) {
  if (!startNode || !finishNode || startNode === finishNode) {
    return false;
  }
  let vertical = range(grid[0].length);
  let horizontal = range(grid.length);
  walls = [];
  getRecursiveWalls(vertical, horizontal, grid, startNode, finishNode);
  return walls;
}

function range(len) {
  let result = [];
  for (let i = 0; i < len; i++) {
    result.push(i);
  }
  return result;
}

//dir === 0 => Horizontal
//dir === 1 => Vertical

function getRecursiveWalls(vertical, horizontal, grid, startNode, finishNode) {
  if (vertical.length < 2 || horizontal.length < 2) {
    return;
  }
  let dir;
  let num;
  if (vertical.length > horizontal.length) {
    dir = 0;
    num = generateOddRandomNumber(vertical);
  }
  if (vertical.length <= horizontal.length) {
    dir = 1;
    num = generateOddRandomNumber(horizontal);
  }

  if (dir === 0) {
    addWall(dir, num, vertical, horizontal, startNode, finishNode);
    getRecursiveWalls(
      vertical.slice(0, vertical.indexOf(num)),
      horizontal,
      grid,
      startNode,
      finishNode
    );
    getRecursiveWalls(
      vertical.slice(vertical.indexOf(num) + 1),
      horizontal,
      grid,
      startNode,
      finishNode
    );
  } else {
    addWall(dir, num, vertical, horizontal, startNode, finishNode);
    getRecursiveWalls(
      vertical,
      horizontal.slice(0, horizontal.indexOf(num)),
      grid,
      startNode,
      finishNode
    );
    getRecursiveWalls(
      vertical,
      horizontal.slice(horizontal.indexOf(num) + 1),
      grid,
      startNode,
      finishNode
    );
  }
}

function generateOddRandomNumber(array) {
  let max = array.length - 1;
  let randomNum =
    Math.floor(Math.random() * (max / 2)) +
    Math.floor(Math.random() * (max / 2));
  if (randomNum % 2 === 0) {
    if (randomNum === max) {
      randomNum -= 1;
    } else {
      randomNum += 1;
    }
  }
  return array[randomNum];
}

//dir === 0 => Horizontal
//dir === 1 => Vertical

function addWall(dir, num, vertical, horizontal, startNode, finishNode) {
  let isStartFinish = false;
  let tempWalls = [];
  if (dir === 0) {
    if (horizontal.length === 2) return;
    for (let temp of horizontal) {
      if (
        (temp === startNode.row && num === startNode.col) ||
        (temp === finishNode.row && num === finishNode.col)
      ) {
        isStartFinish = true;
        continue;
      }
      tempWalls.push([temp, num]);
    }
  } else {
    if (vertical.length === 2) return;
    for (let temp of vertical) {
      if (
        (num === startNode.row && temp === startNode.col) ||
        (num === finishNode.row && temp === finishNode.col)
      ) {
        isStartFinish = true;
        continue;
      }
      tempWalls.push([num, temp]);
    }
  }
  if (!isStartFinish) {
    tempWalls.splice(generateRandomNumber(tempWalls.length), 1);
  }
  for (let wall of tempWalls) {
    walls.push(wall);
  }
}

function generateRandomNumber(max) {
  let randomNum =
    Math.floor(Math.random() * (max / 2)) +
    Math.floor(Math.random() * (max / 2));
  if (randomNum % 2 !== 0) {
    if (randomNum === max) {
      randomNum -= 1;
    } else {
      randomNum += 1;
    }
  }
  return randomNum;
}

// var grid;

// export function getRecursiveDivisionMaze(g) {
//   grid = g;
//   console.log("new grid", grid);
//   return g;
// }

// function generate(dimensions, numDoors) {
//     grid = [];
//     for (var i = 0; i < dimensions; i++) {
//         grid[i] = [];

//         for (var j = 0; j < dimensions; j++) {
//             grid[i][j] = "";
//         }
//     }

//     addOuterWalls();
//     var ent = addEntrance();
//     addInnerWalls(true, 1, grid.length - 2, 1, grid.length - 2, ent);
// }

// function addOuterWalls() {
//     for (var i = 0; i < grid.length; i++) {
//         if (i === 0 || i === (grid.length - 1)) {
//             for (var j = 0; j < grid.length; j++) {
//                 grid[i][j] = "w";
//             }
//         } else {
//             grid[i][0] = "w";
//             grid[i][grid.length - 1] = "w";
//         }
//     }
// }

// function addEntrance() {
//     var x = randomNumber(1, grid.length - 1);
//     grid[grid.length - 1][x] = "g";
//     return x;
// }

// function addInnerWalls(h, minX, maxX, minY, maxY, gate) {
//     if (h) {

//         if (maxX - minX < 2) {
//             return;
//         }

//         var y = Math.floor(randomNumber(minY, maxY)/2)*2;
//         addHWall(minX, maxX, y);

//         addInnerWalls(!h, minX, maxX, minY, y-1, gate);
//         addInnerWalls(!h, minX, maxX, y + 1, maxY, gate);
//     } else {
//         if (maxY - minY < 2) {
//             return;
//         }

//         var x = Math.floor(randomNumber(minX, maxX)/2)*2;
//         addVWall(minY, maxY, x);

//         addInnerWalls(!h, minX, x-1, minY, maxY, gate);
//         addInnerWalls(!h, x + 1, maxX, minY, maxY, gate);
//     }
// }

// function addHWall(minX, maxX, y) {
//     var hole = Math.floor(randomNumber(minX, maxX)/2)*2+1;

//     for (var i = minX; i <= maxX; i++) {
//         if (i === hole) grid[y][i] = "";
//         else grid[y][i] = "w";
//     }
// }

// function addVWall(minY, maxY, x) {
//     var hole = Math.floor(randomNumber(minY, maxY)/2)*2+1;

//     for (var i = minY; i <= maxY; i++) {
//         if (i === hole) grid[i][x] = "";
//         else grid[i][x] = "w";
//     }
// }

// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// // function display() {
// //     document.getElementById("cnt").innerHTML = "";

// //     for (var i = 0; i < grid.length; i++) {
// //         var output = "<div>";
// //         for (var j = 0; j < grid.length; j++) {
// //             output += "<b " + grid[i][j] + "></b>";
// //         }
// //         output += "</div>";
// //         document.getElementById("cnt").innerHTML += output;
// //     }
// // }
// generate(50, 1, 1);
// // display();
// console.trace(grid);

// // function defineVerticalOrHorizontal(grid) {
// //   const width = grid[0].length;
// //   const height = grid.length;
// //   if (width < height) {
// //     return "vertical";
// //   } else if (width > height) {
// //     return "horizontal";
// //   } else if (width === height) {
// //     return Math.floor(Math.random() * 2) + 1 === 1 ? "horizontal" : "vertical";
// //   }
// // }

// // function addWalls(minX, maxX, minY, maxY, grid) {
// //   const result = defineVerticalOrHorizontal(grid);
// //   if (result === "horizontal") {
// //     if (maxX - minX < 2) return;
    
// //   } else if (result === "vertical") {
// //     if (maxY - minY < 2) return;
// //   }
// // }

// // function addInnerWalls(h, minX, maxX, minY, maxY, gate) {
// //   if (h) {
// //     if (maxX - minX < 2) {
// //         return;
// //     }
// //     var y = Math.floor(randomNumber(minY, maxY) / 2) * 2;
// //     addHWall(minX, maxX, y);

// //     addInnerWalls(!h, minX, maxX, minY, y-1, gate);
// //     addInnerWalls(!h, minX, maxX, y + 1, maxY, gate);
// //   } else {
// //     if (maxY - minY < 2) {
// //       return;
// //     }

// //     var x = Math.floor(randomNumber(minX, maxX)/2)*2;
// //     addVWall(minY, maxY, x);

// //     addInnerWalls(!h, minX, x-1, minY, maxY, gate);
// //     addInnerWalls(!h, x + 1, maxX, minY, maxY, gate);
// //   }
// // }

// // function addHWall(minX, maxX, y) {
// //     var hole = Math.floor(randomNumber(minX, maxX)/2)*2+1;

// //     for (var i = minX; i <= maxX; i++) {
// //         if (i === hole) grid[y][i] = "";
// //         else grid[y][i] = "w";
// //     }
// // }

// // function addVWall(minY, maxY, x) {
// //     var hole = Math.floor(randomNumber(minY, maxY)/2)*2+1;

// //     for (var i = minY; i <= maxY; i++) {
// //         if (i === hole) grid[i][x] = "";
// //         else grid[i][x] = "w";
// //     }
// // }

// // function addHorizontalWall(minX, maxX, y, grid) {
// //   const hole = Math.floor(randomNumber(minX, maxX) / 2) * 2 + 1;
// //   for (let i = minX; i <= maxX; i++) {
// //     if (i === hole) grid[y][i].isWall = false;
// //     else grid[y][i].isWall = true;
// //   }
// //   return grid;
// // }

// // function addVerticalWall(minY, maxY, x, grid) {
// //   const hole = Math.floor(randomNumber(minY, maxY) / 2) * 2 + 1;
// //   for (let i = minY; i <= maxY; i++) {
// //     if (i === hole) grid[i][x].isWall = false;
// //     else grid[i][x].isWall = true;
// //   }
// //   return grid;
// // }









// // // // function divide(grid, mx, my, ax, ay) {
// // // //   let dx = ax - mx;
// // // //   let dy = ay - my;
// // // //   if (dx < 2 || dy < 2) {
// // // //     if (dx > 1) {
// // // //       let y = my;
// // // //       for (let i = mx; i < ax - 1; i++) {
// // // //         grid[y][x]
// // // //       }
// // // //     }
// // // //   }
// // // // }

// // // var grid;

// // // function generate(dimensions, numDoors) {
// // //     grid = [];
// // //     for (var i = 0; i < dimensions; i++) {
// // //         grid[i] = [];

// // //         for (var j = 0; j < dimensions; j++) {
// // //             grid[i][j] = "";
// // //         }
// // //     }

// // //     addOuterWalls(grid);
// // //     var ent = addEntrance(grid);
// // //     addInnerWalls(true, 1, grid.length - 2, 1, grid.length - 2, ent);
// // // }

// // // function addOuterWalls(grid) {
// // //     for (var i = 0; i < grid.length; i++) {
// // //         if (i === 0 || i === (grid.length - 1)) {
// // //             for (var j = 0; j < grid.length; j++) {
// // //                 grid[i][j] = "w";
// // //             }
// // //         } else {
// // //             grid[i][0] = "w";
// // //             grid[i][grid.length - 1] = "w";
// // //         }
// // //     }
// // // }

// // // // function addEntrance(grid) {
// // // //     var x = randomNumber(1, grid.length - 1);
// // // //     grid[grid.length - 1][x] = "g";
// // // //     return x;
// // // // }

// // // // function addInnerWalls(h, minX, maxX, minY, maxY, gate) {
// // // //     if (h) {

// // // //         if (maxX - minX < 2) {
// // // //             return;
// // // //         }

// // // //         var y = Math.floor(randomNumber(minY, maxY)/2)*2;
// // // //         addHWall(minX, maxX, y);

// // // //         addInnerWalls(!h, minX, maxX, minY, y-1, gate);
// // // //         addInnerWalls(!h, minX, maxX, y + 1, maxY, gate);
// // // //     } else {
// // // //         if (maxY - minY < 2) {
// // // //             return;
// // // //         }

// // // //         var x = Math.floor(randomNumber(minX, maxX)/2)*2;
// // // //         addVWall(minY, maxY, x);

// // // //         addInnerWalls(!h, minX, x-1, minY, maxY, gate);
// // // //         addInnerWalls(!h, x + 1, maxX, minY, maxY, gate);
// // // //     }
// // // // }



// // function randomNumber(min, max) {
// //     return Math.floor(Math.random() * (max - min + 1) + min);
// // }

// // // // function display() {
// // // //     document.getElementById("cnt").innerHTML = "";

// // // //     for (var i = 0; i < grid.length; i++) {
// // // //         var output = "<div>";
// // // //         for (var j = 0; j < grid.length; j++) {
// // // //             output += "<b " + grid[i][j] + "></b>";
// // // //         }
// // // //         output += "</div>";
// // // //         document.getElementById("cnt").innerHTML += output;
// // // //     }
// // // // }
// // // generate(20, 1, 1);
// // // // display();

// // // console.log("GRID", grid)




// // // function myOuterWalls(grid) {
// // //   for (var i = 0; i < grid.length; i++) {
// // //     if (i === 0 || i === (grid.length - 1)) {
// // //       for (var j = 0; j < grid[0].length; j++) {
// // //         grid[i][j].isWall = true;
// // //       }
// // //     } else {
// // //       grid[i][0].isWall = true;
// // //       grid[i][grid.length - 1].isWall = true;
// // //     }
// // //   }
// // //   return grid;
// // // }

// // // function addEntrance(grid) {
// // //     var x = randomNumber(1, grid.length - 1);
// // //     grid[grid.length - 1][x] = "g";
// // //     return x;
// // // }