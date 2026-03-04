# FizzBuzzzzzzzz
1. First I looked at the code along to reference the example code on line #78 
2. I opened javascript.net and copied the codealong on line #79 to dissect it and see how it runs. 
3. After running it, I replaced the numbers within the code with 
(let i = 1; i <=100' i++)
I did this to see how the code worked and after some thinking all this does is essentially set the range of number from 1 to 100. (Before it was 1500 to 2700 on the code along)
4. I then changed the numbers in the second line of code in the code along to understand how it printed the multiples of the numbers in the equation. 
I changed it from if (i % 7 === 0 && i % 5 === 0) 
to if (i % 3 === 0 && i % 5 === 0) 
    console.log(i)
5. this gave me all the numbers divisble by both 3 and 5 from 1-100. I knew this would come in handy for my code because if that is an instance it just needs to console.log "FizzBuzz", if that is the case.
6. I then needed to figure out how If it is only divisible by 3 to just console.log "Fizz" and if it is only divisible by 5 to console.log "Buzz"
7. First for just "Fizz" I put the line 
for (let i = 1; i <= 100; i++) 
if (i % 3 === 0) 
console.log("Fizz");
else 
console.log(i); 
8. this worked! and only printed "Fizz" if the number is divisible by 3 counting up to 100, if not (else) just console.log i (the number)
9. Next I did the same but added the line for Buzz if it is divisible by 5. 
for (let i = 1; i <= 100; i++) 
if (i % 3 === 0) 
console.log("Fizz");
else if (i % 5 === 0) 
console.log("Buzz");
else 
console.log(i); 
10. Next i just added the first line that had it so whenever number was divisible by both 3 and 5 it printed "FizzBuzz"
(i % 3 === 0 && i % 5 === 0)
11. All together the code is 
for (let i = 1; i <= 100; i++) 
if (i % 3 === 0 && i % 5 === 0) 
console.log("FizzBuzz")
else if (i % 3 === 0) 
console.log("Fizz");
else if (i % 5 === 0) 
console.log("Buzz");
else 
console.log(i);
 
