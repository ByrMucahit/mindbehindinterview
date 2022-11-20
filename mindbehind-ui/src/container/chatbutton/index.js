import ChatButton from "../../components/button/ChatButton";
import {AndroidOutlined} from '@ant-design/icons'

const ButtonContainer = () => {
    function findClick() {
        let element = document.getElementById('chatContainer');
        element.style.display = 'block';
        let elementInput = document.getElementById('echo');
        elementInput.style.display = 'none';

    }

    return <ChatButton style={{background: 'var(--c-button-background)', fontWeight: 'bold'}} id={'echo'}
                       name={'EchoBot'} inpStyle={<AndroidOutlined/>} onClickAttribute={() => findClick()}/>
}

export default ButtonContainer;