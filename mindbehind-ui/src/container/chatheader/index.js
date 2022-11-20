import styles from "./style.module.css"
import {CloseOutlined, CaretDownOutlined} from '@ant-design/icons'
import IconComponent from "../../components/icon";
import ChatHeader from "../../components/head/chat";

const HeaderContainer = ({}) => {

    function clickOnCloseIcon() {
        let element = document.getElementById('chatContainer');
        element.style.display = 'none';

        let elementButton = document.getElementById('echo');
        elementButton.style.display = "block";
    }

    function clickOnOptionIcon() {
        console.log('Hello from option icon');
    }


    return (<div className={styles.chatHeaderContainer}>
        <ChatHeader title={'Echo Bot'}/>

        <div className={styles.iconContainer}>
            <IconComponent componentIcon={<CaretDownOutlined onClick={() => clickOnOptionIcon()}/>}/>
            <IconComponent componentIcon={<CloseOutlined onClick={() => clickOnCloseIcon()}/>}/>
        </div>
    </div>)
}

export default HeaderContainer;