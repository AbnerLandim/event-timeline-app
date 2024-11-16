import { useState } from "react";
import INITIAL_DATA from "../data/timelineItems";
import { calculateLanes } from "../utils";

function useData() {
  const [data, setData] = useState(INITIAL_DATA);

  const eventsWithLanes = calculateLanes(data).sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
  );

  function updateData(id = null, newData = {}) {
    // setData
  }

  return {
    data: eventsWithLanes,
    updateData,
  };
}

export default useData;
