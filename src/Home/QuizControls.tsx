import { Button } from "@/components/ui/button";
import { completeQuiz, nextQuestion, previousQuestion } from "@/redux/features/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export const QuizControls = () => {
    const dispatch = useAppDispatch();
    const { questions, currentQuestionIndex, userAnswer, quizComplete } = useAppSelector((state) => state.quiz)
    const isAnswerSelected = userAnswer[currentQuestionIndex] !== null;
    const isCompleteEnable = isAnswerSelected || currentQuestionIndex !== questions.length -1;
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
            <Button onClick={handlePrevious}
            disabled={currentQuestionIndex === 0 || quizComplete}
            >Previous</Button>
            {currentQuestionIndex < questions.length - 1 && !quizComplete && (
                <Button onClick={handleNext}
                disabled={!isAnswerSelected}
                >Next</Button>
            )}
            {currentQuestionIndex === questions.length - 1 && !quizComplete &&
                (
                    <Button onClick={handleCompleteQuiz}
                    disabled={!isCompleteEnable}
                    >
                        Complete Quiz
                    </Button>
                )
            }
        </div>
    );
};

