"use server";

import connectDb from "@/lib/db";
import { Contact } from "@/models/contact";
import { revalidateTag, unstable_cache } from "next/cache";
import { NextResponse } from "next/server";

export async function createContact(formData) {
  await connectDb();
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    if (!name || !email || !subject || !message) {
      return NextResponse.json({
        success: false,
        message: "Name , Email , Subject and Message is Required",
      });
    }

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
    });
    return {
      success: true,
      message: "Message sent successfully",
      contactId: contact._id.toString(),
    };
  } catch (error) {
    console.error("Error creating contact:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}
export async function getContact() {
  try {
    await connectDb();
    const contacts = await Contact.find({}).sort({ createdAt: -1 }).lean();
    return contacts.map((contact) => ({
      ...contact,
      _id: contact._id,
      createdAt: contact.createdAt,
      updatedAt: contact.updatedAt,
    }));
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return [];
  }
}

export async function updateContact(contactId, status) {
  try {
    console.log(status);
    await connectDb();
    await Contact.findByIdAndUpdate(contactId, { status });

    revalidateTag("contact-stats");

    return { success: true };
  } catch (error) {
    console.error("Error updating contact status:", error);
    return { success: false, error: "Failed to update status" };
  }
}

export async function getContactStats() {
  const getCachedStats = unstable_cache(
    async () => {
      await connectDb();
      const total = await Contact.countDocuments();
      const newCount = await Contact.countDocuments({ status: "new" });
      const readCount = await Contact.countDocuments({ status: "read" });
      const repliedCount = await Contact.countDocuments({ status: "replied" });

      return { total, newCount, readCount, repliedCount };
    },
    ["contact-stats"],
    { tags: ["contact-stats"] }
  );

  return getCachedStats();
}
