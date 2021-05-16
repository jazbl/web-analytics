import React, { useState } from "react";
import axios from 'axios';
import './App.css';

function App() {

const [state, setState] = useState({});

const handleChange = ({ target }) => {
  setState({[target.name]: target.value});
};
const submit = (e) => {
  e.preventDefault();

  axios({
    url: 'api/save',
    method: 'POST',
    data: {title: state.title}
  })
  .then( ()=> {
axios.get('/api')
.then((res) => {
  const data = res.data;
  setState({ posts: data});
})
  });
};

const Message = () => {
  const [apiResponse, setApiResponse] = useState("");
  
  function Data() {
	  fetch("/api/db")
	  .then(x => x.text())
	  .then(x => setApiResponse(x))
	  return apiResponse
  }
 return <Data />
}

  return (
    <>
  <h3>Please enter a domain</h3>
    <form onSubmit={submit}> 

      <input
        type="text"
        name="title"
        size="50"
        placeholder=" Example: jasmineball.net or yourdomain.com "
        value={state.title}
        onChange={handleChange}
      />

      <button onClick={() => window.location.reload(true)}>Show Statistics</button>
      
    </form>
    <br />

    <Message />
    </>
  );
}

export default App;
