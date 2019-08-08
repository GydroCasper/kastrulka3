import React, { useEffect } from "react";
import firebase from 'firebase';

function Firebase(props) {
    useEffect(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyCrA1OWR874c8v6SpmXakth2cmQf0pNlXE",
            authDomain: "kastrulka-992a9.firebaseapp.com",
            databaseURL: "https://kastrulka-992a9.firebaseio.com",
            projectId: "kastrulka-992a9",
            storageBucket: "kastrulka-992a9.appspot.com",
            messagingSenderId: "738413015557",
            appId: "1:738413015557:web:03554f38703df10f"
        };

        firebase.initializeApp(firebaseConfig);
    }, []);

    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
}

export default Firebase;

