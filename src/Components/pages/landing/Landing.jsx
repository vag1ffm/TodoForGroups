import React, { useState } from 'react';
import { Navbar, Container, Row, Col, Button, Nav, Modal } from 'react-bootstrap';
import ModalWindow from "../../modalWindow";
import registration from "../../registration";
import {useSelector} from "react-redux";

const LandingPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [action, setAction] = useState('');

    const openModal = (act) => {
        setShowModal(true);
        setAction(act)
    };

    const closeModal = () => {
        setShowModal(false);
    };

    let {status} = useSelector(state => state.userSlice)

    console.log('status', status)


    return (
        <div className="landing-page">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Todo App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link onClick={()=> openModal('login')}>Log In</Nav.Link>
                            <Nav.Link onClick={()=> openModal('registration')}>Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <header className="section text-center bg-primary text-white py-5">
                <Container>
                    <h1 className="display-4">Welcome to Todo App</h1>
                    <p className="lead">A simple and intuitive todo list application</p>
                </Container>
            </header>
            <section className="section py-5">
                <Container>
                    <Row className="mb-4">
                        <Col md={4} className="text-center">
                            <i className="fas fa-check-circle fa-5x text-primary"></i>
                            <h3>Create and Manage Tasks</h3>
                            <p>Create your own todo list and easily manage your tasks.</p>
                        </Col>
                        <Col md={4} className="text-center">
                            <i className="fas fa-users fa-5x text-primary"></i>
                            <h3>Collaborate with Friends</h3>
                            <p>Invite your friends to join and work on tasks together.</p>
                        </Col>
                        <Col md={4} className="text-center">
                            <i className="fas fa-paint-brush fa-5x text-primary"></i>
                            <h3>Beautiful Design</h3>
                            <p>Enjoy a visually appealing and user-friendly interface.</p>
                        </Col>
                    </Row>
                    <Row className={'d-flex justify-content-center'}>
                        <Col md={4} className="text-center">
                            <i className="fas fa-coins fa-5x text-primary"></i>
                            <h3>All for free</h3>
                            <p>You can create and manage an unlimited number of groups for your tasks!</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={6} className="text-center">
                            <h2>Start Managing Your Tasks Today!</h2>
                            <Button variant="primary" onClick={openModal}>Get Started</Button>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={12} className="text-center">
                            <h4>Create Unlimited Groups for Free</h4>
                        </Col>
                    </Row>
                </Container>
            </section>
            <footer className="py-4 bg-dark text-white text-center">
                <Container>
                    <p>Todo App &copy; {new Date().getFullYear()}</p>
                </Container>
            </footer>

            <ModalWindow showModal={showModal} closeModal={closeModal} action={action} setAction={setAction}/>
        </div>
    );
};

export default LandingPage;
