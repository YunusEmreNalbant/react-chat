import React from 'react';
import {Button, Grid} from 'semantic-ui-react'
import SidePanel from "./components/SidePanel/SidePanel";

const App = () => {
    return (
        <Grid columns={2} style={{background:"#eee",height:"110vh"}}>
            <Grid.Column width={"3"} style={{background:"#000"}}>
                <SidePanel/>
            </Grid.Column>
            <Grid.Column width={"13"} style={{background:"#eee"}}>

            </Grid.Column>
        </Grid>
    );
};

export default App;
