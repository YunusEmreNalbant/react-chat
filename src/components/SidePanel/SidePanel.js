import React, {useState} from 'react';
import {Popup, Menu, Icon} from "semantic-ui-react";
import CreateChannelForm from "../Channels/CreateChannelForm";
import ChannelList from "../Channels/ChannelList";

const SidePanel = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Menu vertical inverted secondary fixed={"left"} color={"blue"}
                  style={{width: "346px", fontSize: "1.3rem"}}>
                <Menu.Item>

                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>
                        Kanallar
                        <span style={{float: "right"}}>
                        <Popup content={"Yeni Kanal Oluştur"}
                               trigger={<Icon name={"add"} onClick={(event) => handleOpen()}/>}>

                        </Popup>
                    </span>
                    </Menu.Header>
                   <ChannelList />
                </Menu.Item>
            </Menu>

            <CreateChannelForm open={open} onOpen={handleOpen} onClose={handleClose}/>
        </>
    );
};

export default SidePanel;
