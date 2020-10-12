const functions = require('./functions');

test('add 2+2 = 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('add 2 + 2  not to equal to 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('should be null', () => {
  expect(functions.isNull(undefined)).toBeNull();
});
test('check the enterd value', () => {
  expect(functions.checkValue(5)).toBe(5);
});
test('User should be varun Ranjan', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'varun',
    lastName: 'ranjan',
  });
});
test('check weight if less than 1600', () => {
  expect(functions.tobeLess(400, 500)).toBeLessThan(1600);
});
test('There is no @ in email', () => {
  expect('team.gmail.com').not.toMatch(/@/);
});
test('role should have admin', () => {
  userNames = ['jhon', 'doe', 'admin'];
  expect(userNames).toContain('admin');
});
// Working with async data
test('User Fetched Name is Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual('Leanne Graham');
  });
});
// with async and  await

test('user name is Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
