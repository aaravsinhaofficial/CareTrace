# CareTrace

An interactive web app to capture health data, connect care circles, and personalize insights.

Overall goal:
- Help detect issues earlier by turning day-to-day data into trends and simple risk flags.
- Bridge patients, family, and providers through a shareable, read-only view.
- Provide personalized, privacy-preserving insights without heavy dependencies.

Key features implemented:
- Metrics capture: Record values like mood, heart rate, blood pressure, and sleep with optional notes.
- Recent metrics list: Server-rendered, auto-refresh after adding entries.
- Onboarding and local session: Minimal cookie session (`session_token`) linked to a `User`.
- Assessments API: Submit responses for tools like PHQ-9/GAD-7 (UI scaffold; API implemented).
- Care circle invites: Create a circle and generate a share token with read-only scopes.
- Share API: Anyone with the token can fetch read-only metrics/assessments for the circle.
- Export page scaffold: Placeholder for JSON/CSV export.
- Accessibility: Semantic HTML, clear focusable buttons/links, good color contrast.
- Disclaimer component: Visible on all pages; app is not medical advice.

Tech stack:
- Next.js 14 App Router (TypeScript) with Tailwind CSS
- Prisma (SQLite) with models: User, Metric, AssessmentResponse, CareCircle, CareCircleMember, ShareToken
- Prisma singleton at `@/lib/prisma`

Routes:
- `/` Landing
- `/onboarding` Start a local session
- `/dashboard` Capture and view metrics
- `/assessments` Submit assessments (API ready)
- `/connect` Create invites and generate share links (API ready)
- `/export` Export data (scaffold)
- `/api/*` Endpoints for session, metrics, assessments, invites, and token-based sharing

Local development:
- npm install
- npm run prisma:push && npm run prisma:generate
- npm run seed
- npm run dev

Notes:
- This is a prototype: authentication is a simple cookie session; do not use in production.
- Data model is designed for extensibility; scopes are JSON due to SQLite limitations.
- Consider adding charts, anomaly detection, and CSV export as next steps.
