import Image from "next/image";

export default function Brand() {
  return (
    <div className="flex items-center">
      <Image
        src="/pig.only.png"
        alt="MijnPensioenGevuld"
        width={240}
        height={64}
        priority
        className="h-18 w-auto"   // zelfde hoogte als “Start scan”
      />
    </div>
  );
}