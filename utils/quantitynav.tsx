/* eslint-disable max-len */
export function buttonDownClicked() {
  const inputQuantity = document.getElementById(
    "quantity-input"
  ) as HTMLInputElement;
  if (inputQuantity.valueAsNumber > 0) {
    inputQuantity.valueAsNumber = inputQuantity.valueAsNumber - 1;
  } else {
    inputQuantity.valueAsNumber = 0;
  }
  //update();
}

export function buttonUpClicked() {
  const inputQuantity = document.getElementById(
    "quantity-input"
  ) as HTMLInputElement;
  if (inputQuantity.valueAsNumber >= 0) {
    inputQuantity.valueAsNumber = inputQuantity.valueAsNumber + 1;
  } else {
    inputQuantity.valueAsNumber = 1;
  }
}
