import React from "react";

export default function Meme(){

    const [imgURL, setImgURL] = React.useState('https://i.imgflip.com/1tl71a.jpg')
    const [memeData, setMemeData] = React.useState({})
    const [memeText, setMemeText] = React.useState({
        topText: "I bet",
        bottomText: "he is thinking about other women"
    })
    

    // API call
    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
            .then(res=>res.json())
            .then(data=>setMemeData(data))
    }, [])

    // Event handler
    function changeImage(){
        let memesArray = memeData.data.memes;
        let randomNumber = Math.floor(Math.random()* memesArray.length);
        let URL = memesArray[randomNumber].url;
        setImgURL(URL);
    }
    
    // onchange function
    function handleChange(event){
        setMemeText(prevMemeText=>{
            return {...prevMemeText, 
                    [event.target.name]: event.target.value
            }
        })
    }

  return (
    <div className="meme-form">
        <div className="btns">
            <input  className="btn btn-1" type="text" placeholder="Top Text" onChange={ handleChange } name= "topText"/>
            <input  className="btn btn-2" type="text"  placeholder="Bottom" onChange={ handleChange } name= "bottomText"/>
        </div>
        <div>
            <button onClick = { changeImage } className="submit-btn">Get a new meme image  🖼</button>
        </div>
        <div className="img-container">
            <img src={ imgURL } alt="img" className="meme-img" />
            <h1 className="top-text">{ memeText.topText }</h1>
            <h1 className="bottom-text">{ memeText.bottomText }</h1>
        </div>
    </div>
    
  )
}

