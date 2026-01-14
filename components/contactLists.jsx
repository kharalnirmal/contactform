import { getContact, updateContact } from "@/action";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, RefreshCw } from "lucide-react";

const ContactLists = async () => {
  const contacts = await getContact();
  console.log(contacts);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">Contact Messages</h2>
        <div className="flex items-center gap-4">
          <Badge variant="secondary">{contacts.length} messages</Badge>
        </div>
      </div>

      {contacts.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col justify-center items-center py-12">
            <Mail className="mb-4 w-12 h-12 text-muted-foreground" />
            <h3 className="mb-2 font-semibold text-lg">No messages yet</h3>
          </CardContent>
        </Card>
      ) : (
        <div className="gap-4 grid">
          {contacts.map((contact) => (
            <Card key={contact._id}>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{contact.subject}</CardTitle>
                    <p className="text-muted-foreground text-sm">
                      From: {contact.name} ({contact.email})
                    </p>
                  </div>
                  <Badge
                    variant={contact.status === "new" ? "default" : "secondary"}
                  >
                    {contact.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground text-sm">
                  {contact.message}
                </p>

                <div className="flex justify-between items-center pt-4 border-t">
                  <p className="text-muted-foreground text-xs">
                    {new Date(contact.createdAt).toLocaleDateString()}
                  </p>

                  <div className="flex gap-2">
                    {contact.status === "new" && (
                      <form
                        action={async () => {
                          "use server";
                          await updateContact(contact._id, "read");
                        }}
                      >
                        <Button variant="outline" size="sm" type="submit">
                          Mark as Read
                        </Button>
                      </form>
                    )}
                    {contact.status === "read" && (
                      <form
                        action={async () => {
                          "use server";
                          await updateContact(contact._id, "replied");
                        }}
                      >
                        <Button variant="outline" size="sm" type="submit">
                          Mark as Replied
                        </Button>
                      </form>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactLists;
