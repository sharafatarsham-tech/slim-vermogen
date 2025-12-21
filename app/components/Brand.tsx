import Image from "next/image";

export default function Brand() {
  return (
    <div className="flex items-center">
      <Image
        src="/pig.only.png"
        alt="Mijnpensioengevuld"
        width={300}
        height={90}
        className="h-20 w-auto object-contain"
        priority
      />
    </div>
  );
}