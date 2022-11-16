import ChatHeader from "../../head/chat";
import {Col} from "antd";
import styles from './sytle.module.css'

const ChatLayout = () => {

    return (
        <div className={styles.chatContainer}>
            <ChatHeader/>
            <p>Chat Layout</p>
        </div>

    )
}

export default ChatLayout;