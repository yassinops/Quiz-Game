import React, {Component} from "react";
import axios from "axios";

import history from '../../assets/histQ.jpg';
import Searchbar from "../searchbar";

class Historyquestions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            currentIndex: 0, /*that tracks which question is currently displayed
                            and that will updated when it goes to the next question*/
        };
    }

    handleNext = () => {
        this.setState((prevState) => ({
            currentIndex: Math.min(prevState.currentIndex + 1, prevState.questions.length - 1)
        }));
    }

    handlePrevious = () => {
        this.setState((prevState) => ({
            currentIndex: Math.max(prevState.currentIndex - 1, 0)
        }))
    }

    componentDidMount() {
        axios.get('https://opentdb.com/api.php?amount=5&category=23&difficulty=medium')
            .then(res => {
                this.setState({questions: res.data.results});
            });
    }

    render() {
        const {questions, currentIndex} = this.state;

        let currentQuestion;
        if (questions.length > 0)
            currentQuestion = questions[currentIndex];


        return (
            <div>
                <Searchbar/>
                <div className="w-auto absolute top-[15%] left-[20%] rounded-2xl shadow-md p-2">
                    <div className="flex w-full justify-between pl-8 pt-4 ">
                        <div>
                            <h1 className="text-[#696F79] font-bold text-xl">{currentQuestion ? currentQuestion.category : 'loading..'} Quiz</h1>
                            <p className="text-[#696F79]">Answer the question below</p>
                        </div>
                        <div>
                            <h1 className="text-[#696F79] font-bold text-xl">Timer</h1>
                        </div>
                    </div>
                    {currentQuestion && (
                        <div>
                            <div className="flex w-full ">
                                <img src={history} alt={"history"} className="w-1/2"/>
                                <h2 className="text-[#696F79] pt-10">{currentQuestion.question}</h2>
                            </div>

                            <div className=" pl-5">
                                <h2 className="text-[#696F79] font-bold text-xl pb-2">Choose answer</h2>
                                <ul>
                                    {currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer).map((answer, counter) => (
                                        <li className="text-[#696F79] p-2" key={counter}><input type={"radio"}/>{answer}
                                        </li>
                                    ))}
                                </ul>
                            </div>
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