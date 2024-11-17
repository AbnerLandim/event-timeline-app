import { useState, useMemo } from "react";
import INITIAL_DATA from "../data/timelineItems";
import { calculateLanes } from "../utils";

function useData() {
  const [data, setData] = useState(INITIAL_DATA);

  const eventsWithLanes = useMemo(() => {
    return calculateLanes(data).sort(
      (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
    );
  }, [data]);

  function updateData(newData = {}) {
    setData((prev) => {
      const isUpdated = prev.some((each) => each.id === newData.id);
      if (!isUpdated) {
        return prev;
      }

      const updatedData = prev.map((each) =>
        each.id === newData.id ? { ...each, ...newData } : each
      );

      return updatedData;
    });
  }

  return {
    data: eventsWithLanes,
    updateData,
  };
}

export default useData;
