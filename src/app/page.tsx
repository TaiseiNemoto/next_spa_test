'use client'

import { useEffect } from "react"

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/user')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default function Home() {
  useEffect(() => {

  }, [])

  return (
    <main>
      <h1>title</h1>
    </main>
  );
}
