import 'jest';
import TestMe from './TestMe';

jest.useFakeTimers();

test('This one fails', () => {
    TestMe();
    jest.runAllTimers();
    expect(setInterval.mock.calls.length).toBe(1);
    expect(setInterval.mock.calls[0][1]).toBe(1000);
});
