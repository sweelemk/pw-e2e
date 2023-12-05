import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Here is Playwright test
      </h1>
      <button data-test="click-me">Click me</button>
    </main>
  )
}
