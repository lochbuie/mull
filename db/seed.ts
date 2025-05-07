import { db } from "./index";
import * as schema from "@shared/schema";

async function seed() {
  try {
    // Check if the users table has data - we don't want to overwrite any existing user data
    const existingUsers = await db.select().from(schema.users).limit(1);
    
    // Only seed the admin user if there are no existing users
    if (existingUsers.length === 0) {
      await db.insert(schema.users).values({
        username: "admin",
        // In a real application, this would be a properly hashed password
        password: "$2a$12$S8OQRa9E1JMlzT92/cYIbuRbD9mhwKKjqTdVWJjTbJ3KgCsAxZcGC", // "password"
      });
      console.log("Added admin user");
    }

    // Create messages table if it doesn't exist
    try {
      await db.query.messages.findFirst();
      console.log("Messages table exists");
    } catch (error) {
      console.log("Creating messages table");
      // The table will be created when pushing the schema
    }

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error during seeding:", error);
  }
}

seed();
