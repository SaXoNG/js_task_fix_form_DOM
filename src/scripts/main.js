'use strict';

const inputs = Array.from(document.querySelectorAll('input'));

for (const input of inputs) {
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
