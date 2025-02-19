'use strict';

const inputs = Array.from(document.querySelectorAll('input'));

for (const input of inputs) {
  if (!input.name) {
    input.name = 'input name is empty';
  }

  if (input.getAttribute('id') === null) {
    input.setAttribute('id');
    input.id = 'identification code';
  }

  const textOfPlaceholder = input.name;

  input.setAttribute('placeholder', capitalizeText(textOfPlaceholder));

  const newLabel = document.createElement('label');

  newLabel.setAttribute('class', 'field-label');
  newLabel.setAttribute('for', input.id);
  newLabel.textContent = textOfPlaceholder.toUpperCase();
  input.before(newLabel);
}

function capitalizeText(text) {
  return text[0].toUpperCase() + text.slice(1);
}
