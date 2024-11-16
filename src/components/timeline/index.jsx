import React from "react";
import useData from "../../hooks/useData";

function Timeline() {
  const { data } = useData();

  return (
    <div>
      {data.map((event) => (
        <code>{JSON.stringify(event)}</code>
      ))}
    </div>
  );
}

export default Timeline;
