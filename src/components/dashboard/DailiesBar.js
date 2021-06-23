import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import axios from "axios";

function DailiesBar({daily}) {
    let [buttonState, setButtonState] = useState(false)
    let containerStyle = {
        border: "5px solid rgba(35, 108, 56, 1)",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)"
    }
    let doneBtnStyle = {
        border: "3px solid rgba(50, 136, 29, 1)",
        backgroundColor: "rgba(78, 201, 47, 1)",
        borderRadius: "10px",
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)"
    }
    let notDoneBtnStyle = {
        border: "3px solid rgba(68,9,9, 1)",
        backgroundColor: "rgb(208,30,30)",
        borderRadius: "10px",
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)"
    }

    useEffect(() => {
        setButtonState(daily["isArchived"])
    },[])

    async function changeStateOfDaily() {
        let state = await axios.post(`/api/tasks/dailies/${daily._id}`, daily, {
            headers: {
                authorization: `Bearer ${localStorage.token}`
            }
        })
        setButtonState(state.data.isArchived)
    }

    function RenderButton(){

        if(buttonState){
            return(
                <Button onClick={changeStateOfDaily} style={doneBtnStyle}>
                    "Done"
                </Button>
            )
        }else{
            return(
                <Button onClick={changeStateOfDaily} style={notDoneBtnStyle}>
                    Not Done
                </Button>
            )
        }


    }

    return (
        <Container style={containerStyle} className="mt-3" >
            <Row className="align-items-center">
                <Col md={9}>
                    Dailies
                    <br/>
                    {daily.name}
                </Col>
                <Col md={3}>
                    <RenderButton />
                </Col>
            </Row>
        </Container>
    );
}

export default DailiesBar;