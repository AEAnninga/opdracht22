function assignGrade(score) {
    if (score > 90) {
      return "A";
    } else if (score > 80) {
      return "B";
    } else if (score > 70) {
      return "C";
    } else if (score > 65) {
      return "D";
    } else {
      return "E";
    }
}

for (let score = 60; score <= 100; score++) {
      console.log(`For scoring ${score} points, you get an ${assignGrade(score)}`);
} 

/*
we start with score = 60 and we end with score = 100
put this in console.log and within console.log also in function
because we put score in function, we get a return in the same line/place we log it
so output will be whats inside console.log for the scores 60 until 100 (including 60 and 100)
*/