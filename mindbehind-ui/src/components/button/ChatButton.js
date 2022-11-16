import React from "react";
import styles from "./style.module.css"
import {Button} from 'antd'
import {MessageOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css';

const ChatButton = () => {

    return(<Button className={styles.chatButton} shape={"round"} icon={<MessageOutlined />}>Support</Button>)
}

export default ChatButton;