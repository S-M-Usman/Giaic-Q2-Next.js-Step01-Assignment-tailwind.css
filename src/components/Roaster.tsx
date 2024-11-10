import React from "react";


interface Player {
  firstName: string;
  lastName: string;
  position: "goalkeeper" | "defender" | "midfielder" | "forward";
  imageUrl: string;
}

interface Staff {
  name: string;
  role: string;
  imageUrl: string;
}

const players: Player[] = [
  // Goalkeepers
  {
    firstName: "Marc-André",
    lastName: "ter Stegen",
    position: "goalkeeper",
    imageUrl: "/home-players/01.webp",
  },
  {
    firstName: "",
    lastName: "Peña",
    position: "goalkeeper",
    imageUrl: "/home-players/13.webp",
  },
  {
    firstName: "Wojciech",
    lastName: "Szczęsny",
    position: "goalkeeper",
    imageUrl: "/home-players/25.webp",
  },
  // Defenders
  {
    firstName: "Pau",
    lastName: "Cubarsí",
    position: "defender",
    imageUrl: "/home-players/02.webp",
  },
  {
    firstName: "Alejandro",
    lastName: "Balde",
    position: "defender",
    imageUrl: "/home-players/03.webp",
  },
  {
    firstName: "Ronald",
    lastName: "Araújo",
    position: "defender",
    imageUrl: "/home-players/04.webp",
  },
  {
    firstName: "Iñigo",
    lastName: "Martínez",
    position: "defender",
    imageUrl: "/home-players/05.webp",
  },
  {
    firstName: "Andreas",
    lastName: "Christensen",
    position: "defender",
    imageUrl: "/home-players/15.webp",
  },
  {
    firstName: "Jules",
    lastName: "Koundé",
    position: "defender",
    imageUrl: "/home-players/23.webp",
  },
  {
    firstName: "Eric",
    lastName: "Garcia",
    position: "defender",
    imageUrl: "/home-players/24.webp",
  },
  // Midfielders

  {
    firstName: "Gavi",
    lastName: "",
    position: "midfielder",
    imageUrl: "/home-players/06.webp",
  },
  {
    firstName: "Pedri",
    lastName: "González",
    position: "midfielder",
    imageUrl: "/home-players/08.webp",
  },
  {
    firstName: "Pablo",
    lastName: "Torre",
    position: "midfielder",
    imageUrl: "/home-players/14.webp",
  },
  {
    firstName: "Fermín",
    lastName: "López",
    position: "midfielder",
    imageUrl: "/home-players/16.webp",
  },
  {
    firstName: "Marc",
    lastName: "Casadó",
    position: "midfielder",
    imageUrl: "/home-players/17.webp",
  },
  {
    firstName: "Dani",
    lastName: "Olmo",
    position: "midfielder",
    imageUrl: "/home-players/20.webp",
  },
  {
    firstName: "Frenkie",
    lastName: "de Jong",
    position: "midfielder",
    imageUrl: "/home-players/21.webp",
  },

  // Forwards
  {
    firstName: "Ferran",
    lastName: "Torres",
    position: "forward",
    imageUrl: "/home-players/07.webp",
  },
  {
    firstName: "Robert",
    lastName: "Lewandowski",
    position: "forward",
    imageUrl: "/home-players/09.webp",
  },
  {
    firstName: "Ansu",
    lastName: "Fati",
    position: "forward",
    imageUrl: "/home-players/10.webp",
  },
  {
    firstName: "",
    lastName: "Raphinha",
    position: "forward",
    imageUrl: "/home-players/11.webp",
  },
  {
    firstName: "",
    lastName: "Victor",
    position: "forward",
    imageUrl: "/home-players/18.webp",
  },
  {
    firstName: "Lamine",
    lastName: "Yamal",
    position: "forward",
    imageUrl: "/home-players/19.webp",
  },
];

const staff: Staff[] = [
  { name: "HANSI FLICK", role: "Coach", imageUrl: "/home-players/00.webp" },
  {
    name: "MARCUS SORG",
    role: "ASSISTANT COACH",
    imageUrl: "/api/placeholder/400/400",
  },
  {
    name: "TONI TAPALOVIC",
    role: "ASSISTANT COACH",
    imageUrl: "/api/placeholder/400/400",
  },
  {
    name: "HEIKO WESTERMANN",
    role: "ASSISTANT COACH",
    imageUrl: "/api/placeholder/400/400",
  },
  {
    name: "JOSÉ RAMÓN DE LA FUENTE",
    role: "GOALKEEPING COACH",
    imageUrl: "/api/placeholder/400/400",
  },
  {
    name: "JULIO TOUS",
    role: "HEAD OF FITNESS TRAINING",
    imageUrl: "/api/placeholder/400/400",
  },
  {
    name: "PEPE CONDE",
    role: "FIELD FITNESS COACH",
    imageUrl: "/api/placeholder/400/400",
  },
  {
    name: "RAFA MALDONADO",
    role: "FIELD FITNESS COACH",
    imageUrl: "/api/placeholder/400/400",
  },
];

const PlayerCard: React.FC<{ player: Player }> = ({ player }) => (
  <div className="relative overflow-hidden rounded-lg">
    <div className="aspect-square relative">
      <img
        src={player.imageUrl}
        alt={`${player.firstName} ${player.lastName}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 p-4 text-white z-10">
        {player.firstName && (
          <div className="text-sm opacity-75">{player.firstName}</div>
        )}
        <div className="text-xl font-bold">{player.lastName}</div>
      </div>
    </div>
  </div>
);

const StaffCard: React.FC<{ staff: Staff }> = ({ staff }) => (
  <div className="relative overflow-hidden rounded-lg">
    <div className="aspect-square relative">
      <img
        src={staff.imageUrl}
        alt={staff.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 p-4 text-white z-10">
        <div className="text-xl font-bold">{staff.name}</div>
        <div className="text-sm opacity-75">{staff.role}</div>
      </div>
    </div>
  </div>
);

const StaffTable: React.FC<{ staff: Staff[] }> = ({ staff }) => (
  <div className="w-full mt-4">
    <table className="w-full">
      <tbody>
        {staff.slice(1).map((member) => (
          <tr key={member.name} className="border-t border-gray-200">
            <td className="py-3 text-sm font-medium">{member.role}</td>
            <td className="py-3 text-sm text-right">{member.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const TeamRoster: React.FC = () => {
  const goalkeepers = players.filter((p) => p.position === "goalkeeper");
  const defenders = players.filter((p) => p.position === "defender");
  const midfielders = players.filter((p) => p.position === "midfielder");
  const forwards = players.filter((p) => p.position === "forward");

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">GOALKEEPERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {goalkeepers.map((player) => (
            <PlayerCard key={player.lastName} player={player} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">DEFENDERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {defenders.map((player) => (
            <PlayerCard key={player.lastName} player={player} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">MIDFIELDERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {midfielders.map((player) => (
            <PlayerCard key={player.lastName} player={player} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">FORWARDS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {forwards.map((player) => (
            <PlayerCard key={player.lastName} player={player} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">COACHING STAFF</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StaffCard staff={staff[0]} />
        </div>
        <StaffTable staff={staff} />
      </section>
    </div>
  );
};

export default TeamRoster;
