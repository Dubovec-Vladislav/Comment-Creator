const inputText = document.querySelector('.input-text');
const inputSize = document.querySelector('.input-size');
const endRowCheckbox = document.querySelector('.end-row');
const outputResult1 = document.querySelector('.result-1');
const outputResult2 = document.querySelector('.result-2');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
let template1;
let template2;

function setMinSize() {
  minSize = inputText.value.length + 2; // why 2? - # + '_'
  inputSize.min = minSize;
  inputSize.value = (inputSize.value < minSize) ? minSize : inputSize.value;
}

function commentCreator() {
  setMinSize();
  let row = `// ${'-'.repeat(inputSize.value)} //`;
  let indents = ' '.repeat((inputSize.value - inputText.value.length) / 2);
  let comment = `//${indents}# ${inputText.value}${indents}//`;
  comment = (comment.length < row.length) ? `//${indents}# ${inputText.value}${indents} //` : comment

  if (endRowCheckbox.checked) {
    template1 = `${row}
${comment}
${row}

${row}`
  } else {
    template1 = `${row}
${comment}
${row}`
  }


  if (inputText.value.length % 2 === 0) {
    template2 = `// ${'-'.repeat(((inputSize.value - inputText.value.length - 1) / 2))} ${inputText.value} ${'-'.repeat((inputSize.value - inputText.value.length - 2) / 2)} //`
  } else {
    template2 = `// ${'-'.repeat(((inputSize.value - inputText.value.length - 1) / 2))} ${inputText.value} ${'-'.repeat((inputSize.value - inputText.value.length - 1) / 2)} //`
  }

  outputResult1.value = template1;
  outputResult2.value = template2;
}


inputText.addEventListener('input', () => commentCreator());
inputSize.addEventListener('input', () => commentCreator());
endRowCheckbox.addEventListener('input', () => commentCreator());
btn1.addEventListener('click', () => navigator.clipboard.writeText(template1));
btn2.addEventListener('click', () => navigator.clipboard.writeText(template2));

