"use server";

export async function handleContactForm(formData: any) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");
  console.log("--data--", name, email, subject, message);
}
