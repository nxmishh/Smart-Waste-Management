import React, { useState } from 'react';
import Footer from './footer';
import Navbar from './navbar';

const CheckoutForm = () => {
    const [billingAddress, setBillingAddress] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('Credit Card');
    const [orderSummary, setOrderSummary] = useState({ totalAmount: 0, totalQuantity: 0 });

    const handleBillingAddressChange = (e) => {
        setBillingAddress(e.target.value);
    };

    const handlePinCodeChange = (e) => {
        setPinCode(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const calculateOrderSummary = () => {
        // Example: Calculate total amount and quantity based on products in the cart
        const totalAmount = 100; // Example total amount
        const totalQuantity = 5; // Example total quantity
        setOrderSummary({ totalAmount, totalQuantity });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form logic goes here
    };

    return (
        <>
        < Navbar />
        <div className="max-w-4xl mt-32 mb-8 mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2">
                    <h2 className="text-lg font-semibold mb-4 ">Billing Details</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="billingAddress" className="block mb-1">Billing Address:</label>
                            <input type="text" id="billingAddress" value={billingAddress} onChange={handleBillingAddressChange} className="w-full p-2 border rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="pinCode" className="block mb-1">Pin Code:</label>
                            <input type="text" id="pinCode" value={pinCode} onChange={handlePinCodeChange} className="w-full p-2 border rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-1">Email Address:</label>
                            <input type="email" id="email" value={email} onChange={handleEmailChange} className="w-full p-2 border rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phoneNumber" className="block mb-1">Phone Number:</label>
                            <input type="tel" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} className="w-full p-2 border rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="paymentMethod" className="block mb-1">Payment Method:</label>
                            <select id="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange} className="w-full p-2 border rounded-md">
                                <option value="Credit Card">Credit Card</option>
                                <option value="Debit Card">Debit Card</option>
                                <option value="UPI">UPI</option>
                            </select>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Place Order</button>
                    </form>
                </div>
                <div className="w-full lg:w-1/2">
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                        <p>Total Amount: {orderSummary.totalAmount}</p>
                        <p>Total Quantity: {orderSummary.totalQuantity}</p>
                        {/* Add code here to display quantity and price for each product */}
                    </div>
                </div>
            </div>
        </div>
        < Footer />
        </>
    );
};

export default CheckoutForm;