import { useState } from "react";
import useData from "./hooks/useData.js";
import { InputBox } from "./components/InputBox";

function App() {
  // First we define the states
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Lets get the conversion ratio first
  const data = useData(from);
  let options = [];
  {
    for (let k in data) {
      options.push(k);
    }
  }
  console.log(options);

  // Lets define a swapping function
  function swapValues() {
    setTo(from);
    setFrom(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  // Lets evaluate the value of the conversion
  function evaluateValue() {
    return setConvertedAmount(amount * Number(data[to]));
  }

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <div className="w-full mb-1">
              <InputBox
                label="From"
                currency={from}
                currencyArr={options}
                amount={amount}
                onCurrencyChange={(val) => setFrom(val)}
                onAmountChange={(val) => setAmount(val)}
                selectCurrency={from}
              ></InputBox>
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swapValues}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currency={to}
                currencyArr={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable={true}
              />
            </div>
            <button
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={evaluateValue}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
