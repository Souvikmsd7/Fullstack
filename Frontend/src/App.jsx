import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [emp, setEmp] = useState([]);

  useEffect(() => {
    axios.get('/api/finds')
      .then((response) => {
        setEmp(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Mutton with Souvik</h1>
      <p>Employees: {emp.length}</p>
      {
        emp.map((employee) => (
          <div key={employee.id}>
            <h3>{employee.name}</h3>
            <p>{employee.expertise}</p>
          </div>
        ))
      }
    </>
  );
}

export default App;
