for (let grade = 1; grade <= 10; grade++) {
    for (let multiplier = 1; mmultiplier <= 10; multiplier++) {
        let result = grade * multiplier;
        console.log(`${grade} x ${multiplier} = ${result}`)
    }
}

/* 
so it starts with grade = 1
then it goes directly to second (nested) 'for' loop
there it starts with multiplier = 1 
it calculates grade * multiplier and assigns it to result
then console.log output is: 1 (grade) x 1 (multiplier) = 1 (result)
then it does the nested loop again because of multiplier <= 10
now multiplier becomes 2 because of multiplier++
now output is: 1 (grade) x 2 (multiplier) = 2 (result)

So we get:     1 (grade) x 1 (multiplier) = 1 (result)
               1 (grade) x 2 (multiplier) = 2 (result)
               1 (grade) x 3 (multiplier) = 3 (result)
               etc... 

when multiplier becomes > 10, nested for loop will be stopped/exited
then we are in first for loop again and it will start again because grade <=10
grade now becomes 2 because of grade++ 
nested for loop starts now with grade = 2
and we get: 2 (grade) x 1 (multiplier) = 2 (result)
            2 (grade) x 2 (multiplier) = 4 (result)
            2 (grade) x 3 (multiplier) = 6 (result)
            etc...

*/