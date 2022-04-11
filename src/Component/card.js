import React, { useEffect } from "react";
import { Button, Card } from "antd";

const CardData = ({
    item,
    setDetail = () => {},
    isShow,
    setShow = () => {},
}) => {
    const showModal = (item) => {
        setShow(!isShow);
        setDetail(item);
    };

    return (
        <div>
            <div style={{ display: "block" }}>
                <div>
                    <Card
                        style={{
                            margin: "30px",
                            cursor: "pointer",
                        }}
                        title={item.title}
                        onClick={() => showModal(item)}
                    >
                        <p>Description: {item.description}</p>
                    </Card>
                </div>
            </div>
        </div>
    );
};
export default CardData;
