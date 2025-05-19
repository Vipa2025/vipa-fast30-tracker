export function Button({ children, onClick, className, variant = "outline" }: any) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg border ${className}`}
    >
      {children}
    </button>
  );
}
