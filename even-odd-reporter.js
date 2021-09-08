for (let i=0; i <= 20; i++) {
    if (i == 0) {               // skipping the 0
    } else if ((i % 2) > 0) {  // when i is even, there is no remainder
        console.log(`${i} is oneven`);
    } else {
        console.log(`${i} is even`);
    }
};