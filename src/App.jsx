import React from 'react'

export default function App() {
  const completed = false;
  return (
    <div>
      <h1>Did you completed your Engineering ? </h1>
      <h1 className={`${completed ? "text-green-500":"text-red-500"}`}>
        {(completed && " Yes Completed")}
        {(completed || " No not Completed")}
      </h1>
    </div>
  );
}
