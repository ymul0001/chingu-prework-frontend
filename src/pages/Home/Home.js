import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from "axios";
import Login from '../Login/Login';
import Button from '../../components/Button/Button';
import Input from '../../components/FormInput/Input';
import TextArea from '../../components/TextArea/TextArea';
import Card from '../../components/Card/Card';
import "../Home/home.css"

class Home extends React.Component {
    state = {
        notes: [],
        noteTitle: '',
        noteDesc: ''
    }

    componentDidMount = () => {
        const user = localStorage.getItem('userId');
        axios.get('https://notes-chingu-api.herokuapp.com/v1/note/findByUserId',{params: {
            userid: user
        }}).then((response) => {
            this.setState({
                notes: [...response.data.message]
            });
          })
    }
    
    updateNoteTitleValue = (e) => {
        this.setState({
            noteTitle: e.target.value
        })
    }

    updateNoteDescValue = (e) => {
        this.setState({
            noteDesc: e.target.value
        })

    }

    createNote = () => {
        axios.post('https://notes-chingu-api.herokuapp.com/v1/note/create', {
            userid: localStorage.getItem('userId'),
            title: this.state.noteTitle,
            desc: this.state.noteDesc
        })
        .then((response) => {
            window.location.reload(true);
        }, (error) => {
            if (error.response.data.messages === undefined) {
                console.log(error);
            }
            else {
                console.log(error.response.data.messages);
            } 
        });
    }

    signOut = () => {
        localStorage.clear();
        this.props.history.push({
            pathname: `/login`,
        });
    }

    render() { 
        if (localStorage.getItem('userId') === null) {
            return (
                <Redirect to="/login" component={Login} />
            )
        }

        return (
            <div className="home-page">
                <nav className="navigation">
                        <Button properties = {{
                            class: 'signout-btn',
                            type:'submit',
                            value:'Sign out',
                            onClick: this.signOut
                        }}/>
                </nav>
                <div className="create-section">
                    <h2 className="create-section-title">Digital Journal</h2>
                    <form className="create-form-field" method="post" id="create-notes-form">
                        <label className="title-label" for="title">Title:</label>
                        <Input properties = {{   
                                type:'text',
                                id:'title',
                                name:'title',
                                onChange: this.updateNoteTitleValue
                            }} />
                        <label className="note-label" for="note">Note:</label>
                        <TextArea properties = {{
                                name:'note',
                                id:'note',
                                placeholder:'enter your note here',
                                onChange: this.updateNoteDescValue
                             }}/>
                    </form>
                    <Button properties = {{
                            class: 'submit-btn',
                            type:'submit',
                            value:'Create a note!',
                            onClick: this.createNote
                        }}/>
                </div>
                <div className="notes-container">
                        {this.state.notes.map((note) => {
                            return(
                            <Card properties = {{
                                id: note.note_id,
                                title: note.note_title,
                                description: note.note_description
                            }}/>
                            )
                        })}
                </div>
            </div>
        );
    }
}
 
export default Home;