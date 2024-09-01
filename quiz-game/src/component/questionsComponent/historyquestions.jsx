import React, {Component} from "react";
import axios from "axios";

import history from '../../assets/histQ.jpg';

class Historyquestions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            currentIndex:0, /*that tracks which question is currently displayed
                            and that will updated when it goes to the next question*/
        };
    }

    handleNext=()=>{
        this.setState((prevState)=>({
            currentIndex: Math.min(prevState.currentIndex +1 ,prevState.questions.length -1)
        }));
    }

    handlePrevious=()=>{
        this.setState((prevState)=>({
            currentIndex: Math.max(prevState.currentIndex -1,0)
        }))
    }
    componentDidMount() {
        axios.get('https://opentdb.com/api.php?amount=5&category=23&difficulty=medium')
            .then(res => {
                this.setState({questions: res.data.results});
            });
    }

    render() {
        const {questions,currentIndex} = this.state;

        let currentQuestion;
        if (questions.length>0)
            currentQuestion=questions[currentIndex];


        return (
            <div>
                <div className="flex w-1/2 justify-between border-2 border-black ml-12">
                    <div>
                        <h1>{currentQuestion? currentQuestion.category:'loading..'} Quiz</h1>
                        <p>Answer the question below</p>
                    </div>
                    <div>
                        <h1>Timer</h1>
                    </div>
                </div>

                <div className="flex border-2 border-black w-1/2 ml-12">
                    <img src={history} alt={"history"}/>
                </div>
                <div className=" w-1/2 border-2 border-black ml-12">
                    {currentQuestion && (
                            <div>
                                <h2>{currentQuestion.question}</h2>
                                <ul>
                                    {currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer).map((answer, counter) => (
                                        <li key={counter}><input type={"radio"}/>{answer}</li>
                                    ))}
                                </ul>
                            </div>
                    )}
                    <div className="flex justify-end" onClick={this.handleNext}>
                        <button className="text-white bg-[#8692A6] w-1/6  p-2 rounded-2xl">next</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Historyquestions;