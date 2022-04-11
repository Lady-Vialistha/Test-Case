import React, { useEffect } from "react";
import { Modal, Input, Form, Button } from "antd";
import "antd/dist/antd.css";

const PopUp = ({
    setDetail = () => {},
    detail,
    isShow,
    setShow = () => {},
}) => {
    const handleOk = () => {
        setShow(false);
    };
    const handleCancel = () => {
        setShow(false);
    };
    const toggle = () => {
        setShow(!isShow);
    };
    const update = () => {
        if (detail.status == 0) {
            detail.status = 1;
            setDetail(detail);
        } else {
            detail.status = 0;
            setDetail(detail);
        }
        setShow(false);
    };
    return (
        <Modal
            title="Detail"
            visible={isShow}
            onOk={handleOk}
            onCancel={handleCancel}
            toggle={toggle}
        >
            <div style={{ display: "block" }}>
                <h3>
                    {detail.id}
                    {"."} {detail.title}
                </h3>
                <p>Status : {detail.status}</p>
                <p>Description : {detail.description}</p>
                <Button onClick={update}>Update</Button>
            </div>
        </Modal>
    );
};
export default PopUp;
