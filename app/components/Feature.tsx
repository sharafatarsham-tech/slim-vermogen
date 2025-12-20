type Props = {
    title: string;
    text: string;
  };
  
  export default function Feature({ title, text }: Props) {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="text-sm font-semibold text-zinc-900">{title}</div>
        <div className="mt-2 text-sm leading-6 text-zinc-600">{text}</div>
      </div>
    );
  }

