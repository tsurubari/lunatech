"use client"

import { useEffect, useState } from 'react';
import supabase from '../supabaseClient'; // adjust path if needed

export default function SupaFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const table = process.env.NEXT_PUBLIC_SUPABASE_TABLE;

      const { data, error } = await supabase
        .from(table)
        .select('*');

      if (error) {
        console.error("Erreur Supabase:", error);
      } else {
        setData(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Données Supabase</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
