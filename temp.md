# CLAUDE.md

## Project Overview
<!-- Describe your project in 2-3 sentences. What does it do? Who is it for? -->


## Tech Stack

### Frontend
- **Framework:** <!-- e.g., React 18, Next.js 14, Vue 3 -->
- **Language:** <!-- e.g., TypeScript 5.x -->
- **Styling:** <!-- e.g., Tailwind CSS, CSS Modules, styled-components -->
- **State Management:** <!-- e.g., Zustand, Redux Toolkit, React Context -->
- **Key Libraries:** <!-- e.g., React Query, React Hook Form, Zod -->

### Backend
- **Runtime / Framework:** <!-- e.g., Node.js + Express, Django, FastAPI -->
- **Language:** <!-- e.g., TypeScript, Python 3.12 -->
- **Database:** <!-- e.g., PostgreSQL 16 via Prisma ORM -->
- **Auth:** <!-- e.g., NextAuth.js, Clerk, custom JWT -->
- **Key Libraries:** <!-- e.g., tRPC, Drizzle, Celery -->

### Infrastructure
- **Hosting:** <!-- e.g., Vercel, AWS, Railway -->
- **CI/CD:** <!-- e.g., GitHub Actions -->
- **Monitoring:** <!-- e.g., Sentry, Datadog -->

## Architecture
<!-- High-level architecture: monorepo vs polyrepo, API style (REST, GraphQL, tRPC), key decisions -->


## Repository Structure
```
src/
├── app/          # Routes / pages
├── components/   # Shared UI components
├── lib/          # Utilities, API clients, helpers
├── hooks/        # Custom React hooks
├── services/     # Business logic / API layer
├── types/        # Shared TypeScript types
└── ...
```

## Current State
<!-- MVP? Production? Greenfield? What's working, what's not? -->


---

## Constraints

### Hard Rules
<!-- Non-negotiable. Claude must never violate these. -->
- <!-- e.g., No `any` types in TypeScript — every value must be typed -->
- <!-- e.g., All database queries must go through the ORM, never raw SQL -->
- <!-- e.g., No client-side secrets — all API keys stay server-side -->
- <!-- e.g., Every API endpoint must have input validation -->

### Security
- <!-- e.g., All user input must be sanitized before rendering -->
- <!-- e.g., Use parameterized queries only -->
- <!-- e.g., Authentication required on all non-public routes -->

### Performance
- <!-- e.g., Pages must score 90+ on Lighthouse -->
- <!-- e.g., No blocking API calls on initial render -->
- <!-- e.g., Database queries must complete within 200ms -->

### Dependencies
- <!-- e.g., No new dependencies without explicit approval -->
- <!-- e.g., Prefer native browser APIs over libraries when possible -->

### Forbidden Patterns
- Do NOT use: <!-- e.g., `useEffect` for data fetching — use React Query -->
- Do NOT use: <!-- e.g., inline styles — use Tailwind classes -->
- Do NOT use: <!-- e.g., `var` — always `const` or `let` -->
- Do NOT use: <!-- e.g., default exports for components — use named exports -->
- Do NOT use: <!-- e.g., `console.log` in production code — use the logger service -->

### Testing
- <!-- e.g., All new utility functions must have unit tests -->
- <!-- e.g., Test files go next to the source: `foo.ts` → `foo.test.ts` -->

### Accessibility
- <!-- e.g., All interactive elements must be keyboard-accessible -->
- <!-- e.g., Images must have alt text -->

---

## Conventions

### Naming

| Element            | Convention        | Example                |
|--------------------|-------------------|------------------------|
| Components         | <!-- PascalCase --> | <!-- `UserProfileCard` --> |
| Files (components) | <!-- PascalCase --> | <!-- `UserProfileCard.tsx` --> |
| Files (utilities)  | <!-- camelCase -->  | <!-- `formatCurrency.ts` --> |
| Hooks              | <!-- `use` prefix --> | <!-- `useAuth.ts` --> |
| Types / Interfaces | <!-- PascalCase --> | <!-- `UserProfile` --> |
| Constants          | <!-- UPPER_SNAKE --> | <!-- `MAX_RETRY_COUNT` --> |
| API routes         | <!-- kebab-case --> | <!-- `/api/user-profiles` --> |
| Database tables    | <!-- snake_case, plural --> | <!-- `user_profiles` --> |
| Env variables      | <!-- UPPER_SNAKE --> | <!-- `NEXT_PUBLIC_API_URL` --> |

### Component File Structure
```tsx
// 1. Imports (external → internal → types → styles)
// 2. Types / interfaces
// 3. Constants
// 4. Helper functions (if small and component-specific)
// 5. Component definition
// 6. Export
```

### Where Things Go
- Shared components → <!-- `src/components/` -->
- Page-specific components → <!-- `src/app/[page]/components/` -->
- API client functions → <!-- `src/lib/api/` -->
- Custom hooks → <!-- `src/hooks/` -->
- Shared types → <!-- `src/types/` -->
- Utility functions → <!-- `src/lib/utils/` -->

### Code Patterns

#### Data Fetching
<!-- Describe or show the preferred pattern -->
```tsx
// Example pattern here
```

#### Error Handling
<!-- Describe or show the preferred pattern -->
```tsx
// Example pattern here
```

#### API Response Shape
```json
{
  "data": {},
  "error": null,
  "meta": { "page": 1, "total": 100 }
}
```

### Git
- **Commits:** <!-- e.g., Conventional Commits: feat: / fix: / chore: / refactor: -->
- **Branches:** <!-- e.g., feature/short-description, fix/issue-number -->

### Comments
- <!-- e.g., JSDoc for public functions and hooks -->
- <!-- e.g., `// TODO:` for known improvements -->
- <!-- e.g., Don't comment obvious code — write self-documenting names -->

---

## Learnings & Corrections

<!-- Grow this section over time. After each session, note corrections here. -->

### Recurring Mistakes to Avoid
<!-- Example:
- Claude keeps importing from `@/utils` but our alias is `@/lib`
- Claude forgets to add `"use client"` directive on interactive components
-->

### Preferred Solutions
<!-- Example:
- For modals: use `<Dialog>` from `@/components/ui`, not Headless UI directly
- For forms: always React Hook Form + Zod, never uncontrolled inputs
- For dates: use `date-fns`, not `moment` or native Date
-->

### Project-Specific Knowledge
<!-- Example:
- The `users` table has a soft-delete column `deleted_at` — always filter it
- Legacy `/v1/` endpoints are deprecated — only use `/v2/`
-->
