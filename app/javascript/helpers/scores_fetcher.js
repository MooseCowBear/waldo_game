import { useEffect, useState } from "react";

export default useScores = () => {
  const [scores, setScores] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const url = "/api/v1/scores/index";
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setScores(data);
        setError(null);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return { scores, error, loading };
};