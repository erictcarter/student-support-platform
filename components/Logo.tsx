import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <div className="relative">
        {/* Nest icon */}
        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold tracking-tight">
          <span className="text-white">Wel</span>
          <span className="text-yellow-300">Nest</span>
        </span>
        <span className="text-xs text-blue-100 -mt-1">Student Support</span>
      </div>
    </Link>
  );
}
