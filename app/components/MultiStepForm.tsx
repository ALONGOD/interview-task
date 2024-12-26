import React, { useState } from "react";
import Question from "./Question";

interface MultiStepFormProps {
    onFinish: (answers: string[]) => void;
}

const questions = [
    {
        question: "How often does your dog require attention during the day?",
        options: ["A couple of times", "Constant supervision and care", "Only for exercise or walks"],
    },
    {
        question: "What is your dog’s activity level?",
        options: ["Low", "Moderate", "High"],
    },
    {
        question: "How often do you need someone to care for your dog?",
        options: ["Occasionally", "Daily", "Weekly"],
    },
    {
        question: "Does your dog have any special requirements?",
        options: ["Yes, requires medication or extra care", "No, just regular care"],
    },
    {
        question: "How does your dog interact with other dogs?",
        options: ["Loves to socialize and play", "Gets along with select dogs", "Prefers to stay alone"],
    },
    {
        question: "What’s the typical duration of care you’re looking for?",
        options: ["A few hours", "Half a day", "Full day or more"],
    },
    {
        question: "Where do you prefer your dog to stay during care?",
        options: ["At home", "At someone else’s place", "No preference"],
    },
];

const MultiStepForm: React.FC<MultiStepFormProps> = ({ onFinish }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [showCelebration, setShowCelebration] = useState(false);

    const handleNext = (answer: string) => {
        setAnswers([...answers, answer]);
        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setCurrentStep(currentStep + 1);
            setShowCelebration(true);
            setTimeout(() => {
                setShowCelebration(false);
                onFinish([...answers, answer]);
            }, 2000);
        }
    };

    const progressPercentage = (currentStep / (questions.length)) * 100;

    return (
        <div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
            {showCelebration ? (
                <div className="celebration">🎉 Congratulations! 🎉</div>
            ) : (
                <Question
                    question={questions[currentStep].question}
                    options={questions[currentStep].options}
                    onNext={handleNext}
                />
            )}
        </div>
    );
};

export default MultiStepForm;