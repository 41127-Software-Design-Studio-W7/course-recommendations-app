import React from "react";

import { useState, useEffect } from "react";
import Selected from "./Selected";
import Suggestion from "./Suggestion";

export default function SearchField(props) {

    const [searchTerm, setsearchTerm] = useState("");
    const [selected, setSelected] = useState([]);

    const onChange = (e) => {
        setsearchTerm(e.target.value);
    }

    const onClickSuggestion = (val) => {
        console.log("Adding suggestion " + val);
        console.log(val);
        let newSelected = selected.slice();
        newSelected.push(val); //parseInt(val));
        setSelected(newSelected);
        console.log(selected);
    }


    const onClickSelected = (index) => {
        console.log("Removing at index " + index);
        console.log(selected);
        const newSelected = [...selected];
        newSelected.splice(index, 1);
        setSelected(newSelected);
        console.log(selected);
    }


    return (
        <div className="SearchField"> 
            <div className="formitemheading">
                Choose {props.title}:
            </div>
            <div>
                <div className="formitemdescription">
                    Selected:
                </div>
                <div>
                    {
                        selected
                        .map((sel, index) => 
                            (<Selected key={sel._id} title={sel} removeFromSelected={onClickSelected} index={index}/>)
                        )
                    }
                </div>
            </div>
            <div className="form-group">
                <input type="text" value={searchTerm} onChange={onChange} placeholder="Enter search term here">

                </input>
            </div>
            <div className="Suggestions">
            {
                props
                .allpossiblesuggestions
                .filter((sug) => {
                const subString = searchTerm.toString();
                const fullName = sug.toString();

                return (
                    //fullName
                    subString 
                    && fullName.includes(subString) 
                    && fullName !== subString
                    && !selected.includes(sug)
                );
                })
                .map((sug) => 
                    (<Suggestion key={sug._id} description="Subject: " title={sug} updateSelected={onClickSuggestion}/>)
                )
            }
            </div>
            <hr></hr>
        </div>
    )
}