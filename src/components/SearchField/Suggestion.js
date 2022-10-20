import React from "react";
import { useState, useEffect } from "react";

export default function Suggestion({key, description, title, updateSelected}) {

    //const [searchTerm, setsearchTerm] = useState("");
    
    //
    //const onChange = (e) => {
    //    setsearchTerm(e.target.value);
    //}
    //onClick={props.onClickSuggestion(props.title)}
    //console.log(props.title);

    const [val, setVal] = useState('');

    //setVal(props.title);

    return (
        <div>
            <div className="formitemtext"> 
                {description} {title}
            </div>
            <div >
                <button className="minorbuttonup" onClick={() => updateSelected(title)}>
                    +
                </button>
            </div>
        </div>
    )
}