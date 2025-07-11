function changeEnough(itemPrice, amountOfChange) {
    const coinValues = [0.25, 0.10, 0.05, 0.01]; 
    let total = 0;

    for (let i = 0; i < amountOfChange.length; i++) {
        total += amountOfChange[i] * coinValues[i];
    }

    return total >= itemPrice;
}
