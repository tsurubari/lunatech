"use client";
import NavBar from '../../components/NavBar';

import { useEffect, useState } from "react";
import Link from "next/link";


const StoriesList = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await fetch("/stories.json");
        const data = await res.json();

        setStories(data.filter(story => story.status === "story"));
      } catch (error) {
        console.error("Erreur lors du chargement des stories :", error);
      }
    };

    fetchStories();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <NavBar />

      <div className="py-12 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-indigo-900 mb-2 tracking-tight">
            📚 LunaTech Library
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Dive into curated tech stories and guides by the community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-fade-in">
          {stories.map((story) => (
            <Link key={story.id} href={`/lunatech/${story.link}`} passHref>
              <div className="bg-white hover:bg-indigo-50 border border-gray-200 rounded-2xl p-5 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl cursor-pointer">
                <h3 className="text-xl font-semibold text-indigo-800">{story.title}</h3>
                <p className="text-gray-600 mt-2 line-clamp-3">{story.description}</p>
                <p className="text-sm text-indigo-400 mt-4 italic">{story.type}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoriesList;
