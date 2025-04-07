"use client"

// Ce fichier exporte SupaFetch en tant que composant par défaut
import { useEffect, useState } from 'react';

export default function SupaFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      const table = process.env.NEXT_PUBLIC_SUPABASE_TABLE;

      try {
        const res = await fetch(`${url}/rest/v1/${table}?select=*`, {
          headers: {
            apikey: key,
            Authorization: `Bearer ${key}`,
          },
        });
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Erreur Supabase:", err);
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
