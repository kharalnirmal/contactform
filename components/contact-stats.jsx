import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getContactStats } from "@/action";

const ContactStats = async () => {
  const stats = await getContactStats();
  return (
    <div className="gap-4 grid grid-cols-2 md:grid-cols-4 mt-5 mb-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="font-medium text-sm">Total</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="font-bold text-2xl">{stats.total}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="font-medium text-sm">New</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="font-bold text-blue-600 text-2xl">
            {stats.newCount}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="font-medium text-sm">Read</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="font-bold text-yellow-600 text-2xl">
            {stats.readCount}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="font-medium text-sm">Replied</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="font-bold text-green-600 text-2xl">
            {stats.repliedCount}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactStats;
