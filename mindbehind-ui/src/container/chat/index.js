import styles from './sytle.module.css'
import ChatInput from "../../components/input/chat";
import {Row, Col, Space, Table, Tag} from 'antd'
import {useContext} from "react";
import Time from 'react-time-format'
import {ChatContext} from "../../context/ChatBotProvider";
import HeaderContainer from "../../container/chatheader/index";

const data = [
    {
        key: '1',
        messages: 'I would like to say Hello',
        ellipsis: {
            showTitle: false,
        },
    },
    {
        key: '2',
        messages: "I would like to say Bye !",
        ellipsis: {
            showTitle: false,
        },
    },
    {
        key: '3',
        messages: "I would like to say how are you?",
        ellipsis: {
            showTitle: false,
        },
    },
    {
        key: '4',
        messages: "I would like to say I'm happy",
        ellipsis: {
            showTitle: false,
        },
    }, {
        key: '3',
        messages: "I would like to say I need help",
        ellipsis: {
            showTitle: false,
        },
    },
];


const fakeData = [{
    id: 0,
    sender: 'sender',
    date: '08.42',
    message: 'Hey jack'
},
    {
        id: 1,
        sender: 'receiver',
        date: '08.42',
        message: 'Hey sandy'
    },
    {
        id: 2,
        sender: 'sender',
        date: '08.42',
        message: 'How are you'
    }, {
        id: 0,
        sender: 'sender',
        date: '08.42',
        message: 'Hey jack'
    },
    {
        id: 1,
        sender: 'receiver',
        date: '08.42',
        message: 'Hey sandy'
    },
    {
        id: 2,
        sender: 'sender',
        date: '08.42',
        message: 'How are you'
    }]


const StaticChatBox = () => {
    const {lastUsedContent, sendMessage} = useContext(ChatContext);

    const columns = [
        {
            title: 'Would you like to select one of the words that you used recently ?',
            dataIndex: 'messages',
            key: 'messages',
            render: (text) => <button

                style={{border: 'unset', background: 'unset', color: 'var(--c-offering-messages-content-color)'}}
                onClick={() => sendMessage(text)}>{text}</button>,
        },
    ];

    return (
        <div style={{
            padding: '7px 0px',
            width: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            fontSize: '12px',
            maxWidth: '300px',
            fontWeight: 'bold',
        }}>
            <div style={{
                marginRight: 10,
                marginBottom: 20,
                alignItems: 'left',
                overflow: 'hidden',
                paddingLeft: 3,
            }}>
                <Row style={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: "var(--c-border) solid 1px",
                    borderRadius: 3,
                    background: "var(--c-sender-chat-cloud-background)",

                }}>
                    <Col style={{margin: 5}}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                width: 'max-content',
                                maxWidth: 300,
                                justifyContent: "center",
                                textAlign: 'center'
                            }}
                            className="msg-content"
                        >
                            <div
                                className="chatbox-inner"
                                from={'other'}
                                style={{
                                    textTransform: 'capitalize',
                                    textAlign: 'start'
                                }}
                            >
                                Hey You, I'm echobot. I'm a chatbot. I repeat something you said.
                                Would you like to try it ?
                            </div>
                        </div>
                    </Col>

                    <Col style={{marginLeft: 10, fontSize: 12, marginTop: 3, width: '20%'}}>
                        <Col>
                            <div style={{position: 'static', bottom: 0}}>08.20</div>
                        </Col>
                    </Col>
                </Row>
                <Row style={{padding: "12px 0"}}>
                    <div>
                        <Row style={{
                            display: 'flex',
                            flexDirection: 'column',
                            border: "var(--c-border) solid 1px",
                            borderRadius: 3,
                            background: "var(--c-sender-chat-cloud-background)",

                        }}>
                            {lastUsedContent.length !== 0 ? <Table columns={columns} dataSource={lastUsedContent}
                                                                   pagination={false}/> : null}
                        </Row>
                    </div>

                </Row>
            </div>
        </div>
    )
}

const ChatBox = ({date, from, message}) => {

    return (
        <div style={{
            padding: '7px 0px',
            width: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: from === 'BOT' ? 'flex-start' : 'flex-end',
            fontSize: '12px',
            fontWeight: 'bold',
        }}>
            {from === 'BOT' ? (

                <div style={{
                    marginRight: 3,
                    marginBottom: 20,
                    alignItems: 'left',
                    overflow: 'hidden',

                    paddingLeft: 3,
                }}>
                    <Row style={{
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '250px',
                        minWidth: '50px',
                        border: "var(--c-border) solid 1px",
                        borderRadius: 3,
                        background: "var(--c-sender-chat-cloud-background)",

                    }}>
                        <Col style={{margin: 5}}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: (from = 'flex-start'),
                                    width: 'max-content',
                                    maxWidth: 200,
                                    justifyContent: "center",
                                    textAlign: 'center'
                                }}
                                className="msg-content"
                            >
                                <div
                                    className="chatbox-inner"
                                    from={'other'}
                                    style={{
                                        textTransform: 'capitalize',
                                        textAlign: 'start'
                                    }}
                                >
                                    {message}
                                </div>
                            </div>
                        </Col>

                        <Col style={{marginLeft: 10, fontSize: 12, marginTop: 3, width: '20%'}}>
                            <Col>
                                <div style={{position: 'static', bottom: 0}}><Time value={date} format="hh.mm"/></div>
                            </Col>
                        </Col>
                    </Row>

                </div>
            ) : null}
            {from === 'USER' ? (
                <div style={{
                    marginRight: 3,
                    marginBottom: 20,
                    alignItems: 'left',
                    overflow: 'hidden',
                    paddingLeft: 3,
                }}>
                    <Row style={{
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '250px',
                        minWidth: 50,
                        border: "var(--c-border) solid 1px",
                        borderRadius: 3,
                        background: "var(--c-receiver-chat-cloud-background)",

                    }}>
                        <Col style={{margin: 5}}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: (from = 'flex-start'),
                                    width: 'max-content',
                                    maxWidth: 200,
                                    justifyContent: "center",
                                    textAlign: 'center'
                                }}
                                className="msg-content"
                            >
                                <div
                                    className="chatbox-inner"
                                    from={'other'}
                                    style={{
                                        textTransform: 'capitalize',
                                        textAlign: 'start'
                                    }}
                                >
                                    {message}
                                </div>
                            </div>
                        </Col>

                        <Col style={{marginLeft: 10, fontSize: 12, marginTop: 3, width: '20%'}}>
                            <Col>
                                <div style={{position: 'static', bottom: 0}}><Time value={date} format="hh.mm"/></div>
                            </Col>
                        </Col>
                    </Row>

                </div>
            ) : null}
        </div>
    )

}


const ChatLayout = () => {

    const {content} = useContext(ChatContext);

    return (
        <div className={styles.chatContainer} id={'chatContainer'}>
            <div>
                <HeaderContainer/>
            </div>

            <div className={styles.chatLayout} style={{overflowY: 'scroll', maxHeight: 400, minWidth: 350}}>
                <div>
                    <StaticChatBox/>
                </div>
                {content != null &&
                    content.map(content => {

                        return (
                            <ChatBox date={content.date} from={content.senderType} message={content.message}/>
                        )
                    })}
            </div>
            <div>
                <ChatInput/>
            </div>

        </div>

    )
}


export default ChatLayout;