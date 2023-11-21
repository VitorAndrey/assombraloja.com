"use client";

import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function BackButton() {
  const navigate = useRouter();

  function handleNavigateBack() {
    navigate.push("/");
  }

  return (
    <Button onClick={handleNavigateBack} size="icon" variant="link">
      <ArrowLeftIcon color="black" size={20} />
    </Button>
  );
}
