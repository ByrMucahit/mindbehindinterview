import React from "react";
import styles from "./style.module.css"
import {Button} from 'antd'
import {AndroidOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css';

const ChatButton = ({name, inpStyle, onClickAttribute, id, style}) => {

    return (<Button className={styles.chatButton} shape={"round"} id={id} style={style}
                    icon={inpStyle ? inpStyle: AndroidOutlined } onClick={onClickAttribute}>{name ? name : "Echo Bot"}</Button>)
}

export default ChatButton;