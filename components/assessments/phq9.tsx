"use client";

import { useState } from "react";

const QUESTIONS = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless",
  "Trouble falling or staying asleep, or sleeping too much",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
  "Trouble concentrating on things, such as reading the newspaper or watching television",
  "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
  "Thoughts that you would be better off dead, or thoughts of hurting yourself in some way",
];

const OPTIONS = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "More than half the days", value: 2 },
  { label: "Nearly every day", value: 3 },
];

export default function PHQ9() {
  const [answers, setAnswers] = useState<number[]>(Array(9).fill(0));
  const [submitting, setSubmitting] = useState(false);

  const score = answers.reduce((a, b) => a + b, 0);

  async function submit() {
    setSubmitting(true);
    await fetch("/api/assessments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "phq9", answers, score }),
    });
    setSubmitting(false);
    alert("Submitted PHQ-9");
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">PHQ-9</h3>
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
