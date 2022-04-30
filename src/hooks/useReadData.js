import { useCallback, useEffect, useState } from "react";
import { getCollection } from "../scripts/firebase/fireStore";
import onFailure from "../scripts/logic/onFailure";

export default function useReadData(updateContextStateFunction, path) {
  const [status, setStatus] = useState(0);

  const readData = useCallback(
    async (updateContextStateFunction) => {
      try {
        const collectionCategories = await getCollection(path);
        updateContextStateFunction(collectionCategories);
        setStatus(1);
      } catch (error) {
        onFailure(error);
      }
    },
    [path]
  );

  useEffect(() => {
    readData(updateContextStateFunction);
  }, [readData, updateContextStateFunction]);
  return { status };
}
