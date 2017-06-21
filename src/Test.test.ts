import 'jest';
import './TestMe';

jest.useFakeTimers();

test('This one fails', () => {
    this.TestMe();
    jest.runAllTimers();
    expect(setInterval.mock.calls.length).toBe(1);
    expect(setInterval.mock.calls[0][1]).toBe(1000);
});
