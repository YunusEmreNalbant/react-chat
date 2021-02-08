import React, {useState, useEffect} from 'react';
import {useFirebaseConnect, isLoaded, isEmpty} from "react-redux-firebase";
import {useSelector, useDispatch} from "react-redux";
import {Menu} from "semantic-ui-react";
import {setCurrentChannel} from "../store/actions/channel";

const ChannelList = () => {
    useFirebaseConnect([{path: "channels"}]);
    const channels = useSelector((state) => state.firebase.ordered.channels);
    const dispatch = useDispatch();
    const currentChannel = useSelector(state => state.channels.currentChannel);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (!mounted && !isEmpty(channels)) {
            const {key, value} = channels[0];
            setActiveChannel({key,...value});
            setMounted(true)
        }
    }, []);

    const setActiveChannel = (channel) => {
        dispatch(setCurrentChannel(channel));
    };

    if (!isLoaded(channels)) {
        return "Kanallar yükleniyor...";
    }

    if (isEmpty(channels)) {
        return "Kanal Yok ";
    }

    return (
        <Menu.Menu>
            {
                channels.map(({key, value}) => (
                    <Menu.Item
                        key={key}
                        name={value?.name}
                        as={"a"}
                        icon={"hashtag"}
                        active={currentChannel?.key === key}
                        onClick={() => setActiveChannel({key, ...value})}

                    />
                ))
            }
        </Menu.Menu>
    );
};

export default ChannelList;
