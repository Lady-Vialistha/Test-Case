import "./App.css";
import React, { useState, useEffect } from "react";
import CardData from "./Component/card";
import PopUp from "./Component/modal";
import axios from "axios";
import { Row, Col } from "antd";
const App = () => {
    const [isShow, setShow] = useState(false);
    const [detail, setDetail] = React.useState({});
    const [data, setData] = React.useState([]);

    useEffect(() => {
        axios
            .get(
                "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list"
            )
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className="App">
            <Row>
                <Col sm={6}>
                    <h1>To Do</h1>
                    {data.length > 0 &&
                        data
                            .filter((data) => data.status === 0)
                            .map((item, key) => {
                                return (
                                    <div key={key}>
                                        <CardData
                                            setShow={setShow}
                                            item={item}
                                            setDetail={setDetail}
                                        />
                                    </div>
                                );
                            })}
                </Col>
                <Col sm={6}>
                    <h1>Done</h1>
                    {data.length > 0 &&
                        data
                            .filter((data) => data.status === 1)
                            .map((item, key) => {
                                return (
                                    <div key={key}>
                                        <CardData
                                            setShow={setShow}
                                            item={item}
                                            setDetail={setDetail}
                                        />
                                    </div>
                                );
                            })}
                </Col>
            </Row>

            <PopUp
                isShow={isShow}
                setShow={setShow}
                detail={detail}
                setDetail={setDetail}
            />
        </div>
    );
};

export default App;
