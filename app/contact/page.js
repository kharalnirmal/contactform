import ContactStats from "@/components/contact-stats";
import ContactLists from "@/components/contactLists";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

const Contacts = () => {
  return (
    <main className="px-4 py-8 min-h-screen">
      <div className="mx-auto max-w-4xl container">
        <div className="mb-8">
          <Link href={"/"}>
            <Button
              variant={"outline"}
              size={"sm"}
              className={"mb-4 bg-transparent"}
            >
              Back to Form
            </Button>
          </Link>
        </div>

        <ContactStats />
        <ContactLists />
      </div>
    </main>
  );
};

export default Contacts;
