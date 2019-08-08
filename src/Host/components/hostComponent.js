import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import firebase from 'firebase';

function hostComponent() {
    const createHost = () => {
        const db = firebase.firestore();

        db.settings({
            timestampsInSnapshots: true
        });

        const userRef = db.collection("games").add({
            fullname: "fullName",
            email: "email"
        });
    }

    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item xs={12}>
                    <TextField
                        id="name"
                        label="Name"
                        placeholder="Enter your name, please"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={createHost}>Create host</Button>
                </Grid>
                <Grid item xs={12}>
                    or
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="hostId"
                        label="Host ID"
                        placeholder="Host ID"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary">Join existing host</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default hostComponent;