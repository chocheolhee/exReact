/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import React, { useState } from "react";
import Data from "./data.js";

function App() {
    let [shoes, shoes변경] = useState(Data);

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="Jumbotron">
                <h1>20% Season Off</h1>
                <p>안녕안녕gdgd</p>
                <p>
                    {" "}
                    <Button variant="primary">Primary</Button>
                </p>
            </div>
            <div className="container">
                <div className="row">
                    {shoes.map((a, i) => {
                        return <Card shoes={shoes[i]} i={i} key={i} />;
                    })}
                </div>
            </div>
        </div>
    );
}

function Card(props) {
    return (
        <div className="col-md-4">
            {" "}
            <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="100%" />
            <h4>{props.shoes.title}</h4>
            <p>
                {props.shoes.content} & {props.shoes.price}
            </p>
        </div>
    );
}

export default App;
