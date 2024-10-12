import React, { useState } from 'react';
import API from '../utils/api';
import './Checkout.css'; 

const Checkout = () => {
  const [amount, setAmount] = useState('');

  const handlePayment = async () => {
    try {
      const response = await API.post('/payment/create-order', { amount });

      const options = {
        key: 'your-razorpay-key',
        amount: response.data.amount,
        currency: 'INR',
        name: 'Blog Payment',
        description: 'Test transaction',
        order_id: response.data.id,
        handler: function (response) {
          alert(`Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: 'John Doe',
          email: 'john@example.com',
          contact: '9999999999'
        }
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('Payment Error:', error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePayment}>Pay with Razorpay</button>
    </div>
  );
};

export default Checkout;
