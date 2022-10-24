import { StatePropsType } from "../types/monPanier";

export function editButtonClicked(
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>,
  index: number,
  setPrice: React.Dispatch<React.SetStateAction<StatePropsType>>,
  price: number
) {
  const buttonEdit = document.getElementById(
    "editButton" + index
  ) as HTMLButtonElement;
  const buttonSave = document.getElementById(
    "saveButton" + index
  ) as HTMLButtonElement;
  const deleteButton = document.getElementById(
    "deleteButton" + index
  ) as HTMLButtonElement;
  const cancelButton = document.getElementById(
    "cancelButton" + index
  ) as HTMLButtonElement;
  const quantityInputElement = document.getElementById(
    "quantityOfProduct" + index
  ) as HTMLInputElement;
  cancelButton.style.display = "block";
  buttonEdit.style.display = "none";
  buttonSave.style.display = "block";
  deleteButton.style.display = "none";
  setPrice({
    quantity: quantityInputElement.valueAsNumber,
    price: price * quantityInputElement.valueAsNumber,
  });
  setEnabled(false);
}

export function removeProduct(index: number): void {
  const ProductLine = document.getElementById(
    "line " + index
  ) as HTMLTableRowElement;
  const priceToTalTd = document.getElementById(
    "Totalprice" + index
  ) as HTMLElement;
  const totalPriceElement = document.getElementById("Total") as HTMLElement;
  totalPriceElement.textContent = (
    parseInt(totalPriceElement.innerText) - parseInt(priceToTalTd.innerText)
  ).toString();
  ProductLine.style.display = "none";
}

export function saveButtonClicked(
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>,
  index: number
) {
  const buttonEdit = document.getElementById(
    "editButton" + index
  ) as HTMLButtonElement;
  const buttonSave = document.getElementById(
    "saveButton" + index
  ) as HTMLButtonElement;
  const deleteButton = document.getElementById(
    "deleteButton" + index
  ) as HTMLButtonElement;
  const cancelButton = document.getElementById(
    "cancelButton" + index
  ) as HTMLButtonElement;
  cancelButton.style.display = "none";
  deleteButton.style.display = "block";
  buttonEdit.style.display = "block";
  buttonSave.style.display = "none";
  setEnabled(true);
}

export function cancelButtonClicked(
  index: number,
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>,
  oldItem: { price: number; quantity: number }
): void {
  const buttonEdit = document.getElementById(
    "editButton" + index
  ) as HTMLButtonElement;
  const buttonSave = document.getElementById(
    "saveButton" + index
  ) as HTMLButtonElement;
  const deleteButton = document.getElementById(
    "deleteButton" + index
  ) as HTMLButtonElement;
  const cancelButton = document.getElementById(
    "cancelButton" + index
  ) as HTMLButtonElement;
  const inputElement = document.getElementById(
    "quantityOfProduct" + index
  ) as HTMLInputElement;

  const totalPriceElement = document.getElementById("Total") as HTMLElement;
  const totalPriceTd = document.getElementById(
    "Totalprice" + index
  ) as HTMLTableElement;

  inputElement.value = oldItem.quantity.toString();
  cancelButton.style.display = "none";
  deleteButton.style.display = "block";
  buttonEdit.style.display = "block";
  buttonSave.style.display = "none";
  setEnabled(true);
  totalPriceElement.textContent = (
    parseInt(totalPriceElement.innerText) -
    parseInt(totalPriceTd.innerText) +
    oldItem.price
  ).toString();
  totalPriceTd.textContent = oldItem.price.toString();
}
export function onChange(
  event: React.ChangeEvent<HTMLInputElement>,
  price: number,
  index: number
): void {
  const priceToTalTd = document.getElementById(
    "Totalprice" + index
  ) as HTMLElement;
  const totalPriceElement = document.getElementById("Total") as HTMLElement;
  const totalPrice = parseInt(totalPriceElement.innerHTML) | 0;
  const newTotalPrice = (price * event.target.valueAsNumber) | 0;
  totalPriceElement.textContent = (
    totalPrice -
    parseInt(priceToTalTd.innerText) +
    newTotalPrice
  ).toString();
  priceToTalTd.textContent = newTotalPrice.toString();
}
