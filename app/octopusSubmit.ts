"use server";

export async function createSubscriber(email: string) {
  const response = await fetch(
    `https://api.emailoctopus.com/lists/${process.env.OCTOPUS_LIST_ID}/contacts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OCTOPUS_API_KEY!}`,
      },
      body: JSON.stringify({
        email_address: email,
      }),
    }
  );
  const data = await response.json().catch(() => null);
  console.log("Octopus response:", response.status, data);
  return data;
}
