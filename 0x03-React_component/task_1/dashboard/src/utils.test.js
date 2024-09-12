import { getFullYear, getFooterCopy, getLatestNotification } from "../../../task_2/dashboard/src/utils";

describe('Utility Functions', () => {
    test("getFullYear returns the correct year", () => {
        const currentYear = new Date().getFullYear(); // Gets the current year
        expect(getFullYear()).toBe(currentYear);
    });
    test("getFooterCopy returns the correct string when the argument is true or false", () => {
        expect(getFooterCopy(true)).toBe("Holberton School");
        expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
    });
    test('getLatestNotification returns the correct string', () => {
        const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
        expect(getLatestNotification()).toBe(expectedString)
    });
});