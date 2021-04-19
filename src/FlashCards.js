import React from "react";
import "./index.css";
import {flashQuestionsTest} from "./data";

export const FlashCards = () => {
    return (
        <>
            <div className="flash">{
                flashQuestionsTest.map((data, key) => {
                return (
                    <button key={key}>
                        {data.front +
                        " , " +
                        data.back
                        }
                    </button>
                );
            })}</div>
        </>
    );
};


class FlashCards extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cards: Array(9).fill(null),
            answerShown: false,
            jsonIndex:0,
        };
    }
    render(){
        const status = 'Showing the ' + (this.state.answerShown ? 'Answer' : 'Question');
        return(
            <div className="flash">
                <div className="status">{status}</div>
                {flashQuestionsTest.map((data, key) => {
                    return (
                        <button key={key}>
                            {data.front +
                            " , " +
                            data.back
                            }
                        </button>
                    );
                })}</div>);
    }
}