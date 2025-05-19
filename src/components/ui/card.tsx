export function Card({ children, className }: any) {
  return <div className={`rounded-2xl shadow-md p-4 ${className}`}>{children}</div>;
}
export function CardContent({ children }: any) {
  return <div>{children}</div>;
}
