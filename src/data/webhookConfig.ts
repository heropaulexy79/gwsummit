// Configuration for Google Sheets & Email automation webhook
// When you deploy your Google Apps Script Web App, paste its URL here or in an environment variable VITE_SHEETS_WEBHOOK_URL.

export const WEBHOOK_URL: string =
  (import.meta as any).env?.VITE_SHEETS_WEBHOOK_URL ||
  'https://script.google.com/macros/s/AKfycbxAHReE5LNxNBQ5CXzGU0yaLScR6IpRVyIIcLcLxzRpTHB9fxue7mxB8eD7kWmUqHqt/exec'; // Paste your Google Apps Script Web App URL here

export async function submitToSheets(
  payload: Record<string, any>
): Promise<{ success: boolean; message?: string; entryCode?: string }> {
  if (!WEBHOOK_URL) {
    // Fallback prototype mode when no URL is provided yet:
    console.log('[Prototype Mode] Submitting payload locally:', payload);
    return { success: true, message: 'Saved locally in prototype mode' };
  }

  try {
    // Try standard CORS-readable POST first so we can read the generated entryCode
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });

    if (response.ok) {
      try {
        const result = await response.json();
        return {
          success: result.result !== 'error',
          entryCode: result.entryCode,
          message: result.error,
        };
      } catch {
        return { success: true };
      }
    }
  } catch (err) {
    // Fall back to 'no-cors' if the browser/Apps Script redirect blocks reading the response
    console.warn('Standard POST blocked by CORS, falling back to no-cors:', err);
  }

  try {
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

