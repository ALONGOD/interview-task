import React from "react";

interface ResultProps {
    answers: string[];
    questions: { question: string; options: string[] }[];
    onRestart: () => void;
}

const services = ["Dog Sitter", "Dog Host", "Dog Walker", "Daycare"];

const serviceImages: { [key: string]: string } = {
    "Dog Sitter": "https://images.pexels.com/photos/1198869/pexels-photo-1198869.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Dog Host": "https://images.pexels.com/photos/754491/pexels-photo-754491.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Dog Walker": "https://images.pexels.com/photos/7210695/pexels-photo-7210695.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Daycare": "https://images.pexels.com/photos/2853547/pexels-photo-2853547.jpeg?auto=compress&cs=tinysrgb&w=800",
};

const serviceDescriptions: { [key: string]: string } = {
    "Dog Sitter": "For dogs that require supervision at their own home, including elderly dogs or those with special needs.",
    "Dog Host": "For overnight or long-term care in a host’s home, especially for dogs that need a temporary stay while their owners are away.",
    "Dog Walker": "For dogs needing regular exercise or quick visits for bathroom breaks.",
    "Daycare": "For dogs that thrive in social settings and need daily supervision and companionship.",
};

const getRecommendation = (answers: string[]) => {
    return services[Math.floor(Math.random() * services.length)];
};

const Result: React.FC<ResultProps> = ({ answers, questions, onRestart }) => {
    const recommendation = getRecommendation(answers);
    const imageUrl = serviceImages[recommendation];
    const description = serviceDescriptions[recommendation];

    return (
        <div>
            <h2>Summary of your answers:</h2>
            <ul style={{ fontSize: '0.9em' }}>
                {answers.map((answer, index) => (
                    <li key={index}>
                        <strong>{questions[index].question}:</strong> {answer}
                    </li>
                ))}
            </ul>
            <h1>We recommend: {recommendation}</h1>
            <p>{description}</p>
            {imageUrl && <img src={imageUrl} alt={recommendation} style={{ height: '35vh', width: '100%' }} />}
            <button onClick={onRestart}>Start Again</button>
        </div>
    );
};

export default Result;