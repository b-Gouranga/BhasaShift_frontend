"use client";
import { useEffect, useState } from "react";

export function Component() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div>
      {/* Your component code here */}
    </div>
  );
}
