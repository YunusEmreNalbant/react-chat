import React from 'react';
import {Button, Grid} from 'semantic-ui-react'
import SidePanel from "./components/SidePanel/SidePanel";
import ChatPanel from "./components/ChatPanel/ChatPanel";
import {useSelector} from "react-redux";
const App = () => {
    const currentChannel = useSelector(state=> state.channels.currentChannel)
    return (
        <Grid style={{background:"#eee"}}>
            <Grid.Column  width={"3"} >
                <SidePanel/>
            </Grid.Column>
            <Grid.Column width={"13"} >
                {currentChannel && <ChatPanel currentChannel={currentChannel} />}
            </Grid.Column>
        </Grid>
    );
};

export default App;
