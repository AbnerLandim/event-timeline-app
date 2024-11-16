import { useState } from "react";
import timelineItems from "../data/timelineItems";

function useData() {
  const [data, setData] = useState(timelineItems);

  function updateData(id = null, newData = {}) {
    // setData
  }

  return {
    data,
    updateData,
  };
}

export default useData;
