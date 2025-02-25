import { useState, useEffect } from "react";

const useFetcher = (uri) => {
  const [isLoader, setIsLoader] = useState(true); // Initial loading state
  const [data, setData] = useState(null); // Initial data state
  const [error, setError] = useState(null); // Initial error state

  useEffect(() => {
    // Define the async function for data fetching
    const fetchData = async () => {
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FsbGluLndlYnNpdGU0eW91LmNvLmluL2FwaS92MS92ZXJpZnktb3RwIiwiaWF0IjoxNzM3MzczOTMzLCJleHAiOjE3NDYwMTM5MzMsIm5iZiI6MTczNzM3MzkzMywianRpIjoicGdJSUpjSmV5MDJwVklKaCIsInN1YiI6IjExNiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.210vr3pZqf5661S69T1yHxDtiFAzpOsgPXfEjCSHfwc';

      try {
        const response = await fetch(uri, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        const result = await response.json();

        if (result.status_code === 200) {
          setData(result.data.userList);
        } else {
          setError("Failed to fetch data.");
        }
      } catch (err) {
        setError(err.message || "An unexpected error occurred.");
      } finally {
        setIsLoader(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoader, error };
};

export default useFetcher;
