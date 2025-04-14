export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Lunatech</h1>
      <p className="mb-8 text-lg">Lets put it simply, we created a world and we  want to present the tech part</p>
      <p className="mb-8 text-lg">All pictures are from pinterest, if you want to participate contact us</p>
      <p className="mb-8 text-lg">We link also to the origin texts</p>
      <p className="mb-8 text-lg">Help us</p>
      <div className="space-x-4">
        <a 
          href="/welcome" 
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Enter
        </a>

      </div>
    </div>
  )
}