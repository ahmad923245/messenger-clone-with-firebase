import React, {useEffect}from "react";
import "./App.css";
import { FormControl,Input,IconButton } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send'
import firebase from 'firebase'
function App() {
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState([]);
const [username,setUsername] = React.useState('')
  // console.log(input)
  // console.log(messages)


  useEffect(() => {
   db.collection('messages')
   .orderBy('timestamp','desc')
   .onSnapshot(snapshot=>{
     setMessages(snapshot.docs.map(doc=>({id:doc.id,message:doc.data()})))
   });
  }, [])


  useEffect(() => {
    
   setUsername(prompt('Please Enter your Name'))
    
  }, []) //edhr condition ati h
  const sendMessage = (event) => {
    event.preventDefault();


    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
  };
  return (
    <div className="App">
      <img height="130" src="https://lh3.googleusercontent.com/rkBi-WHAI-dzkAIYjGBSMUToUoi6SWKoy9Fu7QybFb6KVOJweb51NNzokTtjod__MzA" />
      <h1>Messenger</h1>
      <h1>Welcome {username}  </h1>
      <form className="app__form">
        <FormControl className="app_formControl"> 
          
          <Input
          className="app__input"
          placeholder="Enter a message"
          value={input}
           onChange={(event) => setInput(event.target.value)}
          />

          <IconButton

          disabled={!input}
          variant="contained"
          type="submit"
          onClick={sendMessage}
         className="app__iconButton"
          >
              <SendIcon  />
          </IconButton>
       
   
        
        </FormControl>
       
      </form>

      <FlipMove>

      {messages.map(({id,message}) => (
        
        <Message
        key={id}
        username={username}
        message={message} />
        
      ))}
</FlipMove>
    </div>
  );
}

export default App;
