import Image from "next/image";

export default function Brand() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo.svg"
        alt="Slim Vermogen"
        width={84}
        height={84}
        priority
        className="h-12 w-12 md:h-12 md:w-14"
      />
      <div className="leading-tight">
        <div className="text-base font-semibold text-zinc-900 md:text-lg">
          Slim Vermogen
        </div>
        <div className="text-xs text-zinc-500 md:text-sm">
          Scan
        </div>
      </div>
    </div>
  );
}
