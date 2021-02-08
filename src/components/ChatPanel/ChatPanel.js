import React, {useState} from 'react';
import {Segment, Header, Icon, Comment, Form, Input, Button} from "semantic-ui-react";
import {useFirebase} from "react-redux-firebase";
import {useSelector} from "react-redux";
import {useFirebaseConnect,isEmpty,isLoaded} from "react-redux-firebase";
import Message from "./Message";

const ChatPanel = ({currentChannel}) => {
    useFirebaseConnect([
        {
            path: `/messages/${currentChannel.key}`,
            storeAs: "channelMessages"
        }
    ]);
    const firebase = useFirebase();
    const profile = useSelector(state => state.firebase.profile);
    const currentUserUid = useSelector(state => state.firebase.auth.uid);
    const channelMessages = useSelector(state=>state.firebase.ordered.channelMessages)
    const [searchTerm, setSearchTerm] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (content !== "") {
            const message = {
                content,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: {
                    id: currentUserUid,
                    name: profile.name,
                    avatar: profile.avatar
                }
            }

            firebase.push(`messages/${currentChannel.key}`, message)
                .then(() => {
                    setContent("")
                })
        }

    };
    return (
        <>
            {/* Message */}
            <Segment fixed clearing>
                <Header floated={"left"}>
                    <span>
                        <Icon name={"hashtag"}/>
                        {currentChannel.name}
                    </span>
                </Header>
                {/* Search */}
                <Header as={"h3"} floated={"right"}>
                    <Input
                        size={"mini"} icon={"search"} name={"searchTerm"} placeholder={"Mesajlarda ara..."}
                        value={searchTerm} onChange={event => setSearchTerm(event.target.value)}
                    />
                </Header>
            </Segment>

            <Segment style={{position: "fixed", top: 55, bottom: 70, width: "81%"}}>
                <Comment.Group style={{height: "80vh", overflowY: "auto", maxWidth: "100%"}}>
                    {
                        channelMessages && channelMessages.map(({key,value})=> (
                            <Message key={key} message={value}/>
                        ))
                    }
                </Comment.Group>
            </Segment>

            <Segment style={{position: "fixed", bottom: 0, width: "85%", display: "flex",}}>
                <Button icon>
                    <Icon name={"add"}/>
                </Button>
                <Form onSubmit={handleSubmit} style={{flex: 1}}>
                    <Input fluid name={"message"} value={content} labelPosition={"left"}
                           placeholder={`#${currentChannel.name} kanalına mesaj gönder`}
                           onChange={(event) => setContent(event.target.value)}
                    />
                </Form>
            </Segment>


        </>
    );
};

export default ChatPanel;
