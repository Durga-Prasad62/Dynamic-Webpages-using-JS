
// 🧩 1. Simple Nested Loop
for(let i = 1; i <= 2; i++){
  for(let j = 1; j <= 3; j++){
    console.log(i, j);
  }
}
// 1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3

// 👉 Predict the output.

// 🧩 2. Inner Loop Depends on Outer Loop
for(let i = 1; i <= 3; i++){
  for(let j = 1; j <= i; j++){
    console.log(i, j);
  }
}

// 1 1
// 2 1
// 2 2
// 3 1
// 3 2
// 3 3


// 👉 Notice that the inner loop runs i times.

// 🧩 3. Skipping with continue
for(let i = 1; i <= 3; i++){
  for(let j = 1; j <= 3; j++){
    if(j === 2) continue;
    console.log(i, j);
  }
}
// 1 1
// 1 3
// 2 1
// 2 3
// 3 1
// 3 3
// 👉 Observe what happens when j === 2.

// 🧩 4. Breaking Inner Loop
for(let i = 1; i <= 3; i++){
  for(let j = 1; j <= 3; j++){
    if(j === 2) break;
    console.log(i, j);
  }
}
// 1 1
// 2 1
// 3 1

// 👉 What happens when break is used? 
//    when inner loop j ==2 then break  but it not effect on outer loop

// 🧩 5. Tricky Condition (typo-like)
for(let i = 2; i < 3; i++){
  for(let j = 0; i < 3; j++){
    console.log(i, j);
  }
}
// infinite loop

// 👉 Does this run? Or infinite loop?
//  (Think: the inner loop condition uses i, not j.)

// 🧩 6. Reverse Loop
for(let i = 3; i > 0; i--){
  for(let j = i; j > 0; j--){
    console.log(i, j);
  }
}
//  3 3
//  3 2
//  3 1
//  2 3
//  2 2
//  2 1
// 👉 Predict how many total lines print.

// 🧩 7. Outer Increment Inside Inner Loop
for(let i = 0; i < 3; i++){
  for(let j = 0; j < 2; j++){
    console.log(i, j);
    i++;
  }
}
// 0 0
// 1 1

// 👉 How does modifying i inside the inner loop affect output?

// 🧩 8. Nested Loop with Multiplication
for(let i = 1; i <= 3; i++){
  for(let j = 1; j <= 3; j++){
    console.log(i * j);
  }
}
//  1
//  2
//  3
//  2
//  4
//  6
//  3
//  6
// 9
// 👉 How many values are printed, and what pattern?

// 🧩 9. Dependent Inner Start
for(let i = 1; i <= 3; i++){
  for(let j = i; j <= 3; j++){
    console.log(i, j);
  }
}
// 1 1
// 1 2
// 1 3
// 2 2
// 2 3
// 3 3

// 👉 Output pattern forms a triangle shape — can you visualize?

// 🧩 10. Complex Mixed Condition
for(let i = 1; i <= 3; i++){
  for(let j = 1; j <= 3; j++){
    if(i + j > 3) console.log(i, j);
  }
}
// 1 3
// 2 2
// 2 3
// 3 1
// 3 2
// 3 3

// 👉 Only prints when i + j > 3.
