"use client";
import { useState } from "react";

export default function ConnectPage() {
  const [name, setName] = useState("");
  const [creating, setCreating] = useState(false);
  const [shareUrl, setShareUrl] = useState<string | null>(null);

  async function createInvite() {
    setCreating(true);
    const res = await fetch("/api/connect/invite", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ circleName: name, role: "owner" }),
    });
    setCreating(false);
    if (!res.ok) return alert("Failed to create invite");
    const data = await res.json();
    setShareUrl(`${location.origin}/share/${data.share.token}`);
  }

  return (
    <main className="rounded-2xl bg-white p-6 shadow-sm space-y-4">
      <h1 className="text-2xl font-semibold">Connect</h1>
      <p className="text-gray-600">Invite family or providers with a read-only share link.</p>
      <label className="block text-sm font-medium" htmlFor="circleName">Care circle name</label>
      <input id="circleName" className="w-full rounded-md border border-gray-300 px-3 py-2" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., My Care Team" />
      <button onClick={createInvite} disabled={creating} className="rounded-md bg-blue-600 px-4 py-2 text-white disabled:opacity-50">
        {creating ? "Creating..." : "Create Share Link"}
      </button>
      {shareUrl && (
        <div className="rounded-md border border-green-200 bg-green-50 p-3 text-sm">
          Share this link (read-only): <a className="text-blue-700 underline" href={shareUrl}>{shareUrl}</a>
        </div>
      )}
    </main>
  );
}