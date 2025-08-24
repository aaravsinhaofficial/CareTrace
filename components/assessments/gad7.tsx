"use client";

import { useState } from "react";

const QUESTIONS = [
  "Feeling nervous, anxious or on edge",
  "Not being able to stop or control worrying",
  "Worrying too much about different things",
  "Trouble relaxing",
  "Being so restless that it is hard to sit still",
  "Becoming easily annoyed or irritable",
  "Feeling afraid as if something awful might happen",
];

const OPTIONS = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "More than half the days", value: 2 },
  { label: "Nearly every day", value: 3 },
];

export default function GAD7() {
  const [answers, setAnswers] = useState<number[]>(Array(7).fill(0));
  const [submitting, setSubmitting] = useState(false);

  const score = answers.reduce((a, b) => a + b, 0);

  async function submit() {
    setSubmitting(true);
    await fetch("/api/assessments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "gad7", answers, score }),
    });
    setSubmitting(false);
    alert("Submitted GAD-7");
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">GAD-7</h3>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {QUESTIONS.map((q, idx) => (
          <fieldset key={idx} className="rounded-md border border-gray-200 p-3">
            <legend className="text-sm font-medium">{idx + 1}. {q}</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2 md:grid-cols-4">
              {OPTIONS.map((o) => (
                <label key={o.value} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`q${idx}`}
                    value={o.value}
                    checked={answers[idx] === o.value}
                    onChange={() => setAnswers((arr) => arr.map((v, i) => (i === idx ? o.value : v)))}
                  />
                  <span className="text-sm">{o.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </form>
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">Score: <span className="font-medium">{score}</span></div>
        <button
          className="rounded-md bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
          disabled={submitting}
          onClick={submit}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
