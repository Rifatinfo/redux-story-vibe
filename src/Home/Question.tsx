import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { QuizControls } from "./QuizControls";
import { setAnswer } from "@/redux/features/quizSlice";

const Question = () => {

    const { questions, currentQuestionIndex , userAnswer} = useAppSelector((state) => state.quiz)
    console.log(questions);
    const currentQuestion = questions[currentQuestionIndex];
    const currentAnswer = userAnswer[currentQuestionIndex];
    console.log(currentAnswer, currentQuestion);
    const dispatch = useAppDispatch();
    
    const handleAnsChange = (ans: string) => {
    console.log(ans);
    dispatch(setAnswer({
        questionIndex: currentQuestionIndex,
        answer: ans
    }));
    }

    return (
        <div className="max-w-md mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>{currentQuestion.question}</CardTitle>
                </CardHeader>

                <CardContent>
                    <div>
                        {currentQuestion.options.map((option, index) => (
                            <Button variant={option === currentAnswer ? "default" : "outline"} onClick={() => handleAnsChange(option)} className="w-full mt-3" key={index} size={"lg"}>{option}</Button>
                        ))}
                    </div>
                </CardContent>
                <QuizControls/>
            </Card>
        </div>
    );
};

export default Question;