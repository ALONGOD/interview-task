"use client"
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome To INU</h1>
      <p>INU is a platform that connects dog owners with dog services.</p>
      <p>Answer a few questions, and we’ll recommend the perfect service for your dog!</p>
      <Link href="/questionnaire">
        <button>Go to questionnaire</button>
      </Link>
      <img src="../public/pngtree-puppy-labrador-retriever-cute-dog-animal-png-image_9993729.png" alt="Dog" />
    </div>
  );
}

