"use strict";
const form = document.querySelector("form");
const billAmount = document.querySelector("#billAmount");
const numberOfPeople = document.querySelector("#numberOfPeople");
const displayTipAmount = document.querySelector("#displayTipAmount");
const displayTotalAmount = document.querySelector("#displayTotalAmount");
const tipPercentageID = document.querySelector("#tipPercentage");
const resetbtn = document.querySelector("#reset");
const zeroDisplay = document.querySelector("#zero");
const radios = document.querySelectorAll("input[name='Tip']");

let getAmountofBill, getNumberofPeople, getTipPercentage;
let tipAmountPerPerson = 0;
let totalAmountPerPerson = 0;
let gettrue = false;
let resetDisabled = false;

// event listener to get the value of raido buttons
radios.forEach((element) => {
  element.addEventListener("click", () => {
    element.value;
    getTipPercentage = element.value;

    if (!gettrue) {
      tipPercentageID.value = "";
    }
    updatingValue();
  });
});

// event listener to get the value of input of tip
tipPercentageID.addEventListener("keyup", () => {
  getTipPercentage = tipPercentageID.value;
  if (getTipPercentage < 0) {
    gettrue = true;
  }
  updatingValue();
});

// event listener to get the value of input of total bill amount
billAmount.addEventListener("keyup", function () {
  getAmountofBill = this.value;
  updatingValue();
});

// event listener to get the value of input of no of people
numberOfPeople.addEventListener("keyup", function () {
  getNumberofPeople = this.value;

  updatingValue();
});

// function of upadte the value in total tip/person and total bill/person
function updatingValue() {
  if (getAmountofBill > 0 && getNumberofPeople > 0 && getTipPercentage > 0) {
    tipAmountPerPerson =
      Math.round(
        ((getAmountofBill * getTipPercentage) / 100 / getNumberofPeople) * 100
      ) / 100;

    totalAmountPerPerson =
      Math.round((getAmountofBill / getNumberofPeople) * 100) / 100 +
      tipAmountPerPerson;

    displayTotalAmount.innerText = `$${totalAmountPerPerson}`;
    displayTipAmount.innerText = `$${tipAmountPerPerson}`;
    numberOfPeople.classList.remove("border-red");
    zeroDisplay.classList.add("db-none");
    resetbtn.style.backgroundColor = "var(--Strong-cyan)";
    resetbtn.disabled = false;
  } else if (
    getAmountofBill > 0 &&
    getNumberofPeople === "" &&
    getTipPercentage > 0
  ) {
    numberOfPeople.classList.add("border-red");
    zeroDisplay.classList.remove("db-none");
    displayTotalAmount.innerText = `$0.00`;
    displayTipAmount.innerText = `$0.00`;
    console.log("ereoe");
  }
}

//Reset all the value
function defaultValue() {
  const defaultradio = document.querySelector("input[value='10']");
  displayTotalAmount.innerText = "$0.00";
  displayTipAmount.innerText = "$0.00";
  zeroDisplay.classList.add("db-none");
  numberOfPeople.style.borderColor = "var(--Very-light-grayish-cyan)";
  resetbtn.style.backgroundColor = "var(--Dark-grayish-cyan)";
  getAmountofBill = 0;
  getNumberofPeople = 0;
  getTipPercentage = 10;
  numberOfPeople.value = "";
  billAmount.value = "";
  tipPercentageID.value = "";
  resetbtn.disabled = true;
  defaultradio.checked = true;
}

// intializing the default value
defaultValue();

// event listener for default value
resetbtn.addEventListener("click", defaultValue);