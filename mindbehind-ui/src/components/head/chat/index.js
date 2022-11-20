import styles from "./styles.module.css"

const ChatHeader = ({title}) => {
    return (<div className={styles.chatHeaderContainer}>
        <div className={styles.headerContainer}><h1 className={styles.chat}>{title}</h1></div>

    </div>)
}

export default ChatHeader;