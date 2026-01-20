

"use client";

export default function Button({children, onClick, type = "button", variant = "primary",
}) {
  const base = "px-4 py-2 rounded font-medium transition disabled:opacity-50";

  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    danger: "bg-red-500 text-white hover:bg-red-600",
    ghost: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
