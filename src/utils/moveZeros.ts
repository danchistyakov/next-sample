const moveZeros = (arr: (string | number)[]): (string | number)[] => {
    return [...(arr.filter(n => n !== 0)), ...(arr.filter(n => n === 0))];
}