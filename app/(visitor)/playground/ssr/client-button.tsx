"use client";

import { useEffect, useState } from "react";

export default function ClientButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return visible ? (
    <button className="bg-gray-300">Client Button</button>
  ) : null;
}
