import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  // to modify state in component u NEED dispatcher
  const dispatch = useDispatch();
  // to get data from state u Need hook useSelector
  const cash = useSelector(state => state.cash);
  
  const addCash = (cash) => {
    dispatch({type:"ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type:"GET_CASH", payload: cash})
  }

  return (
    <div style={{background: "pink", display: "flex", border: "1px solid black", width: "150px", height: "50px", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
      <div> Balance: {cash}</div>
      <div style={{width: "150px", display: "flex",justifyContent: "space-around"}}>
        <button onClick={() => addCash(Number(prompt()))}>Pop Up</button>
        <button onClick={() => getCash(Number(prompt()))}>Pop Down</button>
      </div>
    </div>
  );
}

export default App;
