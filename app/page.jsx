// app/page.tsx
'use client';
import React from 'react';
import CharacterList from './components/CharacterList'; 

export default function Home() {
  return (
    <main>
      <div>
        <h1>Rick and Morty Character Images</h1>
        <CharacterList />
      </div>
    </main>
  );
}