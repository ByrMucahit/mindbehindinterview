import React, {useState, createContext, useEffect} from "react";
import axios from "axios";


export const ChatContext = createContext("unknown");


const ChatProvider = (props) => {
    const [content, setContent] = useState([]);
    const [lastUsedContent, setLastUsedContent] = useState([]);
    const [regularRequestFlag, setRegularRequestFlag ] = useState(false);

    useEffect(()=> {

        if(regularRequestFlag === false) {
            getMessages();

            const ins = axios.create({
                baseURL: 'http://localhost:8080',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'access-Control-Allow-Origin': "*"
                },
            });

            ins.get('/api/chat/recent-messages').then((response) => {
                setLastUsedContent(response.data);
            });
        }

        setRegularRequestFlag(true);

    }, [regularRequestFlag]);

    const sendMessage = (value) => {
        console.log('send message value: ', value);
        const formData = new FormData();
        formData.append("message", value);

        PostRequest(formData);
    }

    const PostRequest = (data) => {
        console.log('formdata: ', data);
        axios.post("http://localhost:8080/api/chat/save", data, {headers: {Accept: "application/json"}}).then(function (response) {
            console.log("response", response);
            if(response.status === 200 || response.status === 201) {
                getMessages();
            }
        })
    }

    function getMessages() {
        const ins = axios.create({
            baseURL: 'http://localhost:8080',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'access-Control-Allow-Origin': "*"
            },
        });

        ins.get('/api/chat').then((response) => {
            setContent(response.data);
        });
    }
    return (
        <ChatContext.Provider value={{content, getMessages, sendMessage, lastUsedContent}}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatProvider;