import {Input} from 'antd'
import {HeartOutlined, PaperClipOutlined, CompassOutlined, SendOutlined} from '@ant-design/icons'
import styles from './style.module.css'
import {useState, useContext} from "react";
import axios from "axios";
import {ChatContext} from "../../../context/ChatBotProvider";
import cn from 'classnames'

const PostRequest = (data) => {
    console.log('formdata: ', data);
    axios.post("http://localhost:8080/api/chat/save", data, {headers: {Accept: "application/json"}}).then(function (response) {
        console.log("response", response);
    })
}

const ChatInput = ({className}) => {

    const {sendMessage} = useContext(ChatContext);
    const [value, setValue] = useState("");

    return (
        <div className={cn([styles.inputContainer, className])}>
            <div className={styles.inputField}>
                <Input placeholder="Please text your message" className={styles.inputComponent}
                       id={'chat'}
                       value={value}
                       onChange={(val) => setValue(val.target.value)}/>
                <div className={styles.sendIconContainer}>
                    <button onClick={() => {
                        if(value !== "") {
                            sendMessage(value);
                            setValue('');
                        }
                    }}>
                        <SendOutlined/>
                    </button>

                </div>

            </div>

            <div className={styles.iconContainer}>
                <HeartOutlined/>
                <PaperClipOutlined/>
                <CompassOutlined/>

            </div>
        </div>
    )
}

export default ChatInput;