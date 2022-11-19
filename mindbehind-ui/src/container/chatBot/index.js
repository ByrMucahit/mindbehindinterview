import axios from "axios";
import {useState} from "react";


function GetLastUsedWords () {

    const [content, setContent] = useState([]);
    const ins = axios.create({
        baseURL: 'http://localhost:8080',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'access-Control-Allow-Origin': "*"
        },
    });

    ins.get('/api/chat/recent-messages').then((response) => {
        console.log('recent messages:', response);
        setContent(response.data);
    });

    return content;
}

export  default  GetLastUsedWords;