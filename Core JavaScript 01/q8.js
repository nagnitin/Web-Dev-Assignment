function calculateSum(input) {
    if (input <= 0 || !Number.isInteger(input)) {
        console.log("Please enter a positive integer.");
        return;
    }
    let sum = 0;
    let i = 1;
    do {
        sum += i;
        i++;
    } while (i <= input);
    console.log("The sum of all numbers from 1 to", input, "is:", sum);
}
calculateSum(5);
