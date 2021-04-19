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
    render(){
        const status = 'Showing the ' + (this.state.answerShown ? 'Answer' : 'Question');
        const index = this.state.jsonIndex;
        return(
            <div className="flash">
                <div className="status">{status}</div>
                    <button onClick={() => this.handleClick()}>
                        {this.state.shownCard}
                    </button>

            </div>);
        }
}



// ========================================

ReactDOM.render(
    <FlashCards />,
    document.getElementById('root')
);