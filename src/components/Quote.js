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


    function getQuote(){
        fetch('https://type.fit/api/quotes')
        .then(res => res.json())
        .then(res => setQuote(res[Math.floor(Math.random()*res.length)])) 
        let color = randomColor()
        setColor({bgColor:color}) 
    }
       
  console.log(quote.length)

    useEffect(()=>{
        getQuote()
           
    },[])
           
    return(
        <main style={{backgroundColor:color.bgColor}} className="main">
            <div  className="quote">
              <div className = "container">
                <div>
                    <h1  style={{color:color.bgColor}}><span>"</span>{quote.text}</h1>
                </div>
                <div >
                    <p className='author'>- {quote.author}</p>
                </div><br/><br/><br/>
                <div >
                    <button className='button' style={{backgroundColor:color.bgColor}} onClick={getQuote}>New Quote</button>
                </div>
                <div className=''>
                    <p className='twitter' style={{backgroundColor:color.bgColor}}><a href='https://twitter.com/compose/tweet'><Twitter style = {{color:"white"}}/></a></p>
                    <p className='twitter' style={{backgroundColor:color.bgColor}}><a href='https://twitter.com/compose/tweet'><Instagram style = {{color:"white"}}/></a></p>
                </div>
              </div>
            </div>
            <div><pre>by Ivan Mwaura</pre></div>
        </main>
    )
}