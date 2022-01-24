import React from "react";
import "./exercise.css";
import ExerciseItem from "./ExerciseItem";
import { Draggable } from "react-beautiful-dnd";

export default function Exercise({ exercise }) {
  return (
    <div className="exercise-container">
      <span className="exercise-title">{exercise.name}</span>
      {exercise.exerciseItems.map((exerciseItem) => (
        <ExerciseItem exerciseItem={exerciseItem} />
      ))}
      <button className="exercise-button">+</button>
    </div>
  );
}
