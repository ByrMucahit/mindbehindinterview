
import {Row, Col} from "antd";
import ChatLayout from "../../../container/chat";
import ButtonContainer from "../../../container/chatbutton/index"
const Layout = () => {
    return (<div>
        <Col>
            <Row>
                <ChatLayout/>
            </Row>
            <Row>
                <ButtonContainer />
            </Row>

        </Col>



    </div>)
}

export default Layout;