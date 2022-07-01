import React from "react";
import "./Main.css";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Students = () => {
    const cardInfo = [
        {
            image: "https://i.ibb.co/bXvdYPF/s1.png",
            title: "Mike",
            text: "3.8",
        },
        {
            image:
                "https://i.ibb.co/MnpPqjy/s2.png",
            title: "Manal",
            text: "3.6",
        },
        {
            image:
                "https://i.ibb.co/Wx2NBv5/s3.png",
            title: "Moe",
            text: "3.2",
        },
        {
            image:
                "https://i.ibb.co/sqpGzfY/s4.png",
            title: "Mary",
            text: "2.6",
        },
    ];

    const processCard = (card, index) => {
        return (
            <Card style={{ width: "18rem" }} key={index} className="box">
                <Card.Img variant="top"  src={card.image} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                </Card.Body>
                <Button variant="primary">Grade</Button>

            </Card>
        );
    };

    return <div className="grid">{cardInfo.map(processCard)}</div>;
};

export default Students;