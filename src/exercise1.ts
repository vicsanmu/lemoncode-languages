export const head = (array: number[]): number => {
    const [ headElement ] = array;
    return headElement;
}

export const tail = (array: number[]): number[] => {
    const [ firstParameter, ...restParameters ] = array;
    return restParameters;
}

export const init = (array: number[]): number[] => {
    const initResult: number[] = array.slice(0, -1);
    return initResult;
}

export const last = (array: number[]): number => {
    const lastResult: number[] = array.slice(-1);
    return lastResult[0];
}