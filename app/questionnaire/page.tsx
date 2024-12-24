"use client"
import React, { useState } from "react";
import MultiStepForm from "../components/MultiStepForm";
import Result from "../components/Result";

export default function Questionnaire() {
    const [showResult, setShowResult] = useState(false);
    const [answers, setAnswers] = useState<string[]>([]);

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
                <Result answers={answers} onRestart={handleRestart} />
            ) : (
                <React.Fragment>
                    <h1>Questionnaire</h1>
                    <p>Answer the following questions to get the best service recommendation for your dog.</p>
                    <MultiStepForm onFinish={handleFinish} />
                </React.Fragment>
            )}
        </div>
    );
}