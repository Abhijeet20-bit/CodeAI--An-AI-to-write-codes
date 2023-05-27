import React from "react";
import { CardBody, Container, Form, Card, Row, FormGroup, Input, Label } from "reactstrap";
import { RegisterUser } from "../services/Api";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            fullname: "",
            email: "",
            pass: "",
            confirmpass: ""
        }
    }
    onChangeHandler = (e) => {
        e.preventDefault();
        const target = e.target;
        this.setState({
            [target.name]: e.target.value
        });
    }
    onSubmitHandler = async (e) => {
        e.preventDefault();
        const info = this.state;
        if(info.fullname === '' || info.email === '' || info.pass === '' || info.confirmpass === '')
        {
            toast.warn('Some Fields Value are Missing!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
        else if(info.pass !== info.confirmpass)
        {
            toast.error('Password doesn\'t match Confirm Password ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
        else {
            await RegisterUser(this.state);
            toast.success('Registration Successfull!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            this.setState({
                fullname: '',
                email: '',
                pass: '',
                confirmpass: ''
            })
        }
        console.log("Full Name " + this.state.fullname + " Email " + this.state.email + " Password " + this.state.pass + " Confirm Pass " + this.state.confirmpass)
    }
    render() {
        return (
            <>
                <Header />
                <div className="vh-100" style={{ backgroundColor: "#eee" }}>
                    <Container className="h-100">
                        <Row className="d-flex justify-content-center align-item-center h-100">
                            <div className="col-lg-12 col-xl-11">
                                <Card className="text-black" style={{ borderRadius: "25px" }}>
                                    <CardBody className="p-md-5">
                                        <Row className="justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                                <Form className="mx-1 mx-md-4" onSubmit={this.onSubmitHandler}>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <FormGroup className="form-outline flex-fill mb-0">
                                                            <Input type="text" id="Fname" className="form-control form-control-lg" placeholder="Full Name" name="fullname" onChange={this.onChangeHandler} value={this.state.fullname}></Input>

                                                        </FormGroup>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <FormGroup className="form-outline flex-fill mb-0">
                                                            <Input type="email" id="email" className="form-control form-control-lg" placeholder="Enter Email" name="email" onChange={this.onChangeHandler} value={this.state.email}></Input>

                                                        </FormGroup>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                        <FormGroup className="form-outline flex-fill mb-0">
                                                            <Input type="password" id="password" className="form-control form-control-lg" placeholder="Password" name="pass" onChange={this.onChangeHandler} value={this.state.pass}></Input>
                                                        </FormGroup>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                        <FormGroup className="form-outline flex-fill mb-0">
                                                            <Input type="password" id="repassword" className="form-control form-control-lg" placeholder="Repeat Password" name="confirmpass" onChange={this.onChangeHandler} value={this.state.confirmpass}></Input>
                                                        </FormGroup>
                                                    </div>
                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <button type="submit" className="btn btn-primary btn-lg" style={{backgroundColor: "#0d6efd"}}>Register</button>
                                                    </div>
                                                </Form>
                                            </div>
                                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                    className="img-fluid" alt="Sample image" />

                                            </div>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </div>

                        </Row>
                    </Container>
                </div>
                <Footer />
            </>
        )
    }
}

export default Register