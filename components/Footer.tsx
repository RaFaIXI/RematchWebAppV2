// components/Footer.tsx
import { FaDiscord } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
          © {new Date().getFullYear()} Maîtrisez le Rematch. Tous droits réservés.
        </p>
        <a
          href="https://discord.gg/ua8D567NAp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Rejoignez-nous sur Discord"
        >
          <FaDiscord className="w-6 h-6" />
        </a>
      </div>
    </footer>
  )
}
