const jerseys = [
  { year: "2024", type: "Home", src: "/jerseys/2024.jpg" },
  { year: "2024", type: "Away", src: "/jerseys/2024-away.jpg" },
  { year: "2023", type: "Home", src: "/jerseys/2023.jpg" },
  { year: "2023", type: "Away", src: "/jerseys/2023-away.jpg" },
  { year: "2022", type: "Home", src: "/jerseys/2022.jpg" },
  { year: "2022", type: "Away", src: "/jerseys/2022-away.jpg" },
  { year: "2021", type: "Home", src: "/jerseys/2021.jpg" },
  { year: "2021", type: "Away", src: "/jerseys/2021-away.jpg" },
  { year: "2020", type: "Home", src: "/jerseys/2020.jpg" },
  { year: "2020", type: "Away", src: "/jerseys/2020-away.jpg" },
];

export default function Jerseys() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">FC Barcelona Jerseys</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {jerseys.map((jersey, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center"
          >
            <img
              src={jersey.src} // Updated to use curly braces
              alt={`${jersey.year} ${jersey.type} Jersey`}
              className="w-[300px] h-[300px] object-cover rounded-lg mb-4 mx-auto"
            />
            <h3 className="text-2xl font-semibold mb-2">
              {jersey.year} {jersey.type} Jersey
            </h3>
            <p className="mb-4">Official FC Barcelona jersey</p>
            <button className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              View Details
            </button>
          </div>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Explore More Jerseys</h2>
        <p className="mb-6">
          Discover our collection of classic and vintage FC Barcelona jerseys.
        </p>
        <button className="px-4 py-2 bg-yellow-400 text-blue-900 rounded-md hover:bg-yellow-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
          View Classic Jerseys
        </button>
      </div>
    </div>
  );
}
