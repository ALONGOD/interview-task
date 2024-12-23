"use client"
import React from "react";
import MultiStepForm from "../components/MultiStepForm";

export default function Questionnaire() {
    return (
        <div className="questionnaire-container">
            <h1>Questionnaire</h1>
            <p>Answer the following questions to get the best service recommendation for your dog.</p>
            <MultiStepForm />
        </div>
    );
}