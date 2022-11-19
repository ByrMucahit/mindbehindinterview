import ChatButton from "../../button/ChatButton";
import {Row, Col} from "antd";
import ChatLayout from "../../../container/chat";
const Layout = () => {
    return (<div>
        <Col>
            <Row>
                <ChatLayout/>
            </Row>
            <Row>
                <ChatButton/>
            </Row>

        </Col>



    </div>)
}

export default Layout;