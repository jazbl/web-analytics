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

// Could create a notification saying "Website not yet registered with Pagestats".

  return (
    <>
  Analytics
    <form onSubmit={submit}> 

      <input
        type="text"
        name="title"
        placeholder="Enter Website URL"
        value={state.title}
        onChange={handleChange}
      />

      <button>Show Statistics</button>

    </form>

    </>
  );
}

export default App;
