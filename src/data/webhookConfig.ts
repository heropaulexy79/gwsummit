// Configuration for Google Sheets & Email automation webhook
// When you deploy your Google Apps Script Web App, paste its URL here or in an environment variable VITE_SHEETS_WEBHOOK_URL.

export const WEBHOOK_URL: string =
  (import.meta as any).env?.VITE_SHEETS_WEBHOOK_URL ||
  'https://script.google.com/macros/s/AKfycbyU3Fd3MsfGTWm9MAXEDXmecCya0bfXNO0uJHhtinasN1kfQFm-lM02fpt4BZj0BdIX/exec'; // Paste your Google Apps Script Web App URL here

export async function submitToSheets(payload: Record<string, any>): Promise<{ success: boolean; message?: string }> {
  if (!WEBHOOK_URL) {
    // Fallback prototype mode when no URL is provided yet:
    console.log('[Prototype Mode] Submitting payload locally:', payload);
    return { success: true, message: 'Saved locally in prototype mode' };
  }

  try {
    // Mode 'no-cors' allows sending cross-origin POST requests to Google Apps Script without CORS blockage
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
      mode: 'no-cors',
    });

    return { success: true };
  } catch (err: any) {
    console.error('Submission failed:', err);
    return { success: false, message: err.message || 'Network error' };
  }
}

