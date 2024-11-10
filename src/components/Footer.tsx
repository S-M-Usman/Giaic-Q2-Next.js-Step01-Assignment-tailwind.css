import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Music2,
} from "lucide-react";

const footerLinks = {
  goalkeepers: [
    { name: "Marc-André ter Stegen", href: "#" },
    { name: "Iñaki Peña", href: "#" },
    { name: "Ander Astralaga", href: "#" },
  ],
  defenders: [
    { name: "João Cancelo", href: "#" },
    { name: "Ronald Araújo", href: "#" },
    { name: "Andreas Christensen", href: "#" },
    { name: "Marcos Alonso", href: "#" },
    { name: "Jules Koundé", href: "#" },
    { name: "Alejandro Balde", href: "#" },
  ],
  midfielders: [
    { name: "Gavi", href: "#" },
    { name: "Pedri", href: "#" },
    { name: "Frenkie De Jong", href: "#" },
    { name: "Ilkay Gündogan", href: "#" },
    { name: "Oriol Romeu", href: "#" },
    { name: "Sergi Roberto", href: "#" },
  ],
  forwards: [
    { name: "Robert Lewandowski", href: "#" },
    { name: "João Félix", href: "#" },
    { name: "Raphinha", href: "#" },
    { name: "Ferran Torres", href: "#" },
    { name: "Lamine Yamal", href: "#" },
  ],
  barcaProducts: [
    { name: "Culers Membership", href: "#" },
    { name: "Barça TV+", href: "#" },
    { name: "Tickets", href: "#" },
    { name: "Camp Nou", href: "#" },
    { name: "Barça Store", href: "#" },
  ],
  club: [
    { name: "Spotify Camp Nou", href: "#" },
    { name: "Official Channels", href: "#" },
    { name: "Barça TV", href: "#" },
    { name: "Write to the Board", href: "#" },
    { name: "Support/FAQ", href: "#" },
  ],
  history: [
    { name: "1899-99: The first years", href: "#" },
    { name: "Trophy Room", href: "#" },
    { name: "The Era of Joan Gamper", href: "#" },
    { name: "1919-1930: First Golden Age", href: "#" },
    { name: "Barça in the Modern League", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0B0B1F] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Sponsors Section */}
        <div className="flex justify-evenly items-center mb-12">
          <Image
            src="/nike.png"
            alt="Nike"
            width={120}
            height={80}
            className="opacity-80 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/spotify.png"
            alt="Spotify"
            width={120}
            height={80}
            className="opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Social Media Section */}
        <div className="text-center mb-12">
          <h3 className="text-sm mb-4">Follow FC Barcelona on social media</h3>
          <div className="flex justify-center space-x-4">
            <Link href="#" className="hover:text-blue-400 transition-colors">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-red-500 transition-colors">
              <Youtube className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-pink-500 transition-colors">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-green-500 transition-colors">
              <Music2 className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Main Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-12">
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase">Goalkeepers</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.goalkeepers.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase">Defenders</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.defenders.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase">Midfielders</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.midfielders.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase">Forwards</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.forwards.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase">Barça Products</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.barcaProducts.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase">Club</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.club.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase">History</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.history.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/logo.svg"
              alt="FC Barcelona"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-sm">
              © {new Date().getFullYear()} FC Barcelona
            </span>
          </div>
          <div className="flex space-x-4 text-sm">
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Legal Terms
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Cookies
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
