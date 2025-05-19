export function Progress({ value, className }: any) {
  return (
    <div className={`w-full bg-gray-800 rounded-full h-4 ${className}`}>
      <div
        className="bg-yellow-400 h-4 rounded-full"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
