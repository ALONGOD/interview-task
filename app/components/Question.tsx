import React from "react";

interface QuestionProps {
    question: string;
    options: string[];
    onNext: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, onNext }) => {
    return (
        <div>
            <h2>{question}</h2>
            {options.map((option) => (
                <button key={option} onClick={() => onNext(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
};

export default Question;