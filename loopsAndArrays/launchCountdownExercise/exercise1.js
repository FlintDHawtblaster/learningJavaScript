const output = document.querySelector(".output");
output.textContent = "";

// let i = 10;


for (let i = 10; i > -1; i--) { 
  const para = document.createElement('p');
     
  if (i === 10) {
    para.textContent = `Countdown ${i}`
  } else if (i === 0) {
    para.textContent = `Blastoff!`;
  } else {
    para.textContent = `${i}`;
  }

  output.appendChild(para);
}



// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);
