---
title: Engagement Timeline
description: React application that visualizes engagement milestones from activities.json
---

## Overview

The engagement timeline presents each item in `activities.json` as a dated
milestone. It sorts entries chronologically, calculates completion against the
current time, and adapts the chronology for desktop and mobile screens.

## Development

Install dependencies and start the Vite development server:

```powershell
npm install
npm run dev
```

Use the `scoutTheme` query parameter to preview a theme explicitly:

```text
http://localhost:5173/?scoutTheme=dark
```

## Validation

Run the focused checks before publishing changes:

```powershell
npm run lint
npm test
npm run build
```

## Activity data

Each object in `activities.json` requires an activity name, an ISO 8601
timestamp, and a type:

```json
{
  "activity": "Seed",
  "timestamp": "2026-07-08T10:00:00Z",
  "type": "initiation"
}
```
