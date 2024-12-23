import React from "react";

interface ResultProps {
    answers: string[];
    onRestart: () => void;
}

const services = ["Dog Sitter", "Dog Host", "Dog Walker", "Daycare"];

const getRecommendation = (answers: string[]) => {
    // Implement your logic here to determine the best service based on answers
    return services[Math.floor(Math.random() * services.length)];
};

const Result: React.FC<ResultProps> = ({ answers, onRestart }) => {
    const recommendation = getRecommendation(answers);

    return (
        <div>
            <h2>Summary of your answers:</h2>
            <ul>
                {answers.map((answer, index) => (
                    <li key={index}>{answer}</li>
                ))}
            </ul>
            <h3>We recommend: {recommendation}</h3>
            <button onClick={onRestart}>Start Again</button>
        </div>
    );
};

export default Result;