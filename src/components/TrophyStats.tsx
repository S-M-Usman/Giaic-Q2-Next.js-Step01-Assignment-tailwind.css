export default function TrophyStats() {
  const trophies = [
    { name: "La Liga", count: 27, icon: "🏆" },
    { name: "UEFA Champions League", count: 5, icon: "🏆" },
    { name: "FIFA Club World Cup", count: 3, icon: "🏆" },
    { name: "Copa Del Rey", count: 31, icon: "🏆" },
  ];

  return (
    <section className="bg-[#0B0B1F] py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trophies.map((trophy) => (
            <div
              key={trophy.name}
              className="relative overflow-hidden rounded-lg"
            >
              {/* Gradient background with stripes */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-purple-900 to-blue-900">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(255, 69, 0, 0.1) 2px,
                    rgba(255, 69, 0, 0.1) 4px
                  )`,
                  }}
                ></div>
              </div>

              {/* Content */}
              <div className="relative p-6 flex flex-col items-center justify-center space-y-2">
                <div className="text-white text-sm md:text-base font-medium">
                  {trophy.name}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400 text-4xl md:text-5xl transform scale-y-90">
                    {trophy.icon}
                  </span>
                  <span className="text-yellow-400 text-4xl md:text-5xl font-bold">
                    {trophy.count}
                  </span>
                </div>
                <div className="text-white text-sm uppercase tracking-wider">
                  {trophy.count === 1 ? "TROPHY" : "TROPHIES"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
