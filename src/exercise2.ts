export const concat = (array1: number[], array2: number[]): number[] => {
    const concatResult = [...array1, ...array2];
    return concatResult;
}

export const concatMultiple = (...arrays): number[] => {
    let concatMultipleResult = [];
    arrays.forEach((array: number[]) => {
        concatMultipleResult = [...concatMultipleResult, ...array];
    });
    return concatMultipleResult;
}