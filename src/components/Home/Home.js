import React, { useState, useEffect } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Home.css';
const Home = () => {
  const [text, setText] = useState("");
  const [index,setIndex] = useState(0);
  const [content] = useState("We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.")

  useEffect(()=>{
    if(index<content.length) {
      setTimeout(() => {
        setText(text + content[index]);
        setIndex(index + 1);
    }, 40)
    } 
  },[text,index])
  return (
    <>
      <Header />
      <div className="bg-img d-flex justify-content-center align-items-center">
        <div className="container text-white text-end fonts">
          <div className='row'>
            <div className='col'>

            </div>
            <div className='col'>
              
            </div>
            <div className='col align-self-end '>
              <h3 className="text-bold display-1 color-pink">
                ChatGPT
              </h3>
              <p className='content-style'>{text}</p>
              

            </div>
          </div>

        </div>



      </div>
      <Footer />
    </>
  )
}
export default Home;