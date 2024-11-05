import React from 'react';
import BillingForm from '../components/BillingForm';

function Payment() {
  return (
    <div className="container mx-auto px-4">
        <div className="w-full p-[50px] text-center">
            <h1 className="text-3xl font-bold mb-4">Hello Rika Kamila!</h1>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">Customer Information</h2>
          <BillingForm/>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Your Order</h2>
          {/* ... isi tabel produk dan total */}
        </div>
      </div>
    </div>
  );
}

export default Payment;