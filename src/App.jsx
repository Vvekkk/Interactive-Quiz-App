import axios from "axios"
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header.jsx';
import Home from './Pages/Home.jsx';
import Quiz from './Pages/Quiz.jsx';
import Result from './Pages/Result.jsx';

const App = () => {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async(category = "", difficulty = "") => {

    const {data} = await axios.get(
      `https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    } ${difficulty && `&difficulty=${difficulty}`}&type=multiple`
  );

    // console.log(data);
    setQuestions(data.results);
  }

  return (
    <BrowserRouter>
      <div className='app' style={{backgroundImage: "url(./ques1.png)"}}>
        <Header/>


            <Routes> 
              <Route exact path="/" element={<Home 
              name={name} 
              setName={setName} 
              fetchQuestions={fetchQuestions}/>} />
              
              <Route path="/quiz" element={<Quiz 
              name={name} 
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions} 
              />} />
              <Route path="/result" element={<Result 
              name={name}
              score={score}
              />} />  
            </Routes>


      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App