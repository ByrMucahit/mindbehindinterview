import {Input} from 'antd'
import {HeartOutlined, PaperClipOutlined, CompassOutlined, SendOutlined} from '@ant-design/icons'
import styles from './style.module.css'
import {useState} from "react";



const ChatInput = () => {

    const [content, setContent] = useState();
    const [value, setValue] = useState("");

    const sendMessage = () => {
        console.log('Hello World' + value.target.value);
    }

    return (
        <div className={styles.inputContainer}>
            <div className={styles.inputField}>
                <Input placeholder="Please text your message" className={styles.inputComponent}
                       onChange={(val) =>  setValue(val)}/>
                <div className={styles.sendIconContainer}>
                    <button onClick={sendMessage}>
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