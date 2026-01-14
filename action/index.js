"use server";

import connectDb from "@/lib/db";
import { Contact } from "@/models/contact";
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
