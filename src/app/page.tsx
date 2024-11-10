import Image from "next/image";


export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="/hero-img1.png"
          alt="FC Barcelona Stadium"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to FC Barcelona</h1>
          <p className="text-xl mb-8">More than a club</p>
        </div>
      </section>

      {/* Top Players */}
      
        <div>
          {/* <PlayerSlider /> */}
          {/* Other content */}
        </div>
    </div>
  );
}
