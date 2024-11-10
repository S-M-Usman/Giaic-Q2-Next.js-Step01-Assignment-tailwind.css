import React from "react";

interface Player {
  firstName: string;
  lastName: string;
  country: string;
  imageUrl: string;
}

const players: Player[] = [
  {
    firstName: "Lionel",
    lastName: "Messi",
    country: "Argentina",
    imageUrl: "/legends/1.webp",
  },
  {
    firstName: "",
    lastName: "Neymar Jr",
    country: "Brazil",
    imageUrl: "/legends/3.jpg",
  },
  {
    firstName: "",
    lastName: "Iniesta",
    country: "Spain",
    imageUrl: "/legends/2.jpg",
  },
  {
    firstName: "",
    lastName: "Ronaldinho",
    country: "Brazil",
    imageUrl: "/legends/5.jpg",
  },
  {
    firstName: "Luis",
    lastName: "Suarez",
    country: "Uruguay",
    imageUrl: "/legends/6.jpg",
  },
];

const PlayerCard = ({ player }: { player: Player }) => (
  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="aspect-square relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
      <img
        src={player.imageUrl}
        alt={`${player.firstName} ${player.lastName}`.trim()}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 p-4 text-white z-20">
        {player.firstName && (
          <div className="text-sm font-medium opacity-90">
            {player.firstName}
          </div>
        )}
        <div className="text-xl font-bold">{player.lastName}</div>
        <div className="text-sm mt-1 opacity-75">{player.country}</div>
      </div>
    </div>
  </div>
);

export default function PlayersPage() {
  return (
    <main className="min-h-screen bg-blue-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Legendary Players
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {players.map((player, index) => (
            <PlayerCard key={`${player.lastName}-${index}`} player={player} />
          ))}
        </div>
      </div>
    </main>
  );
}
