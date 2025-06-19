for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

i = 10;
do {
  console.log(i);
  i++;
} while (i <= 5);

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // Skips 3
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i); // Stops at 2
}
