# Project: Testing Javascript with Jest.

### List of functions to test and how do they work:

- **Capitalize:** A function that takes a string as an argument and returns it with the first character capitalized. 

##### How does it work?

Slices the first character of the received string, it capitalizes it and saves it into a variable.
Slices the rest of the string (without the first character) and assigns it to another variable.
Concatenates both variables into one and returns it.

- **Reverse string:** A function that takes a string as an argument and returns it reversed.

##### How does it work?

Declares a variable with an empty string.

```
let reversedString = '';
```

Uses a loop, declares the index of the loop with a value of the length of the string minus 1:

```
for (let i = string.length - 1; i >= 0;i -= 1)
```

Grabs the empty string and appends the characters one by one into the empty string starting from the last one till the first one (body of the loop);

```
{ reversedString += string[i] } 
```

- **Calculator:** A function that returns an object capable of doing the 4 basic arithmetic operations; addition, subtraction, multiplication and division.
- **Caesar Cipher:** A function that takes a string and a shift factor, returns the string ciphered.
- **Analyze array:** A function that takes an array of numbers and returns an object with the following info about the array; average, minimum value, maximum value, length of the array.
