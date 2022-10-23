/* eslint-disable max-len */
export function buttonDownClicked(
  setTotal: React.Dispatch<React.SetStateAction<number>>,
  price: number
) {
  const inputQuantity = document.getElementById(
    "quantity-input"
  ) as HTMLInputElement;
  if (inputQuantity.valueAsNumber > 0) {
    inputQuantity.valueAsNumber = inputQuantity.valueAsNumber - 1;
  } else {
    inputQuantity.valueAsNumber = 0;
  }
  update(setTotal, price);
}

export function buttonUpClicked(
  setTotal: React.Dispatch<React.SetStateAction<number>>,
  price: number
) {
  const inputQuantity = document.getElementById(
    "quantity-input"
  ) as HTMLInputElement;
  if (inputQuantity.valueAsNumber >= 0) {
    inputQuantity.valueAsNumber = inputQuantity.valueAsNumber + 1;
  } else {
    inputQuantity.valueAsNumber = 1;
  }
  update(setTotal, price);
}

function update(
  setTotal: React.Dispatch<React.SetStateAction<number>>,
  price: number
) {
  const quantityValueInput = document.getElementById(
    "quantity-input"
  ) as HTMLInputElement;
  const quantityValue = quantityValueInput.valueAsNumber;
  setTotal(quantityValue * price);
}
