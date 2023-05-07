export default function Characteristic({ src, alt, info }) {
  return (
    <div className="flex gap-1 ">
      <img src={src} alt={alt} />
      <p className="text-xs text-dark25 dark:text-neutral/50">{info}</p>
    </div>
  );
}
