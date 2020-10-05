import React, {useEffect, useState} from 'react';
import {FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Message from "./component/Message"
import db from "./firebase";
// this firebase is from actuall firebase module.
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core';

function App() {

  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [messages, setMessage] = useState([
    {
      message : input,
      username : username,
    }
  ]);
  useEffect(() => {
    setUsername(prompt("please enter your name!"));
  }, [])

  // so use effect and onSnapshot both are listeners.
  useEffect(()=>{
    db.collection("messages").orderBy("timestamp","desc").onSnapshot((snapshot)=>{
      setMessage(snapshot.docs.map(doc=>({id: doc.id, message: doc.data()})))

    })
  },[]);
  
  

  // here we are adding it to the database.
  const sendMessage = (event)=>{
    event.preventDefault();
    db.collection("messages").add({
      message : input,
      username : username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    // following was pushing locally.
    // setMessage([...messages, {username : username, message:input}])
    setInput("");
  };
  
  return (
    <div className="App">
    <img src="https://www.freeiconspng.com/uploads/facebook-messenger-light-blue-logo-1.png?w=100&h=100" alt=""/>
     <h1>Welcome <span>{username}</span> to facebook Messanger Clone!</h1>
     <form class="app__form">
      <FormControl className="app__formControl">
        <Input className="app__input" placeholder="Enter a message" onChange={event=>setInput(event.target.value)} type="text" value={input}/>

        <IconButton className = "app__iconButton" 
        variant="contained" color="primary" disabled={!input} onClick={sendMessage}
        >
        <SendIcon  />
        </IconButton>

      </FormControl>
      </form>
      <FlipMove>
      
      {
        messages.map(({id,message})=>
          <Message 
            key = {id}
            message = {message}
            username = {username}
          />
        )
      }
      </FlipMove>
      
      
    </div>
  );
}

export default App;
