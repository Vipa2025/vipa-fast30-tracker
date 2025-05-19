import { useState } from "react";

export function Tabs({ children, defaultValue, className }: any) {
  const [value, setValue] = useState(defaultValue);
  const childrenArray = Array.isArray(children) ? children : [children];
  const list = childrenArray.find((c: any) => c.type.name === "TabsList");
  const contents = childrenArray.filter((c: any) => c.type.name === "TabsContent");

  return (
    <div className={className}>
      {list && list.props.children.map((child: any) =>
        React.cloneElement(child, {
          selected: value === child.props.value,
          onClick: () => setValue(child.props.value)
        })
      )}
      {contents.map((content: any) =>
        content.props.value === value ? content : null
      )}
    </div>
  );
}

export function TabsList({ children, className }: any) {
  return <div className={className}>{children}</div>;
}

export function TabsTrigger({ value, onClick, selected, children }: any) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 mx-1 rounded-lg border ${
        selected ? "bg-yellow-400 text-black" : "border-yellow-400 text-yellow-400"
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children }: any) {
  return <div>{children}</div>;
}
