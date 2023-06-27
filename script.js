const inputText = document.querySelector('.input-text');
const inputSize = document.querySelector('.input-size');
const endRowCheckbox = document.querySelector('.end-row');
const outputResult = document.querySelector('.result');
const btn = document.querySelector('.btn');
let template;

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
    template = `${row}
${comment}
${row}

${row}`
  } else {
    template = `${row}
${comment}
${row}`
  }

  outputResult.value = template
}


inputText.addEventListener('input', () => commentCreator());
inputSize.addEventListener('input', () => commentCreator());
endRowCheckbox.addEventListener('input', () => commentCreator());
btn.addEventListener('click', () => navigator.clipboard.writeText(template));

