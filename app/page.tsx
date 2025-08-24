import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="space-y-10">
      <section className="rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">CareTrace</h1>
        <p className="mt-2 text-gray-600">
          Capturing Medical Data for Interactive Software: detect earlier, connect care, personalize insights.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/onboarding" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Get Started
          </Link>
          <Link href="/dashboard" className="rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50">
            View Dashboard
          </Link>
          <Link href="/assessments" className="rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50">
            Assessments
          </Link>
          <Link href="/connect" className="rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50">
            Connect
          </Link>
          <Link href="/export" className="rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50">
            Export
          </Link>
        </div>
      </section>

      <section className="rounded-2xl bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold">Disclaimer</h2>
        <p className="mt-2 text-sm text-gray-600">
          This tool provides wellness information and is not a substitute for professional medical advice, diagnosis, or treatment.
        </p>
      </section>
    </main>
  );
}
