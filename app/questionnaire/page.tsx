"use client"
import React, { useState } from "react";
import MultiStepForm from "../components/MultiStepForm";
import Result from "../components/Result";

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

const QuestionnairePage: React.FC = () => {
    const [answers, setAnswers] = useState<string[]>([]);
    const [showResult, setShowResult] = useState(false);

    const handleFinish = (finalAnswers: string[]) => {
        setAnswers(finalAnswers);
        setShowResult(true);
    };

    const handleRestart = () => {
        setAnswers([]);
        setShowResult(false);
    };

    return (
        <div className="questionnaire-container">
            {showResult ? (
                <Result answers={answers} questions={questions} onRestart={handleRestart} />
            ) : (
                <React.Fragment>
                    <h1>Questionnaire</h1>
                    <p>Answer the following questions to get the best service recommendation for your dog.</p>
                    <MultiStepForm onFinish={handleFinish} />
                </React.Fragment>
            )}
        </div>
    );
};

export default QuestionnairePage;