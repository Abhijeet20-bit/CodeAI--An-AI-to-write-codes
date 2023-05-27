import React, { useState, useEffect } from 'react'
import chatlogo from "../../images/chat_logo.png"
import codelogo from "../../images/code_logo.png"
import Embeddinglogo from "../../images/Embedding_logo.png"
import Fine_Tuninglogo from "../../images/Fine_Tuning_logo.png"
import imagelogo from "../../images/image_logo.png"
import speechlogo from "../../images/Speech_logo.png"
import textlogo from "../../images/Text.jpg"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const About = () => {
  const [texttodiplay, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [content] = useState("Hey Everyone, I am Kumar Abhijeet Build my own ChatGPT using the OpenAI API to interact with humans in a conversational ways. It uses NLP and is trained on a massive amount of data to generate human-like responses to a wide range of queries and conversations.");

  useEffect(() => {
    if (index < content.length) {
      setTimeout(() => {
        setText(texttodiplay + content[index]);
        setIndex(index + 1);
      }, 40)
    }
  }, [texttodiplay, index])
  return (
    <>
      <Header />
      <div className='container py-3'>
        <header>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal">ChatGPT</h1>
            <p className="fs-5 text-muted">{texttodiplay}</p>
          </div>
        </header>
        <main>
          <h1 className="display-4 fw-normal text-center">Things we can do with OpenAI </h1>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div className="col">
              {/*<div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Chat</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">This Features allows user to have a normal conversation with ChatGpt</h1>
                  
                </div>
              </div>*/}
              <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={chatlogo} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title">Chat </h2>
                      <p className="card-text">Chat models take a series of messages as input, and return a model-generated message as output.
Although the chat format is designed to make multi-turn conversations easy, it’s just as useful for single-turn tasks without any conversations (such as those previously served by instruction following models like text-davinci-003).</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={codelogo} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title">Code Completion Features</h2>
                      <p className="card-text">You can use Codex for a variety of tasks including:</p>
                      <ul>
                        <li>Turn comments into code</li>
                        <li>Complete your next line or function in context</li>
                        <li>Bring knowledge to you, such as finding a useful library or API call for an application</li>
                        <li>Add comments</li>
                        <li>Rewrite code for efficiency</li>
                      </ul>
                            

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={Embeddinglogo} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title">Embeddings</h2>
                      <p className="card-text">
                      OpenAI’s text embeddings measure the relatedness of text strings. Embeddings are commonly used for:
                      </p>
                      <ul>
                        <li><strong>Search </strong>(where results are ranked by relevance to a query string)</li>
                        <li><strong>Clustering </strong>(where text strings are grouped by similarity)</li>
                        <li><strong>Recommendations </strong>(where items with related text strings are recommended)</li>
                        <li><strong>Anomaly detection </strong>(where outliers with little relatedness are identified)</li>
                        <li><strong>Diversity measurement </strong>(where similarity distributions are analyzed)</li>
                        <li><strong>Classification </strong>(where text strings are classified by their most similar label)</li>
                      </ul>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={Fine_Tuninglogo} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title">Fine Tuning</h2>
                      <p className="card-text">Fine-tuning improves on few-shot learning by training on many more examples than can fit in the prompt, letting you achieve better results on a wide number of tasks. Once a model has been fine-tuned, you won't need to provide examples in the prompt anymore. This saves costs and enables lower-latency requests.</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={imagelogo} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title">Image Generation</h2>
                      <p className="card-text">
                        The Images API provides three methods for interacting with images:
                        </p>  
                        <ul>
                          <li>Creating images from scratch based on a text prompt</li>
                          <li>Creating edits of an existing image based on a new text prompt</li>
                          <li>Creating variations of an existing image</li>
                        </ul>
                      

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={speechlogo} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title">Speech to Text</h2>
                      <p className="card-text">The speech to text API provides two endpoints, transcriptions and translations, based on our state-of-the-art open source large-v2 Whisper model. They can be used to:

Transcribe audio into whatever language the audio is in.
Translate and transcribe the audio into english.
File uploads are currently limited to 25 MB and the following input file types are supported: mp3, mp4, mpeg, mpga, m4a, wav, and webm.</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={textlogo} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title">Text</h2>
                      <p className="card-text">The completions endpoint can be used for a wide variety of tasks. It provides a simple but powerful interface to any of our models. You input some text as a prompt, and the model will generate a text completion that attempts to match whatever context or pattern you gave it. For example, if you give the API the prompt, "As Descartes said, I think, therefore", it will return the completion " I am" with high probability.</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
export default About;