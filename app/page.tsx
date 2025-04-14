"use client";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">VintageGarage</h1>
          <ul className="flex gap-6 text-gray-600 font-medium">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="h-screen flex items-center justify-center text-center px-4 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605478371507-51fd8c9c3fa7?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="bg-black bg-opacity-60 p-10 rounded-xl mt-16">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-4">Classic Legends</h1>
          <p className="text-gray-300 text-lg md:text-xl mb-6">
            Iconic vintage cars that never go out of style.
          </p>
          <a
            href="#"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Explore Now
          </a>
        </div>
      </section>
    </>
  );
}
