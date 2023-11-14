import { useEffect, useState } from 'react';
import axios from 'axios';

function useGetHomePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/v1/home');

        if (response.status !== 200) {
          throw new Error(`Failed to fetch data`);
        }

        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}

export default useGetHomePage;