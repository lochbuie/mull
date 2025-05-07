import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { messages } from "@shared/schema";
import { insertMessageSchema } from "@shared/schema";
import { eq } from "drizzle-orm";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertMessageSchema.parse(req.body);
      const newMessage = await storage.insertMessage(validatedData);
      return res.status(201).json({ message: "Message sent successfully", id: newMessage.id });
    } catch (error) {
      console.error("Error creating message:", error);
      return res.status(400).json({ error: "Invalid data submitted" });
    }
  });

  // Get all messages (admin only endpoint)
  app.get("/api/admin/messages", async (req, res) => {
    try {
      const allMessages = await storage.getAllMessages();
      return res.status(200).json(allMessages);
    } catch (error) {
      console.error("Error fetching messages:", error);
      return res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
