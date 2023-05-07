export default function Button({ children, onClick, customStyle }) {
  return (
    <button className={customStyle} onClick={onClick}>
      {children}
    </button>
  );
}
