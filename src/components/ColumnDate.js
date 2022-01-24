import React from "react";
import "./columnDate.css";
import Exercise from "./Exercise";
import { Droppable } from "react-beautiful-dnd";

export default function ColumnDate({ dayOfWeek, date, isActive, exercises }) {
  return (
    <div className="container">
      <h2 className="date-title">{dayOfWeek}</h2>
      <div className="date-column">
        <h3 className={`date-column-title ${isActive ? "active" : ""}`}>
          {date}
        </h3>
        {exercises.map((exercise) => (
          <Exercise exercise={exercise} />
        ))}
      </div>
    </div>
  );
}
