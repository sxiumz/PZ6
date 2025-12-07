const { sum, getUser } = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('should return correct user', () => {
    const user = getUser();
    expect(user.name).toBe("Test User");
    expect(user.id).toBe(1);
});
