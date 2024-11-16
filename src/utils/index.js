export function calculateDays(startDate = new Date(), numberOfDays = 0) {
  const days = Array.from({ length: numberOfDays + 1 }, (_, i) => {
    const currentDate = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000); // Here we are converting UNIX timestamps to days
    return currentDate.toISOString().split("T")[0]; // Taking only the YYYY-MM-DD part
  });

  return days;
}

/*
 * Here we calculate the lanes the events can occupy. In case an event conflicts with another, we show it in a different lane.
 */
export function calculateLanes(events = {}) {
  const data = [...events].sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
  );

  const lanes = [];
  data.forEach((event) => {
    const eventStart = new Date(event.start).getTime();
    const laneIndex = lanes.findIndex(
      (lane) => new Date(lane.end).getTime() < eventStart
    );

    if (laneIndex === -1) {
      lanes.push({ ...event });
      event.lane = lanes.length - 1;
    } else {
      lanes[laneIndex] = { ...event };
      event.lane = laneIndex;
    }
  });

  return data;
}
