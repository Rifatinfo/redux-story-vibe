import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress";
import { useAppSelector } from "@/redux/hooks";

const QuizSummery = () => {
    const { questions, userAnswer } = useAppSelector((state) => state.quiz);
    const correctionAnswerCount = questions.reduce((count, questions, idx) => {
        return questions.correctAnswer === userAnswer[idx] ? count + 1 : count;
    }, 0);

    const incorrectAnswerCount = questions.length - correctionAnswerCount;
    const correctPercentage: number = parseFloat(
        ((correctionAnswerCount / questions.length) * 100).toFixed(2)
    );
    console.log(incorrectAnswerCount, correctPercentage, correctionAnswerCount);

    const getPerformance = (percentage : number) =>{
        if(percentage >= 90){
           return {
            rating : "Excellent",
            color : "bg-green-800"
           }
        } else{
            return {
            rating : "Try to better",
            color : "bg-red-800"
           }
        }
    }

    const {rating, color} = getPerformance(correctPercentage)
    
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Quiz Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>You Got {correctionAnswerCount} Out of {questions.length}</p>
                    {/* progress bar */}
                    <Progress value={correctPercentage} className={`${color}`} />
                    <div>
                        <span>{correctPercentage}%</span>
                        <span>Performance : {rating}</span>
                    </div>
                    <div>
                        <strong>Incorrect Answer </strong> <span>{incorrectAnswerCount}</span>
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