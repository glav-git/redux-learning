import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  // to modify state in component u NEED dispatcher
  const dispatch = useDispatch();
  // to get data from state u Need hook useSelector
  const cash = useSelector(state => state.cash);
  
  const addCash = () => {
    dispatch({type:"ADD_CASH", payload: 1})
  }

  const getCash = () => {
    dispatch({type:"GET_CASH", payload: 1})
  }

  return (
    <div style={{background: "pink", display: "flex", border: "1px solid black", width: "150px", height: "50px", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
      <div> Balance: {cash}</div>
      <div style={{width: "150px", display: "flex",justifyContent: "space-around"}}>
        <button onClick={() => addCash()}>Pop Up</button>
        <button onClick={() => getCash()}>Pop Down</button>
      </div>
    </div>
  );
}

export default App;
