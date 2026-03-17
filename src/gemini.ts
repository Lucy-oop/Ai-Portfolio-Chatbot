
export async function sendMessageToAI(message: string) {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const text = await res.text();
    const data = text ? JSON.parse(text) : { text: "No response" };

    return data.text;
  } catch (error) {
    console.error("Gemini error:", error);
    return "Error connecting to AI";
  }
}