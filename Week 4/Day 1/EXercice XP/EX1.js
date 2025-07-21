// #1
function funcOne() {
    let a = 5; // a starts as 5
    if (a > 1) { // 5 is more than 1, so the condition is true
        a = 3; // a becomes 3
    }
    alert(`inside the funcOne function ${a}`); // It will show: "inside the funcOne function 3"
}
funcOne(); // This runs the function

// #1.2 What if we use const instead of let?
// const means the value cannot change. So a = 3 would cause an error if a was declared with const.


// #2
let a = 0; // This is a global variable (outside any function)

function funcTwo() {
    a = 5; // This changes the global a to 5
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

funcThree(); // Shows: "inside the funcThree function 0" (a is still 0)
funcTwo();   // Now a becomes 5
funcThree(); // Shows: "inside the funcThree function 5"

// #2.2 What if we use const instead of let?
// You will get an error because const variables cannot be changed (a = 5 would not work).


// #3
function funcFour() {
    window.a = "hello"; // This makes a global variable (on the window)
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

funcFour();  // This sets a = "hello"
funcFive();  // Shows: "inside the funcFive function hello"

// Even if you didn’t write "let a", this still works because window.a is global


// #4
let a = 1; // Global a

function funcSix() {
    let a = "test"; // This a is only inside the function
    alert(`inside the funcSix function ${a}`); // Shows: "inside the funcSix function test"
}

funcSix(); // Runs the function

// #4.2 What if we use const instead of let?
// It works the same, because we are not changing the value after it's set.


// #5
let a = 2; // Global a
if (true) {
    let a = 5; // This a is only inside the if block
    alert(`in the if block ${a}`); // Shows: "in the if block 5"
}
alert(`outside of the if block ${a}`); // Shows: "outside of the if block 2"

// #5.2 What if we use const instead of let?
// It will still work the same, because the const is also block scoped.
