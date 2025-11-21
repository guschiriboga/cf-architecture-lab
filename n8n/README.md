# Weekday Google & iCloud Calendar Sync for n8n

This workflow consolidates events from two separate Google Calendar accounts into a single target Google Calendar and mirrors the merged feed to an iCloud calendar over CalDAV. It runs every hour on weekdays between 5:00 AM and 8:00 PM.

## Files
- `calendar-sync.json`: n8n export that can be imported directly into your workspace.

## Prerequisites
- n8n instance with access to Google Calendar and CalDAV nodes.
- Three Google accounts (two sources, one target) with API access enabled.
- An iCloud account with an app-specific password and the CalDAV endpoint URL (Calendar > Share > Public URL shows the base calendar path; use the CalDAV URL from iCloud settings).

## Import & Configure
1. Open n8n and choose **Import from File**. Select `calendar-sync.json`.
2. After import, open the **Credentials** tab in the workflow and create or map:
   - **Google Calendar (Source A)**: OAuth2 credentials for the first source calendar.
   - **Google Calendar (Source B)**: OAuth2 credentials for the second source calendar.
   - **Google Calendar (Target)**: OAuth2 credentials for the destination calendar.
   - **iCloud CalDAV**: CalDAV credentials using your iCloud username and app-specific password, plus the CalDAV URL for the target iCloud calendar.
3. Edit node parameters to point to the correct calendars:
   - In **Source Calendar A** and **Source Calendar B**, set the `Calendar` field to the desired calendar ID (e.g., `primary` or the calendar's ID string).
   - In **Target Google Calendar**, set `Calendar` to the destination calendar ID.
   - In **iCloud CalDAV Calendar**, set the `Calendar` field (default placeholder: `icloud-calendar-id`) to the target iCloud calendar path or identifier.
4. Verify timezone in the workflow settings (default: `America/New_York`).
5. Activate the workflow.

## How It Works
- **Weekday Hourly Trigger**: Fires hourly at the top of the hour from 5 AM through 8 PM, Monday–Friday.
- **Set Time Window**: Limits sync to events between now and 30 days ahead.
- **Source Calendar A/B**: Pulls upcoming events from each Google account.
- **Merge Feeds**: Joins both event lists.
- **Normalize Events**: Standardizes titles, times, locations, and descriptions, and builds a stable UID per event to avoid duplicates when upserting.
- **Target Google Calendar** and **iCloud CalDAV Calendar**: Upsert events into the consolidated Google calendar and iCloud calendar using the normalized data.

## Customization Tips
- Adjust the cron expression in **Weekday Hourly Trigger** if you need a different schedule.
- Change the 30-day look-ahead window in the **Set Time Window** function.
- Add filters or conditions before the merge step if only certain events should sync.

## Troubleshooting
- If duplicate events appear, confirm that each source calendar uses consistent `organizer` emails so the generated UID remains stable.
- If iCloud rejects updates, verify the CalDAV URL and that the `uid` field is allowed for upserts. Some iCloud calendars may require creating a fresh calendar for external writes.
