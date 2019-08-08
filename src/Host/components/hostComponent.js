import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

function hostComponent() {
    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item xs={12}>
                    <Button variant="contained" color="primary">Create host</Button>
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