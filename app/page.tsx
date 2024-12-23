"use client"
import React from "react";
import MultiStepForm from "./components/MultiStepForm";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome To INU</h1>
      <p>INU is a platform that connects dog owners with dog services.</p>
      <p>Answer a few questions, and we’ll recommend the perfect service for your dog!</p>
      <MultiStepForm />
    </div>
  );
}