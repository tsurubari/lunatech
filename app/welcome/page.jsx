// app/welcome/page.jsx

"use client";
import NavBar from "../../components/NavBar";

export default function Welcome() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <NavBar />

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Welcome to LunaTech!
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Imagine a writer team that was willing to center their creation around
          a single universe.
          <br />
          A group of concept artists, illustrators, and writers who are willing
          to share their work based on that world.
          <br />
          Here is their site, you have to register, it's free. <br />
          <a
            href="https://supabase-next-imagier.vercel.app/"
            className="text-blue-500 hover:underline"
          >
            Imagier
          </a>
          <br />
          My idea is, why not to class all those SF concepts linked to that universe.
          <br />
          So, I created a database of the imaginary future.
          <br />
          This is SF and those who create this documentation are not specialists.
          <br />
          And also, all images are from Pinterest.
        </p>
      </div>
    </div>
  );
}
