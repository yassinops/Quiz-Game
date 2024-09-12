import React, {Component} from "react";
import axios from "axios";

import history from '../../assets/histQ.png';
import Searchbar from "../navbarComponent/searchbar";
import Correct from "../answers/correct";
import Popup from "../popupComponent/popup";
import Secpopup from "../popupComponent/secpopup";
import Incorrect from "../answers/incorrect";

class Historyquestions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            currentIndex: 0, /*that tracks which question is currently displayed
                            and that will be updated when it goes to the next question*/
            timeLeft: 30,
            selectedAnswer: '',
            isReviewing: false,
            previousAnswer: [],// here where we're going to stock the selected answers
        };
    }

    handleAnswer = (answer) => {
        this.setState((prevState) => {
            const updateAnswer = [...prevState.previousAnswer];
            updateAnswer[prevState.currentIndex] = answer;

            return {
                selectedAnswer: answer,
                previousAnswer: updateAnswer,
            }
        })
    }

    handleNext = () => {
        this.setState((prevState) => ({
            currentIndex: Math.min(prevState.currentIndex + 1, prevState.questions.length),
            selectedAnswer: prevState.previousAnswer[prevState.currentIndex + 1] || '',
        }));
    }
    handlePrevious = () => {
        this.setState((prevState) => ({
            currentIndex: Math.max(prevState.currentIndex - 5, 0),
            selectedAnswer: prevState.previousAnswer[Math.max(prevState.currentIndex - 5, 0)] || null,
            isReviewing: true
        }))
    }

    componentDidMount() {
        //retrieving data from the url
        axios.get('https://opentdb.com/api.php?amount=5&category=23&difficulty=medium')
            .then(res => {
                this.setState({questions: res.data.results});
            });
        //setting time
        this.timer = setInterval(() => {
            this.setState((prevState) => ({
                timeLeft: prevState.timeLeft - 0.1,
            }))
        }, 1000);
    }

    componentDidUpdate() {
        if (this.state.timeLeft === 0) {
            clearInterval(this.timer); // Stop the timer when time runs out
            // You can also handle what happens when the timer reaches 0, like moving to the next question
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer); // Clean up the timer when the component unmounts
    }

    render() {
        const {questions, currentIndex, timeLeft, selectedAnswer, previousAnswer, isReviewing} = this.state;


        let currentQuestion;
        if (questions.length > 0)
            currentQuestion = questions[currentIndex];

        return (
            <div>
                <Searchbar/>
                <div className=" absolute top-[15%] left-[20%] rounded-2xl shadow-2xl p-2"
                     style={{width: '70%', height: '80%'}}>
                    <div className="flex w-full justify-between pl-8 pt-4 ">
                        <div>
                            <h1 className="text-[#696F79] font-bold text-xl">{currentQuestion ? currentQuestion.category : 'loading..'} Quiz</h1>
                            <p className="text-[#696F79]">Answer the question below</p>
                        </div>
                        <div>
                            <h1 className="text-[#696F79] font-bold text-xl pr-2">Timer:{timeLeft} Mins</h1>
                        </div>
                    </div>
                    {currentQuestion && (
                        <div>
                            <div className="flex w-full ">
                                <img src={history} alt={"history"} style={{width: '30%'}}/>
                                <div className="pt-5">
                                    <h1
                                        className="text-[#696F79] text-xl font-semibold">
                                        Question {currentIndex + 1}/{questions.length}
                                    </h1>
                                    <h2
                                        className="text-[#696F79] pt-2 min-w-full">
                                        {currentQuestion.question}
                                    </h2>
                                </div>
                            </div>

                            <div className=" pl-5">
                                <h2 className="text-[#696F79] font-semibold text-xl pb-2">Choose answer</h2>
                                <ul>
                                    {currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer).map((answer, counter) => (
                                        <li className="text-[#696F79] p-2"
                                            key={counter}>
                                            <div className="flex ">
                                                <input type={"radio"}
                                                       value={answer}
                                                       name={`question-${this.state.currentIndex}`}
                                                       checked={previousAnswer[currentIndex] === answer}
                                                       onChange={() => this.handleAnswer(answer)}
                                                />{answer}
                                                <div className="pl-4 ">
                                                    {isReviewing && previousAnswer[currentIndex]===answer && (
                                                        /*console.log("Selected Answer: ", selectedAnswer),
                                                        console.log("Correct Answer: ", currentQuestion.correct_answer),
                                                         console.log('previousAnswer',previousAnswer),*/
                                                        previousAnswer[currentIndex] === currentQuestion.correct_answer ?
                                                            <Correct/> :
                                                            <Incorrect/>
                                                    )}
                                                </div>

                                            </div>

                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                    {currentIndex === 5 && (
                        <Secpopup ToPopup={this.handlePrevious}/>
                    )}
                    {/*   {currentIndex === 5 && (
                                <Popup />
                    )}*/}
                    <div className="absolute top-0 left-[35%]">
                    </div>
                    <div className="flex justify-end" onClick={this.handleNext}>
                        <button className="text-white bg-[#8692A6] w-1/6  p-2 rounded-2xl">next</button>
                    </div>
                    {/*<div className="flex justify-end pt-5" onClick={this.handlePrevious}>
                        <button className="text-white bg-[#8692A6] w-1/6  p-2 rounded-2xl">previous</button>
                    </div>*/}
                </div>
            </div>
        );
    }
}

export default Historyquestions;