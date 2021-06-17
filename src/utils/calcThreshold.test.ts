import { calcThreshold } from "./calcThreshold";

describe("calcThreshold", () => {
    it("should return 5 if the algorithm stopped after three 5s", () => {
        const actual = calcThreshold([10,5,5,5]);
        const expected = 5;
        
        expect(actual).toBe(expected);
    });

    it("should return the average of the last six thresholds", () => {
        const actual = calcThreshold([80,50,45,45,40,45,40,30]);
        const expected = 40.83;
        
        expect(actual).toBe(expected);
    });
});