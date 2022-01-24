import React from "react";
import "./exerciseItem.css";

export default function ExerciseItem({ exerciseItem }) {
  return (
    <div className="exercise-item-container">
      <span className="exercise-item-title">{exerciseItem.name}</span>
      <div className="exercise-item-description">
        <span className="exercise-item-description-count">
          {exerciseItem.count}
        </span>
        <span className="exercise-item-description-text">
          {exerciseItem.content}
        </span>
      </div>
    </div>
  );
}
