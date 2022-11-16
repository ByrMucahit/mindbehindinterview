import styles from "./styles.module.css"
import {CloseOutlined, CaretDownOutlined} from '@ant-design/icons'

const ChatHeader = () => {
    return (<div className={styles.chatHeaderContainer}>
        <div className={styles.headerContainer}><h1 className={styles.chat}>Live Support</h1></div>
        <div className={styles.iconContainer}>
            <div><CaretDownOutlined/></div>
            <div><CloseOutlined/></div>
        </div>
    </div>)
}

export default ChatHeader;