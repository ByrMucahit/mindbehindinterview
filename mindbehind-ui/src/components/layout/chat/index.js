import ChatHeader from "../../head/chat";
import {Col} from "antd";
import styles from './sytle.module.css'
import ChatInput from "../../input/chat";

const ChatLayout = () => {

    return (
        <div className={styles.chatContainer}>
            <ChatHeader/>
            <p>Chat Layout</p>
            <ChatInput/>
        </div>

    )
}

export default ChatLayout;