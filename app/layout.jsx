"use client";

import supabase from "../supabaseClient";
import "./globals.css";

export default function RootLayout({ children }) {






  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Lunatech</title>
        <meta name="author" content="Lunatech" />
        <meta
          name="description"
          content="All tech in a world that does not exist...yest!?"
        />
      </head>
      <body
        className="bg-gray-100 text-gray-900 font-sans antialiased "
        style={{ minHeight: "100vh" }}
      >
        {children}
      </body>
    </html>
  );
}
