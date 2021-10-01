import React from "react";
import axios from "axios";
import Input from "../../components/FormInput/Input";
import Button from "../../components/Button/Button";
import "../Login/login.css";

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        errorMessage: ""
    }

    getCredentialByParams = () => {
        axios.get('https://notes-chingu-api.herokuapp.com/v1/credential/findByUserNameAndPassword',{params: {
            username: this.state.username,
            password: this.state.password
        }}).then((response) => {
            localStorage.setItem('userId', response.data.message[0].user_id)
            this.props.history.push({
                pathname: `/`,
                // user: response.data.message[0].user_id
            });
          }).catch((error) => {
              this.setState({
                  errorMessage: error.response.data.message
              })
          });
    }

    updateUsernameValue = (e) => {
        this.setState({
          username: e.target.value
        });
    }

    updatePasswordValue = (e) => {
        this.setState({
          password: e.target.value
        });
    }

    render() { 
        return (
            <div className="login-page">
                <div className="form-wrapper">
                    <h2 className="form-title">Welcome back!</h2>
                    <span className="error-message">{this.state.errorMessage}</span>
                    <form className="form-field" method="post" id="login-form">
                        <Input properties = {{   
                                type:'text',
                                id:'username',
                                name:'username',
                                onChange: this.updateUsernameValue
                            }} />
                        <Input properties = {{   
                                type:'password',
                                id:'password',
                                name:'password',
                                onChange: this.updatePasswordValue
                            }} />
                    </form>
                    <Button properties = {{
                            class: 'login-btn',
                            type:'submit',
                            value:'Login',
                            onClick: this.getCredentialByParams
                        }}/>
                </div>
                
            </div>
        );
    }
}
 
export default Login;