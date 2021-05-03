import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {flashQuestionsTest} from "./data";



class FlashCards extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cards: flashQuestionsTest,
            shownCard: "Define "+flashQuestionsTest.Cards[0].front,
            answerShown: false,
            jsonIndex:0,
        };
    }
    
    handleClick() {
        const index=this.state.jsonIndex;
        const value = this.state.answerShown ? "Define "+this.state.cards.Cards[index].front : this.state.cards.Cards[index].back;
        this.setState({
            shownCard : value,
            answerShown: !this.state.answerShown,
        });
    }
    randClick(){
        const rand=Math.floor(Math.random()*241)
        this.setState({
            jsonIndex:rand,
            shownCard : "Define "+flashQuestionsTest.Cards[rand].front,
            answerShown: false,
        });
    }
    nextClick(){
        const next=this.state.jsonIndex!==240 ? this.state.jsonIndex+1:0;
        this.setState({
            jsonIndex:next,
            shownCard : "Define "+flashQuestionsTest.Cards[next].front,
            answerShown: false,
        });
    }
    prevClick(){
        const prev= this.state.jsonIndex!==0 ? this.state.jsonIndex-1:240;
        this.setState({
            jsonIndex:prev,
            shownCard : "Define "+flashQuestionsTest.Cards[prev].front,
            answerShown: false,
        });
    }
    render(){
        const status = 'Showing the ' + (this.state.answerShown ? 'Answer' : 'Question');
        const index = this.state.jsonIndex;
        return(
            <div className="flash">
                <h2>Let's prepare for Tech interviews!</h2>
                <div><button className="changeCard" onClick={() => this.randClick()}>Randomize Card</button></div>
                <div><button className="changeCard" onClick={() => this.prevClick()}>Previous Card</button>
                    <button className="changeCard" onClick={() => this.nextClick()}>Next Card</button></div>
                <div className="status">{status}</div>
                    <div><button className="question" onClick={() => this.handleClick()}>
                        {this.state.shownCard}
                    </button></div>
            </div>);
        }
}

// ========================================

ReactDOM.render(
    <FlashCards />,
    document.getElementById('root')
);