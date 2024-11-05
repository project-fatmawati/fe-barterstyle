import React from 'react';
// import React, { useState } from 'react';

function BillingForm() {
    // const [paymentMethod, setPaymentMethod] = useState('');
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Detail Billing</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text" 
            id="username"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        {/* Tambahkan input untuk email, nomor telepon, dan alamat dengan struktur yang sama */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Nomor Telepon
          </label>
          <input
            type="tel"
            id="phone" 

            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Alamat
          </label>
          <textarea
            id="address"
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-medium text-white hover:bg-blue-700"
        >
          Simpan
        </button>
      </form>
      <div>
        <br/>
        


<div className="border p-5 rounded">
  <h3 className="text-2xl font-bold mb-2 p-3">Metode Pembayaran</h3>
  <div className="space-y-4">
    <div className="flex items-center border p-2">
      <input
        type="radio"
        id="disneyGiftCard"
        name="paymentMethod"
        value="disneyGiftCard"
        // checked={paymentMethod === 'disneyGiftCard'}
        // onChange={(e) => setPaymentMethod(e.target.value)}
      />
      <label htmlFor="disneyGiftCard" className="ml-2">
        Direct Bank Transfer
        <img src="/path/ke/gambar/disney-gift-card.png" alt="Disney Gift Card" className="h-6 w-6 ml-2" />
      </label>
    </div>
    {/* Tambahkan opsi pembayaran lainnya dengan struktur yang sama */}
    <div className="flex items-center border p-2">
      <input
        type="radio"
        id="creditDebitCard"
        name="paymentMethod"
        value="creditDebitCard"
        // checked={paymentMethod === 'creditDebitCard'}
        // onChange={(e) => setPaymentMethod(e.target.value)}
      />
      <label htmlFor="creditDebitCard" className="ml-2">
        Credit Card
        <img src="/path/ke/gambar/kartu-kredit.png" alt="Kartu Kredit" className="h-6 w-6 ml-2" />
      </label>
    </div>
    <div className="flex items-center border p-2">
      <input
        type="radio"
        id="creditDebitCard"
        name="paymentMethod"
        value="creditDebitCard"
        // checked={paymentMethod === 'creditDebitCard'}
        // onChange={(e) => setPaymentMethod(e.target.value)}
      />
      <label htmlFor="creditDebitCard" className="ml-2">
        Paypal
        <img src="/path/ke/gambar/kartu-kredit.png" alt="Kartu Kredit" className="h-6 w-6 ml-2" />
      </label>
    </div>

    </div>


</div>
</div>
    </div>
  );
}

export default BillingForm;