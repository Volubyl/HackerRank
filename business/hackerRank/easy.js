export const cavityMap = (grid) => {
  const result = [];
  result.push(grid[0]);

  for (let y = 1; y < grid.length - 1; y++) {
    const element = grid[y];
    let replacedString = element;
    for (let x = 1; x < element.length - 1; x++) {
      const item = grid[y][x];

      const top = grid[y - 1][x];
      const bottom = grid[y + 1][x];
      const left = grid[y][x - 1];
      const right = grid[y][x + 1];

      if (item > top && item > left && item > bottom && item > right) {
        replacedString = replacedString.replace(item, 'X');
      }
    }
    result.push(replacedString);
  }

  result.push(grid[grid.length - 1]);
  return result;
};

// https://www.hackerrank.com/challenges/grading/problem

// Time log : 30 min;

// what's the most optimised ? V1 or V2 ?
export const gradingStudents = (array) => {
  const result = [];

  array.forEach((grade) => {
    if (grade >= 38) {
      const multipleOf5 = grade - grade % 5 + 5;
      if (multipleOf5 - grade < 3) {
        grade = multipleOf5;
      }
      result.push(grade);
    } else {
      result.push(grade);
    }
  });

  return result;
};

export const gradingStudentsV2 = (array) => {
  const result = [];

  array.forEach((grade) => {
    const multipleOf5 = grade - grade % 5 + 5;
    if (grade >= 38 && multipleOf5 - grade < 3) {
      grade = multipleOf5;
    }
    result.push(grade);
  });

  return result;
};

// https://www.hackerrank.com/challenges/apple-and-orange/problem

// Time log : 50 min;

export const isOnDaHouse = (s, t, fruitPosition) => {
  if (fruitPosition >= s && fruitPosition <= t) {
    return true;
  }
  return false;
};

export const appleAndOranges = (s, t, a, b, apples, oranges) => {
  let appleOnHouse = 0;
  let orangesOnHouse = 0;

  apples.forEach((apple) => {
    const fruitPosition = a + apple;
    if (isOnDaHouse(s, t, fruitPosition)) {
      appleOnHouse++;
    }
  });

  oranges.forEach((orange) => {
    const fruitPosition = b + orange;
    if (isOnDaHouse(s, t, fruitPosition)) {
      orangesOnHouse++;
    }
  });
  return [appleOnHouse, orangesOnHouse];
};
