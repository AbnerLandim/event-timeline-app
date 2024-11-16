import React from "react";

import "./styles.css";

function Event({ event = {}, startDate = new Date() }) {
  const eventStart = new Date(event.start).getTime();
  const eventEnd = new Date(event.end).getTime();
  const startOffset = Math.floor(
    (eventStart - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  const eventDuration = Math.ceil(
    (eventEnd - eventStart) / (1000 * 60 * 60 * 24) + 1
  );
  return (
    <div
      key={event.id}
      className="event__container"
      style={{
        gridColumn: `${startOffset + 1} / span ${eventDuration}`,
        gridRow: event.lane + 1,
      }}
    >
      <strong className="roboto-medium">{event.name}</strong>
    </div>
  );
}

export default Event;
