import { Button } from "@/components/ui/button";
import { nextQuestion, previousQuestion } from "@/redux/features/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export const QuizControls = () => {
    const dispatch = useAppDispatch();
    const { currentQuestionIndex , userAnswer} = useAppSelector((state) => state.quiz)
    const isAnswerSelected = userAnswer[currentQuestionIndex] !== null;
    const handleNext = () =>{
          if(isAnswerSelected){
              dispatch(nextQuestion());
          }
    }
    const handlePrevious = () =>{
          dispatch(previousQuestion());
    }
    return (
        <div className="flex justify-between mt-3 px-6">
            <Button onClick={handlePrevious}>Previous</Button>
            <Button onClick={handleNext}>Next</Button>
        </div>
    );
};

