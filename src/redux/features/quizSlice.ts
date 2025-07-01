import { quizData } from "@/Home/quiz";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: quizData,
    currentQuestionIndex: 3,
    userAnswer: Array(quizData.length).fill(null)
}
export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setAnswer: (state, action) => {
            const { questionIndex, answer } = action.payload
            state.userAnswer[questionIndex] = answer
        },
        nextQuestion : (state) =>{
            if(state.currentQuestionIndex < state.questions.length - 1){
                state.currentQuestionIndex += 1;
            }
        },
        previousQuestion : (state) => {
            if(state.currentQuestionIndex > 0){
                state.currentQuestionIndex -= 1;
            }
        }
    }
})
export const {setAnswer, nextQuestion, previousQuestion} = quizSlice.actions;
export default quizSlice.reducer; 