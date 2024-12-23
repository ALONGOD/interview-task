// "use client"
// import React from "react";
// export const Tutorial = ({ stages, onComplete }) => {
//     const [currentStageNum, setCurrentStageNum] = React.useState(0);
//     const currentStage = stages[currentStageNum];
//     function handleButtonClick(value) {
//         if (currentStageNum + value < 0 || currentStageNum + value >= stages.length) {
//             onComplete();
//             return;
//         }
//         setCurrentStageNum(currentStageNum + value);
//     }

//     return (
//         <div>
//             <h1>Stages</h1>
//             <div>
//                 <h2>{currentStage.title}</h2>
//                 <img src={currentStage.image} alt={currentStage.title} />
//                 <p>{currentStage.description}</p>
//             </div>
//             <button onClick={() => handleButtonClick(-1)}>-</button>
//             <button onClick={() => handleButtonClick(1)}>+</button>
//         </div >
//     )



// }