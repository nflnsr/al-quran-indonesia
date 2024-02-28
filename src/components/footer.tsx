import Link from "next/link";

export function Footer() {
  return (
    <footer className="h-[var(--footer-height)]">
      <div className="flex flex-wrap items-center justify-center px-1.5 pb-1.5 pt-10 sm:pt-14">
        <p className="inline whitespace-nowrap font-light">Developed by</p>
        <Link
          href="https://github.com/nflnsr"
          target="_blank"
          className=" whitespace-nowrap text-lime-700 hover:underline"
        >
          &nbsp;Naufal Nasrullah
        </Link>
        <p>&nbsp;&copy;&nbsp;</p>
        <Link
          href="https://kemenag.go.id"
          target="_blank"
          className="whitespace-nowrap text-xs font-medium underline hover:text-blue-500 hover:no-underline"
        >
          API & Font Kemenag RI
        </Link>
      </div>
    </footer>
  );
}
