import { db } from "@db";
import { messages, type InsertMessage, type Message } from "@shared/schema";
import { eq } from "drizzle-orm";

export const storage = {
  // Message related operations
  async insertMessage(message: InsertMessage): Promise<Message> {
    const [newMessage] = await db.insert(messages).values(message).returning();
    return newMessage;
  },

  async getAllMessages(): Promise<Message[]> {
    return await db.select().from(messages).orderBy(messages.createdAt.desc);
  },

  async getMessageById(id: number): Promise<Message | undefined> {
    const [message] = await db
      .select()
      .from(messages)
      .where(eq(messages.id, id))
      .limit(1);
    return message;
  },

  async markMessageAsRead(id: number): Promise<Message | undefined> {
    const [updatedMessage] = await db
      .update(messages)
      .set({ read: true })
      .where(eq(messages.id, id))
      .returning();
    return updatedMessage;
  }
};
