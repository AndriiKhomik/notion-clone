"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

const DocumentsPage = () => {
  const { user } = useUser();

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/empty.png"
        width="300"
        height="300"
        alt="empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        width="300"
        height="300"
        alt="empty"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium mb-2">
        Welcome to {user?.firstName}&apos;s Jotion
      </h2>
      <Button>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create note
      </Button>
    </div>
  );
};

export default DocumentsPage;
