import PHQ9 from "@/components/assessments/phq9";
import GAD7 from "@/components/assessments/gad7";

export default function AssessmentsPage() {
  return (
    <main className="space-y-6">
      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Assessments</h1>
        <p className="mt-2 text-gray-600">Complete a quick self-assessment and submit your results.</p>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <PHQ9 />
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <GAD7 />
      </section>
    </main>
  );
}