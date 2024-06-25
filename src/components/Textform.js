import React,{useState} from 'react'

export default function Textform(props) {
    const [text,setText]=useState('');

    const handelUpclick=(event)=>{
        console.log(text);
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("convert to uppercase","success")
    }
        const handelLoclick=(event)=>{
            console.log(text);
            let newtext=text.toLowerCase();
            setText(newtext)
            props.showAlert("convert to Lowercase","success")
        }
        const handelclick=(event)=>{
            console.log(text);
            let newtext=('');
            setText(newtext)
            props.showAlert("text is clear","success")
        }
        const handelcopy=()=>{
            var text=document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("copy to clipboard","success")
        }
        const handelextraspaces=(event)=>{
            console.log(text);
            let newtext=text.split(/[ ]+/);
            setText(newtext.join(" "));
            props.showAlert("Extra spaces Removed","success")
        }
        
    
        const handelonchange=(event)=>{
            setText(event.target.value);

        }

    
  return (
    <>
<div className="my-3" style={{color: props.mode==='dark'?'white':'#103153'}}>
<h2>{props.heading}</h2>
<label for="myBox" className="form-label"></label>
<textarea className="form-control" value={text} onChange={handelonchange} 
style={{backgroundColor:props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'#103153'}} id="myBox" rows="8"></textarea>
<button className='btn btn-primary my-3 mx-3' onClick={handelUpclick}>Convert to Upercase</button>
<button className='btn btn-primary my-3 mx-3' onClick={handelLoclick}>Convert to Lowercase</button>
<button className='btn btn-primary my-3 mx-3' onClick={handelclick}>Clear Text</button>
<button className='btn btn-primary my-3 mx-3' onClick={handelcopy}>Copy Text</button>
<button className='btn btn-primary my-3 mx-3' onClick={handelextraspaces}>Remove Extra Spaces</button>
</div>  
<div className="container my-3" style={{color: props.mode==='dark'?'white':'#103153'}}>

    <h1> Text Summary </h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minute read</p>
    <h3>Preview</h3>
    <p>{text.length>0 ? text :"Enter somthing in textbox above to preview here..."}</p>
</div>
</>
  )
}
