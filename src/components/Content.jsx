import React, { useState } from 'react';
import './Content.css';

function Content() {
  const [amount, setAmount] = useState('');
  const [discount, setDiscount] = useState('');
  const [calculatedAmount, setCalculatedAmount] = useState(null);

  const calculateDiscount = () => {
    const actualAmount = parseFloat(amount);
    const discountPercentage = parseFloat(discount);

    if (!isNaN(actualAmount) && !isNaN(discountPercentage)) {
      const savedAmount = (actualAmount * discountPercentage) / 100;
      const discountedAmount = actualAmount - savedAmount;
      setCalculatedAmount({
        actual: actualAmount.toFixed(2),
        saved: savedAmount.toFixed(2),
        discounted: discountedAmount.toFixed(2),
      });
    } else {
      setCalculatedAmount(null);
    }
  };

  const clearInputs = () => {
    setAmount('');
    setDiscount('');
    setCalculatedAmount(null);
  };

  return (
    <div className="App">
      <div className='containers'>
      <h1>Discount Calculator</h1><br />
      <label>
        <span>Amount :</span>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <br /><br />
      <label>
        <span> Discount :</span>
        <input type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} />
      </label>
      <br /><br />
      <button onClick={calculateDiscount}>Calculate</button>
      <button onClick={clearInputs}>Clear</button>
      {calculatedAmount && (
        <div className='out'>
          <p>Actual Amount: ₹{calculatedAmount.actual}</p>
          <p>Saved Amount: ₹{calculatedAmount.saved}</p>
          <p>Discounted Amount: ₹{calculatedAmount.discounted}</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default Content;