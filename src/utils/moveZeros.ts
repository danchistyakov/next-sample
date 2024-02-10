const moveZeros = (arr: number[]) => {
    return [...(arr.filter(n => n !== 0)), ...(arr.filter(n => n === 0))];
}