import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  // to modify state in component u NEED dispatcher
  const dispatch = useDispatch();
  // to get data from state u Need hook useSelector
  const cash = useSelector(state => state.cash);
  console.log(cash)
  


  return (
    <div style={{background: "pink", display: "flex", border: "1px solid black", width: "150px", height: "50px", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
      <div> Balance: {useSelector(state => state.cash)}</div>
      <div style={{width: "150px", display: "flex",justifyContent: "space-around"}}>
        <button>Pop Up</button>
        <button>Pop Down</button>
      </div>
    </div>
  );
}

export default App;
