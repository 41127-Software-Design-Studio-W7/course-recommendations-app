import React from "react";

import { useState, useEffect } from "react";
import Selected from "./Selected";
import Suggestion from "./Suggestion";

export default function SearchField({title, allpossiblesuggestions, onUpdateValues}) {

    const [searchTerm, setsearchTerm] = useState("");
    const [selected, setSelected] = useState([]);

    const wrapSetSelected = (val) => {
        let newSelected = selected.slice();
        newSelected.push(val); //parseInt(val));
        setSelected(newSelected);
        onUpdateValues(newSelected);
    }

    const onChange = (e) => {
        setsearchTerm(e.target.value);
    }

    const onClickSuggestion = (val) => {
        console.log("Adding suggestion " + val);
        console.log(val);
        let newSelected = selected.slice();
        newSelected.push(val); //parseInt(val));
        setSelected(newSelected);
        onUpdateValues(newSelected);
        console.log(selected);
    }


    const onClickSelected = (index) => {
        console.log("Removing at index " + index);
        console.log(selected);
        const newSelected = [...selected];
        newSelected.splice(index, 1);
        setSelected(newSelected);
        onUpdateValues(newSelected);
        console.log(selected);
    }


    return (
        <div className="SearchField"> 
            <div className="formitemheading">
                Choose {title}:
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
                allpossiblesuggestions
                .filter((sug) => {
                const subString = searchTerm.toString().toLowerCase();
                const fullName = sug.toString().toLowerCase();

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