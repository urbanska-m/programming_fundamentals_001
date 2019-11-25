const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });
});

describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});


// new test to makeHalfPrice function
describe("utils.makeHalfPrice", () => {
  test("returns 15 when passed 30", () => {
    expect(utils.makeHalfPrice(30)).toBe(15);
  });
});

// new test to countBooks function
describe("utils.countBooks", () => {
  test("count array of two books and return 2", () => {
    expect(utils.countBooks(['Moby Dick', 'Sense and Sensibility'])).toBe(2);
  });

  test("count array of three books and return 3", () => {
    expect(utils.countBooks(['Great Expectations', 'It', 'Sapiens'])).toBe(3);
  });
});

describe("utils.isInStock", () => {
  test("returns true if the title is in stock", () => {
  const book = {
    title: "The Stone Diaries",
    author: "Carol Shields",
    yearOfPublication: 1993,
    quantity: 9
  };
  expect(utils.isInStock(book)).toBe(true);
  });

  test("returns false if the title is not in stock", () => {
    const book = {
      title: "Pet Sematary",
      author: "Stephen King",
      yearOfPublication: 1983,
      quantity: 0
    };
    expect(utils.isInStock(book)).toBe(false);
    });
});

// return price multiplied by quantity, with added 20% VAT
describe("utils.getTotalOrderPrice", () => {
  test("return 96 when passed 8, 10", () => {
    expect(utils.getTotalOrderPrice(8, 10)).toBe(96);
  });

  test("return 54 when passed 15, 3", () => {
    expect(utils.getTotalOrderPrice(15, 3)).toBe(54);
  });
});