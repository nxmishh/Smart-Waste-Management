import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const WasteDataFetcher = () => {
    const [wasteData, setWasteData] = useState({});

    useEffect(() => {
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyDIkcr6RoB6cIhVtvJAJv9cs24QROmtkMQ",
            authDomain: "esp32wastemanagement.firebaseapp.com",
            databaseURL: "https://esp32wastemanagement-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "esp32wastemanagement",
            storageBucket: "esp32wastemanagement.appspot.com",
            messagingSenderId: "588679171808",
            appId: "1:588679171808:web:fef60d98d52be18df0ca85",
            measurementId: "G-F7ZRMRH13T"
        };

        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        const fetchData = async () => {
            const dbRef = firebase.database().ref(); // Reference to the root of the database

            dbRef.on('value', (snapshot) => {
                setWasteData(snapshot.val());
            });
        };

        fetchData();

        return () => {
            // Clean up the listener when the component unmounts
            firebase.database().ref().off('value');
        };
    }, []);

    return (
        <div className="container">
            <h1>Waste Management Data</h1>
            {Object.keys(wasteData).map((deviceId) => (
                <div className="device" key={deviceId}>
                    <h2>Device ID: {deviceId}</h2>
                    <p>Dry Waste: {wasteData[deviceId]?.Dry ?? <span className="loading">Loading...</span>}</p>
                    <p>Wet Waste: {wasteData[deviceId]?.Wet ?? <span className="loading">Loading...</span>}</p>
                    <p>Plastic Waste: {wasteData[deviceId]?.Plastic ?? <span className="loading">Loading...</span>}</p>
                    <p>Metal Waste: {wasteData[deviceId]?.Metal ?? <span className="loading">Loading...</span>}</p>
                </div>
            ))}
        </div>
    );
};

export default WasteDataFetcher;
