import "./App.css";
import ColumnDate from "./components/ColumnDate";
import { DragDropContext } from "react-beautiful-dnd";

const datas = [
  {
    dayOfWeek: "MON",
    exercises: [],
  },
  {
    dayOfWeek: "TUE",
    exercises: [
      {
        name: "Chest day",
        exerciseItems: [
          {
            name: "Bench Press",
            count: "3x",
            content: "50lb x 5",
          },
          {
            name: "Bench Press",
            count: "1x",
            content: "40lb x 5",
          },
        ],
      },
    ],
  },
  {
    dayOfWeek: "THU",
    exercises: [
      {
        name: "Leg Day",
        exerciseItems: [
          {
            name: "Exercise C",
            count: "1x",
            content: "50lb x 5",
          },
          {
            name: "Exercise D",
            count: "1x",
            content: "40lb x 5",
          },
          {
            name: "Exercise E",
            count: "1x",
            content: "40lb x 5",
          },
        ],
      },
      {
        name: "Arm Day",
        exerciseItems: [
          {
            name: "Exercise F",
            count: "1x",
            content: "50lb x 5",
          },
        ],
      },
    ],
  },
  {
    dayOfWeek: "THU",
    exercises: [],
  },
  {
    dayOfWeek: "FRI",
    exercises: [],
  },
  {
    dayOfWeek: "SAT",
    exercises: [],
  },
  {
    dayOfWeek: "SUN",
    exercises: [],
  },
];

function App() {
  const today = new Date();
  const onDragEnd = () => null;
  return (
    <div className="App">
      {datas.map((data, i) => (
        <ColumnDate
          key={i}
          dayOfWeek={data.dayOfWeek}
          date={today.getDate() - (today.getDay() - i)}
          isActive={today.getDay() === i + 1}
          exercises={data.exercises}
        />
      ))}
    </div>
  );
}

export default App;
