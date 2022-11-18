import ChatHeader from "../../head/chat";

import styles from './sytle.module.css'
import ChatInput from "../../input/chat";
import {Row, Col} from 'antd'

const fakeData = [{
    id: 0,
    sender: 'sender',
    date: '11/12/2022',
    message: 'Hey jack'
},
    {
        id: 1,
        sender: 'receiver',
        date: '11/12/2022',
        message: 'Hey sandy'
    },
    {
        id: 2,
        sender: 'sender',
        date: '11/12/2022',
        message: 'How are you'
    }]

const ChatBox = ({date, from, message}) => {

    return (
        <div style={{
            padding: '7px 0px',
            width: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: from === 'sender' ? 'flex-end' : 'flex-start'
        }}>
            {from === 'receiver' ? (
                <div style={{
                    marginRight: 10,
                    marginBottom: 20,
                    width: 480,
                    alignItems: 'left',
                    overflow: 'hidden',
                }}>
                    <Row style={{display: 'flex'}}>

                        <Col style={{width: '80%', display: 'block'}}>
                            <Col style={{marginLeft: 10, fontSize: 12, marginTop: 3, width: '20%'}}>
                                <Col>
                                    <p>{date}</p>
                                </Col>
                            </Col>
                            <Col>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: (from = 'flex-start'),
                                        width: 'auto',
                                        maxWidth: '70%',
                                    }}
                                    className="msg-content"
                                >
                                    <div
                                        className="chatbox-inner"
                                        from={'other'}
                                        style={{
                                            marginTop: 10,
                                            textTransform: 'capitalize',
                                        }}
                                    >
                                        {message}
                                    </div>
                                </div>
                            </Col>
                        </Col>
                    </Row>

                </div>
            ) :null}
            {from === 'sender' ? (
                <div
                    style={{
                        marginBottom: 20,
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'end',
                        alignItems: 'end',
                        borderRadius: 5,
                        overflow: 'hidden',
                    }}
                >
                    <Row style={{ display: 'flex', width: '60%', justifyContent: 'end' }}>
                        <Col style={{ width: '80%', alignItems: 'center' }}>
                            <Col
                                style={{
                                    display: 'flex',
                                    width: '25rem',
                                    justifyContent: 'end',
                                    alignItems: 'end',
                                    paddingRight: 15,
                                }}
                            >
                                <Col
                                    style={{
                                        fontSize: 12,
                                        marginTop: 2,
                                        width: '20%',
                                        textAlign: 'end',
                                        paddingRight: 10,
                                    }}
                                >
                                    <p>{date}</p>
                                </Col>
                            </Col>
                            <Col>
                                <div
                                    style={{
                                        display: 'flex',
                                        width: 'auto',
                                        maxWidth: '100%',
                                        justifyContent: 'end',
                                    }}
                                    className="msg-content"
                                >
                                    <div
                                        className="chatbox-inner"

                                        style={{ marginTop: 10, textTransform: 'capitalize' }}
                                    >
                                        {message}
                                    </div>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </div>
            ) : null}
        </div>
    )

}

const ChatLayout = () => {

    return (
        <div className={styles.chatContainer}>
            <ChatHeader/>
            <div className={styles.chatLayout}>
                {fakeData != null &&
                    fakeData.map(content => {
                        return (
                            <ChatBox date={content.date} from={content.sender}  message={content.message} />
                        )
                    })}
            </div>
            <ChatInput/>
        </div>

    )
}

export default ChatLayout;