import Footer from "../components/footer"
import SensorData from "../components/sensorData"
import PieCh from "../components/pieChart"
import Navbar from "../components/navbar"
import WasteDataFirebase from "../components/wasteDataFirebase"
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';


export default function Dashboard() {

    const [wasteData, setWasteData] = useState({});

    useEffect(() => {
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
            const dbRef = firebase.database().ref();

            dbRef.on('value', (snapshot) => {
                setWasteData(snapshot.val());
            });
        };

        fetchData();

        return () => {
            firebase.database().ref().off('value');
        };
    }, []);

    const sampleData = [
        {
            _id: '1',
            level1: '60',
            level2: '30',
            level3: '40',
            level4: '20',
            location: 'Baner',
            lastActive: '17'

        },
        {
            _id: '2',
            level1: '70',
            level2: '30',
            level3: '40',
            level4: '10',
            location: 'Wakad',
            lastActive: '18'
        },
        {
            _id: '3',
            level1: '30',
            level2: '30',
            level3: '40',
            level4: '20',
            location: 'Warje',
            lastActive: '2'
        },
        {
            _id: '4',
            level1: '20',
            level2: '30',
            level3: '40',
            level4: '10',
            location: 'Katraj',
            lastActive: '14'
        },
        {
            _id: '5',
            level1: '30',
            level2: '30',
            level3: '10',
            level4: '10',
            location: 'Deccan',
            lastActive: '19'
        },
        {
            _id: '6',
            level1: '20',
            level2: '30',
            level3: '70',
            level4: '50',
            location: 'Pimpri',
            lastActive: '8'

        },
        {
            _id: '7',
            level1: '80',
            level2: '20',
            level3: '60',
            level4: '40',
            location: 'Ravet',
            lastActive: '1'
        },
        {
            _id: '8',
            level1: '50',
            level2: '50',
            level3: '20',
            level4: '10',
            location: 'Hadapsar',
            lastActive: '12'
        },
        {
            _id: '9',
            level1: '10',
            level2: '10',
            level3: '70',
            level4: '20',
            location: 'Karadi',
            lastActive: '7'
        },
        {
            _id: '10',
            level1: '90',
            level2: '50',
            level3: '20',
            level4: '30',
            location: 'Kothrud',
            lastActive: '11'
        },
    ]

    console.log('dashboard', sampleData)



    return (
        <div>
            < Navbar />
            {/* < TotalStats /> */}
            < PieCh />
            < WasteDataFirebase data={wasteData} />
            < SensorData data={sampleData} />
            {/* < ShortestPathComponent /> */}
            {/* <WasteDataFetcher /> */}
            <div className="text-center mb-32">
                <a href="/map" className="text-lg font-semibold leading-6 bg-emerald-700 px-6 py-4     rounded-full text-white">
                    Find optimal path for waste collection<span aria-hidden="true"></span>
                </a>
            </div>


            < Footer />
        </div>
    )
}