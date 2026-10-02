export interface Activity {
  activity: string
  timestamp: string
  type: string
}

function toTimestamp(activity: Activity) {
  const timestamp = new Date(activity.timestamp).getTime()

  if (Number.isNaN(timestamp)) {
    throw new Error(`Invalid activity timestamp: ${activity.timestamp}`)
  }

  return timestamp
}

export function sortActivities(items: Activity[]) {
  return [...items].sort((left, right) => toTimestamp(left) - toTimestamp(right))
}

export function getTimelineSummary(items: Activity[], now: Date) {
  const completed = items.filter(
    (activity) => toTimestamp(activity) <= now.getTime(),
  ).length

  return {
    total: items.length,
    completed,
    progress: items.length === 0 ? 0 : Math.round((completed / items.length) * 100),
  }
}
