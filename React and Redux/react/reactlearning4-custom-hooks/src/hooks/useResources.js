import { useState, useEffect } from "react";

export const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    setResources([resource]);
  }, [resource]);

  return resources;
};
