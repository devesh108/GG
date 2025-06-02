import React, { useState } from 'react'
import axios from "axios";


export const Dashboard = () => {
  const [state, setState] = useState(0)
  // console.log(useState(0))

  const [color, setcolor] = useState("Red")
  // console.log(useState("Red"))

  const [store, setStore] = useState([])


  const increment = () => {
    setState(state + 1);
  };
  const decrement = () => {
    setState(state - 1);
  };
  const colorchange = () => {
    setcolor("Yellow");
  };

  const getlivedata = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setStore(res.data);
      })


  };



  return (
    <>
      {console.log("render")}
      <div style={{ textAlign: 'center' }}>
        <div>Dashboard</div>
        <br />
        {state}
        <br /><br />
        <input type="submit" value="Decrement" onClick={decrement} />
        <input type="submit" value="Increment" onClick={increment} style={{ marginLeft: "2%" }} />
        <br />
        {color}
        <br /><br />
        <input type="submit" value="Change Color" onClick={colorchange} />
        <br /><br />

        <input type="submit" value="Get Live Data" onClick={getlivedata} />
        <br /><br />
        <ul>
          {
            store.map((item, index) =>
              <li>{"My Id is:" + item.id + " " + item.title}</li>
            )
          }
        </ul>
      </div>
    </>
  )
}
