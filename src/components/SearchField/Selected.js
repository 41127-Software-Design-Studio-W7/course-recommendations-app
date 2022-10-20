import React from "react";
import { useState, useEffect } from "react";

export default function Selected({key, title, removeFromSelected, index}) {
    return (
        <div>
            <div className="formitemtext"> 
                {index}. {title} 
            </div>
            <div >
                <button className="minorbuttondown" onClick={() => removeFromSelected(index)}>
                    X
                </button>
            </div>
        </div>
    )
}

