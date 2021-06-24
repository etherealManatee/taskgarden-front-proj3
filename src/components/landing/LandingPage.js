import React, {useState} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import forestImg from "../../assets/img/nP5HPw4.jpeg"
import Login from "./Login";
import Register from "./Register";

function LandingPage({auth, setAuth, setAdmin, setUser}) {
    const [loginShow, setLoginShow] = useState(false);
    const [registerShow, setRegisterShow] = useState(false);
    const handleLoginShow = () => setLoginShow(true);
    const handleRegisterShow = () => setRegisterShow(true);

    const bgImgStyle = {

        height: "100vh",
        position: "absolute",
        objectFit: "cover",
        top: "56px",
        left: 0,
        zIndex: -1
    }

    const loginStyle = {
        position: "sticky",
        top: "50%",
        left: "60%",
        width: "400px",
        backgroundColor: "rgba(54, 150, 148,1)"
    }

    const headerStyle={

    }

    return (
        <div>
            <Image src={forestImg} style={bgImgStyle} fluid id="landingForest"/>
            <Row className="flex-grow-1">
                <Col className="bg-dark align-content-center">
                    <Container>
                        <Col className="text-white h1">
                            Task Garden
                        </Col>
                    </Container>
                </Col>
            </Row>
                <div style={{height: "100vh"}}>
                    <Container style={loginStyle} className={"m-3"}>
                        <Row className="justify-content-center">
                            Have an Account? Sign in!
                        </Row>
                        <Row className="justify-content-center">
                            <Button variant="primary" className="landingButton" onClick={handleLoginShow}>
                                Sign in
                            </Button>
                        </Row>
                        <Row className="justify-content-center">
                            If not, register here!
                        </Row>
                        <Row className="justify-content-center">
                            <Button variant="primary" className="landingButton" onClick={handleRegisterShow}>
                                Register
                            </Button>
                        </Row>
                    </Container>
                </div>

            <Login show={loginShow} setShow={setLoginShow} setAuth={setAuth} setAdmin={setAdmin}/>
            <Register show={registerShow} setShow={setRegisterShow} setAuth={setAuth}/>
        </div>

    );
}

export default LandingPage;
