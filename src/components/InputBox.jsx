import { useState, useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  currencyArr = [],
  onCurrencyChange,
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisabled = false,
  classname = "",
}) {
  // ! This will generate a random id -> but do not use it for generating keys
  const amountId = useId();
  return (
    <div className="bg-white p-3 rounded-lg text-sm flex ${classname}">
      <div className="w-1/2">
        <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          type="number"
          placeholder="Amount"
          id={amountId}
          className="outline-none w-full bg-transparent py-1.5"
          disabled={amountDisable}
          value={amount}
          onChange={function (val) {
            return onAmountChange && onAmountChange(Number(val.target.value));
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <div className="text-black/40 mb-2 w-full">Currency Type</div>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          disabled={currencyDisabled}
          onChange={function (val) {
            return (
              onCurrencyChange && onCurrencyChange(String(val.target.value))
            );
          }}
        >
          {currencyArr.map((currency) => {
            return (
              <option key={currency} value={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
