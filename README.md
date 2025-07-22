# 🚨 Incident Monitoring Dashboard

A real-time dashboard to monitor camera-triggered incidents, designed for security and surveillance use cases. It fetches incidents from different camera sources and categorizes them based on threat types.

---

## 🔗 Live Demo

> Note: This project uses environment variables. Make sure to configure them locally or in your Vercel/Netlify deployment settings.

---

## 🧠 Tech Stack & Decisions

| Layer         | Tech Stack             | Reasoning                                                      |
|--------------|------------------------|----------------------------------------------------------------|
| Frontend     | **Next.js**, TailwindCSS | React-based framework with file-based routing and SSR support |
| Styling      | Tailwind CSS           | Utility-first CSS for rapid UI development                    |
| Backend/API  | Next.js API Routes     | Simple serverless deployment with built-in API support         |
| ORM          | Prisma + PostgreSQL    | Modern and type-safe ORM with good DX                         |
| Deployment   | Vercel                 | Fast, seamless deployment with Next.js support                |
| Icons        | React Icons            | Lightweight icon usage                                         |

---


 If I Had More Time...
✅ Add filtering by time range, location, and threat type

✅ Implement login system (Auth.js or NextAuth)

✅ Add unit & integration testing with Vitest or Jest

✅ Improve mobile responsiveness and performance

✅ Add real-time updates using WebSockets or Pusher

✅ Create Admin Panel for adding/removing cameras

✅ Add status analytics/charts using Chart.js or Recharts


 Author
Prathmesh Deshpande

GitHub

Portfolio

### SETUP
### 1. Clone the Repo

```bash
1 - git clone https://github.com/Prathmesh1524/Instinctive_Studio.-Internship-task.git
2 - cd Instinctive_Studio.-Internship-task

3 - npm install

4 - cp .env.example .env
5 - DATABASE_URL=postgresql://user:password@localhost:5432/incidentdb

6 - npx prisma db push
# or
npx prisma migrate dev --name init

7 - npm run dev
8 - npx prisma db seed



