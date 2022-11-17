import {Input} from 'antd'
import {HeartOutlined, PaperClipOutlined, CompassOutlined, SendOutlined} from '@ant-design/icons'
import styles from './style.module.css'

const ChatInput = () => {

    return(
        <div className={styles.inputContainer}>
            <div className={styles.inputField}>
                <Input placeholder="Please text your message" className={styles.inputComponent}/>
                <SendOutlined />
            </div>

            <div className={styles.iconContainer}>
                <HeartOutlined />
                <PaperClipOutlined />
                <CompassOutlined />
            </div>
        </div>
    )
}

export  default ChatInput;