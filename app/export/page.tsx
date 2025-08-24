export default function ExportPage() {
  return (
    <main className="rounded-2xl bg-white p-6 shadow-sm space-y-6">
      <h1 className="text-2xl font-semibold">Export</h1>
      <p className="text-gray-600">Download your data as JSON or CSV.</p>
      <div className="flex gap-3">
        <a href="/api/export/json" className="rounded-md bg-blue-600 px-4 py-2 text-white">Download JSON</a>
        <a href="/api/export/csv" className="rounded-md bg-blue-600 px-4 py-2 text-white">Download CSV</a>
      </div>
      <p className="text-xs text-gray-500">Files are generated on-demand and downloaded in your browser.</p>
    </main>
  );
}