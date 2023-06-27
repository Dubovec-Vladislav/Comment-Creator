const inputText = document.querySelector('.input-text');
const inputSize = document.querySelector('.input-size');
const endRow = document.querySelector('.end-row');
const outputResult = document.querySelector('.result');


function commentCreator() {
  console.log(endRow.value);
  let row = `// ${'-'.repeat(inputSize.value)} //`;
  let indents = ' '.repeat((inputSize.value - inputText.value.length) / 2);
  let comment = `//${indents} ${inputText.value} ${indents}//`;

  if (comment.length < row.length) {
    comment = `//${indents} ${inputText.value} ${indents} //`;
  }

  let template;

  if (endRow.checked) {
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

  document.querySelector('.btn').addEventListener('click', function () {
    navigator.clipboard.writeText(template)
  });
}


inputText.addEventListener('input', () => commentCreator());
inputSize.addEventListener('input', () => commentCreator());
endRow.addEventListener('input', () => commentCreator());

