import React from "react";

import "./styles.css";

function Event({ event = {}, startDate = new Date() }) {
  const eventStart = new Date(event.start).getTime();
  const eventEnd = new Date(event.end).getTime();
  const startOffset = Math.floor(
    (eventStart - startDate.getTime()) / (1000 * 60 * 60 * 24)
  ); // We need an offset to know where to place each event, so we get a number that represents how many days in advance we are from the beginning of the agenda.
  const eventDuration = Math.ceil(
    (eventEnd - eventStart) / (1000 * 60 * 60 * 24) + 1
  ); // In here we calculate how many days an event takes, and we add 1 to ensure we have at least a day filled in the agenda.
  return (
    <div
      key={event.id}
      className="event__container"
      style={{
        gridColumn: `${startOffset + 1} / span ${eventDuration}`,
        gridRow: event.lane + 1,
      }}
      title={`${event.name} (${event.start} - ${event.end})`} // Usability for hovering
    >
      <strong className="roboto-medium">{event.name}</strong>
      <span className="event__description roboto-thin">
        {event.start} - {event.end}
      </span>
    </div>
  );
}

export default Event;
