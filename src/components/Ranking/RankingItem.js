import React from "react";
import { useState, useEffect } from "react";

export default function RankingItem({key, title, updateRanking, index, max}) {

    const [val, setVal] = useState(title);
    const [idx, setIdx] = useState(index);

    return (
        <div>
            <div className="formitemtext"> 
                {index + 1}. {title}
            </div>
            <div >
                <button className="minorbuttonup" onClick={() => updateRanking(index, (index - 1) >= 0 ? index - 1 : index)}>
                    /\
                </button>
                <button className="minorbuttondown" onClick={() => updateRanking(index, (index + 1) <= max ? index + 1 : index)}>
                    \/
                </button>
            </div>
        </div>
    )
}