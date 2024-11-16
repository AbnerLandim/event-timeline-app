import React from "react";
import useData from "../../hooks/useData";

import "./styles.css";

function Timeline() {
  const { data } = useData();

  // Getting the earliest and latest dates for the timeline
  const startDate = new Date(
    Math.min(...data.map((event) => new Date(event.start).getTime()))
  );
  const endDate = new Date(
    Math.max(...data.map((event) => new Date(event.end).getTime()))
  );

  const totalDays =
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);

  const days = Array.from({ length: totalDays + 1 }, (_, i) => {
    const currentDate = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000); // Here we are converting UNIX timestamps to days
    return currentDate.toISOString().split("T")[0]; // Taking only the YYYY-MM-DD part
  });

  return (
    <div className="timeline__container">
      <div className="timeline__days-grid">
        {days.map((day, index) => (
          <div key={index} className="timeline-day roboto-regular">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
