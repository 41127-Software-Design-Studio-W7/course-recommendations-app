import React from "react";

import { useState, useEffect } from "react";
import RankingItem from "./RankingItem";


export default function Ranking({key, rankingitems, title, updateSelected}) {

    const [rankings, setRankings] = useState(rankingitems);

    const onChange = (e) => {
    //    setsearchTerm(e.target.value);
    }

    const onClickRankingItemButton = (curIndex, nextIndex) => {
        console.log("Changing rankings at index " + curIndex + " " + nextIndex);
        console.log(rankings);
        const newRankings = [...rankings];
        let temp = "";
        if (true) {
            temp = newRankings[curIndex];
            newRankings[curIndex] = newRankings[nextIndex];
            newRankings[nextIndex] = temp;
        }
        setRankings(newRankings);
        console.log(rankings);
    }


    return (
        <div > 
            <div className="formitemheading">
                Rank by order of Preference || {title}:
            </div>
            <div>
                <div classname="formitemsubheading">
                    Preferences:
                </div>
                <div>
                    {
                        rankings
                        .map((ran, index) => 
                            (<RankingItem key={ran._id} title={ran} updateRanking={onClickRankingItemButton} index={index} max={rankingitems.length}/>)
                        )
                    }
                </div>
            </div>
            <hr></hr>
        </div>
    )
}