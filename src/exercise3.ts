export const clone = (source: any): any => {
    const cloneResult = { ...source };
    return cloneResult;
}

export const merge = (source: any, target: any): any => {
    const mergeResult = { ...target , ...source};
    return mergeResult;
}
