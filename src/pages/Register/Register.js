import React from "react";
import axios from "axios";
import Button from "../../components/Button/Button";
import Input from "../../components/FormInput/Input";
import "../Register/register.css";

class Register extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        errorMessage: ''
    }

    updateUsernameValue = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    updateEmailValue = (e) => {
        this.setState({
            email:e.target.value
        })
    }

    updatePasswordValue = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    createAccount = () => {
        axios.post('https://notes-chingu-api.herokuapp.com/v1/credential/create', {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        })
        .then((response) => {
            this.props.history.push({
                pathname: `/login`,
            });
        }, (error) => {
            this.setState({
                errorMessage: error.response.data.message
            })
        });  
    }

    render() { 
        return (
            <div className="register-page">
                <div className="register-form-wrapper">
                    <h2 className="register-form-title">Sign up!</h2>
                    <span className="error-message">{this.state.errorMessage}</span>
                    <form className="register-form-field" method="post" id="register-form">
                        <Input properties = {{   
                                type:'text',
                                id:'register-username',
                                name:'username',
                                onChange: this.updateUsernameValue
                            }} />
                        <Input properties = {{   
                                type:'email',
                                id:'register-email',
                                name:'email',
                                onChange: this.updateEmailValue
                            }} />
                        <Input properties = {{   
                                type:'password',
                                id:'register-password',
                                name:'password',
                                onChange: this.updatePasswordValue
                            }} />
                    </form>
                    <Button properties = {{
                            class: 'register-btn',
                            type:'submit',
                            value:'Register',
                            onClick: this.createAccount
                        }}/>
                </div>
            </div>
        );
    }
}
 
export default Register;