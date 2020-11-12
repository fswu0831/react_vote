import { padLeft, formatLocalDatetime } from '..';

describe('utility methods', () => {
    test('padLeft(number)', () => {
        const result = padLeft(1);
        expect(result).toBe('01');
    });

    test('padLeft(number, "0", 3)', () => {
        const result = padLeft(2, '0', 3);
        expect(result).toBe('002');
    });

    test('padLeft(string)', () => {
        const result = padLeft('A');
        expect(result).toBe('0A');
    });

    test('padLeft(string, " ", 4)', () => {
        const result = padLeft('B', ' ', 4);
        expect(result).toBe('   B');
    });

    test('formatLocalDatetime', () => {
        // yyyy-mm-ddTHH:mm
        const result = formatLocalDatetime(new Date());
        expect(result.length).toBe(16);
    });
});
