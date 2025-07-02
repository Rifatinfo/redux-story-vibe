import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress";
// import { useAppSelector } from "@/redux/hooks";

const QuizSummery = () => {
    // const {questions, userAnswer} = useAppSelector((state) => state.quiz);
    // const correctionAnswerCount = questions.reduce((count, questions, idx) => {
    //     return questions.correctAnswer === userAnswer[idx] ? count + 1 : count ;
    // })
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Quiz Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>You Got 4 Out of 10</p>
                    {/* progress bar */}
                    <Progress value={33} />
                    <div>
                        <span>40%</span>
                        <span>Performance : Good</span>
                    </div>
                    <div>
                        <strong>Incorrect Answer </strong> <span>6</span>
                    </div>
                    <div>
                        <p>Great Job keep Practicing</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default QuizSummery;