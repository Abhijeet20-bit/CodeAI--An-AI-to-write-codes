import React from "react";
import {Form,FormGroup,Input,Label } from "reactstrap";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { LoginUser } from "../../services/Api";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Navigate } from "react-router-dom"; 
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            isLogedIn: false
        };
    }

    onsubmitHandler = async (e) => {
        e.preventDefault();
        const info = this.state;
        if(info.email === '' || info.password === '')
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
        else
        {
            const res=await LoginUser(this.state);
            if(res.status===201)
            {
                toast.success('Login Successfull!!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            
                this.setState({isLogedIn:true});
                //console.log(" Login response access token",res.data);
            }
            else
            {
                toast.error('Invalid Credentials', {
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
            this.setState({
                email: '',
                password: ''
            })
        }
        //console.log("UserName: "+ this.state.email + " Password: "+ this.state.password);
    }
    render() {
        if( this.state.isLogedIn)
        {
            return (<Navigate to="/ChatGPT" />);
        }
        return (<>
            <Header />
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="img-fluid" alt="Phone image"/>
                        </div>
                        <div className="col-md-7 col-lg-5 col-xs-5 offset-xs-1">
                            <Form onSubmit={this.onsubmitHandler}>
                                <FormGroup>
                                    <Label htmlFor="email">Email</Label>
                                    <Input className="form-control form-control-lg" id="email" name="email" placeholder="Type your Email" type="email" value={this.state.email} onChange={e=>this.setState({email: e.target.value})}/>
                                </FormGroup>
                                
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input className="form-control form-control-lg" id="password" name="password" placeholder="Type your Password" type="password" value={this.state.password} onChange={e=>this.setState({password: e.target.value})}/>
                                </FormGroup>
                                
                        

                                <div className="d-flex justify-content-around align-items-center mb-4">
            
                    
                                    <a href="#!">Forgot password?</a>
                                </div>

                            
                                <button type="submit" className="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#0d6efd"}}>Sign in</button>

                            </Form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>)
    }
}

export default Login