"use client";

import { useState } from "react";

export default function OnboardingPage() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    setLoading(false);
    if (res.ok) {
      window.location.href = "/dashboard";
    } else {
      alert("Failed to start session");
    }
  }

  return (
    <main className="rounded-2xl bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-semibold">Welcome</h1>
      <p className="mt-2 text-gray-600">Tell us your display name to personalize your experience.</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="rounded-md bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
          disabled={!name || loading}
        >
          {loading ? "Saving..." : "Continue"}
        </button>
      </form>
    </main>
  );
}