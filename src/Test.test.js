require('jest');
var TestMe = require('./TestMe');

jest.useFakeTimers();

test('This one works', () => {
    TestMe();
    jest.runAllTimers();
    expect(setInterval.mock.calls.length).toBe(1);
    expect(setInterval.mock.calls[0][1]).toBe(1000);
});
