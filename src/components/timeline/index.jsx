import React from "react";
import useData from "../../hooks/useData";
import { calculateDays } from "../../utils";
import Event from "../event";

import "./styles.css";

function Timeline() {
  const { data, updateData } = useData();

  // Getting the earliest and latest dates for the timeline
  const startDate = new Date(
    Math.min(...data.map((event) => new Date(event.start).getTime()))
  );
  const endDate = new Date(
    Math.max(...data.map((event) => new Date(event.end).getTime()))
  );
  const numberOfDays =
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
  const days = calculateDays(startDate, numberOfDays);

  return (
    <div className="timeline__container">
      <div className="timeline__days-grid">
        {days.map((day, index) => (
          <div key={index} className="timeline-day roboto-regular">
            {day}
          </div>
        ))}
      </div>

      <div className="timeline__events-grid">
        {data.map((event) => (
          <Event key={event.id} eventId={event.id} startDate={startDate} />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
