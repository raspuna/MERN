import React, { useState, useEffect } from 'react'
import axios from 'axios';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';

function AuthorForm(props) {
  const navigate = useNavigate();
  const { authorID } = useParams();
  const [name, setName] = useState('');
  const [errMsg, setErrMsg] = useState("");

  useEffect(()=>{
    if (authorID) {
      console.log({authorID})
      axios.get(`http://localhost:8000/api/author/${authorID}`)
      .then(res=>{
        console.log(res.data)
        setName(res.data.name)
      })
      .catch(err=>console.log(err))
    }
  },[authorID])
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(name) {
      const author = {
        name:name
      }
      // it act differently by authorID.
      // IF authorID is exist, then do update, else do create
      const myFunc = authorID? axios.put: axios.post
      const myURL = authorID? "http://localhost:8000/api/author/"+authorID
                  : "http://localhost:8000/api/authors/"
      if(authorID){
        console.log({authorID})
      }
      myFunc(myURL, author)
      .then(res=>{console.log(res)
        navigate("/");
      })
      .catch(err=>{
        console.log("submit fail", err)
        setErrMsg(err.response.data.err.message)

      })
    } else {
      console.log("error")
    }
  }
  return (
    <div>
      <Header/>
      {errMsg && <p className="text-danger"> {errMsg}</p>}
      <Form onSubmit={handleSubmit}>
        <FormGroup className='d-flex'>
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" value={name} name="name" 
            onChange={(e) => { setName(e.target.value); }}/>
        </FormGroup>
        <Button onClick={()=>navigate("/")} type='cancel'>Cancel</Button>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default AuthorForm