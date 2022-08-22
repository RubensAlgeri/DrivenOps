import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [student, setStudent] = useState(null);

  useEffect(async () => {
    const API_URL = process.env.REACT_APP_BASE_URL;
    console.log("🚀 ~ file: App.js ~ line 9 ~ useEffect ~ API_URL", API_URL)
    try {
      const response = await axios.get(`${API_URL}/students/random`);
      const student = response.data;
      if(!student){
        alert("Putz! Não há estudantes cadastrados para o sorteio!");
      } else {
        setStudent(student);
      }
    } catch (error) {
      alert("Não foi possível realizar o sorteio!");
    }
  }, []);

  return (
    student ? <h1>{student.name}</h1> : "Carregando..."
  )
}

export default App;