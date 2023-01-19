import React, { useState } from 'react'
import { useEffect } from 'react'
import randomColor from 'randomcolor'
import "../App.css"
import { Twitter }from 'react-bootstrap-icons'
import { Instagram } from 'react-bootstrap-icons'

export default function Quote(){
    const[quote,setQuote] = useState([])
    const[color,setColor] = React.useState({
        bgColor:""
    })
    const[isloading, setisLoading] = React.useState(true)


    function getQuote(){
        fetch('https://type.fit/api/quotes')
        .then(res => res.json())
        .then(res => setQuote(res[Math.floor(Math.random()*res.length)])) 
        let color = randomColor()
             
        setTimeout(() =>{
            setColor({bgColor:color})
        },500);

    }
       
  console.log(quote.length)

    useEffect(()=>{
        setTimeout(() => {
            getQuote()
            setisLoading(false)
        }, 2000);         
    },[])
           
    return(
        <main style={{backgroundColor:color.bgColor}} className="main " id = "transition" >
            
            <div  className="quote">
            <div >
                <h2 className='heading'>Get Inspired</h2>
            </div>
              <div className = "container">
                <div>
                <h1 className={`fade-in ${isloading ? '' : 'show'}`} style={{color:color.bgColor}}><span>"</span>{isloading ? '' : quote.text}</h1>
                </div>
                <div >
                    <p className='author'  style={{color:color.bgColor}}>- {isloading ? " " : quote.author}</p>
                </div><br/><br/><br/>
                <div >
                    <button className='button' style={{backgroundColor:color.bgColor}} onClick={getQuote}>New Quote</button>
                </div>
                <div className='icons'>
                    <p className='twitter' style={{backgroundColor:color.bgColor}}><a href='https://twitter.com/compose/tweet'><Twitter style = {{color:"white"}}/></a></p>
                    <p className='instagram' style={{backgroundColor:color.bgColor}}><a href='https://www.instagram.com/'><Instagram style = {{color:"white"}}/></a></p>
                </div>
              </div>
              <div className="editor">
                <pre>by Ivan Mwaura</pre>
            </div>
            </div>
            
        </main>
    )
}