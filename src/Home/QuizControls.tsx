import { Button } from "@/components/ui/button";
import { completeQuiz, nextQuestion, previousQuestion } from "@/redux/features/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export const QuizControls = () => {
    const dispatch = useAppDispatch();
    const { questions, currentQuestionIndex, userAnswer, quizComplete } = useAppSelector((state) => state.quiz)
    const isAnswerSelected = userAnswer[currentQuestionIndex] !== null;
    const handleNext = () => {
        if (isAnswerSelected) {
            dispatch(nextQuestion());
        }
    }
    const handlePrevious = () => {
        dispatch(previousQuestion());
    }

    const handleCompleteQuiz = () => {
        dispatch(completeQuiz())
    }
    return (
        <div className="flex justify-between mt-3 px-6">
            <Button onClick={handlePrevious}>Previous</Button>
            <Button onClick={handleNext}>Next</Button>
            {currentQuestionIndex === questions.length - 1 && !quizComplete &&
                (
                    <Button onClick={handleCompleteQuiz}>
                        Complete Quiz
                    </Button>
                )
            }
        </div>
    );
};

