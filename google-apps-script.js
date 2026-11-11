/**
 * GLOBAL WIVES SUMMIT 2.0 (GWS 2027)
 * Google Apps Script Backend (Web App)
 * 
 * Features:
 * 1. Handles POST submissions from the Summit Registration form & Grants Portal.
 * 2. Writes entries to dedicated tabs: "Registrations" and "Grants".
 * 3. Sends luxury branded HTML confirmation emails with:
 *    - Prominent WhatsApp Group Invite Link: https://chat.whatsapp.com/Gxl9V3GkCfxLsLaMNaFUjP?mode=gi_t
 *    - Reminder that if they haven't joined yet, they should join immediately.
 *    - Dedicated enquiry contacts:
 *      • +234 916 584 0610 (Aderonke)
 *      • 08072484722 (Precious - WhatsApp)
 *      • globalwivessummit@gmail.com
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var rawData = e.postData.contents;
    var data = JSON.parse(rawData);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var timestamp = new Date();

    if (data.type === 'grant') {
      // ---------------------------------------------------------
      // GRANT APPLICATION SUBMISSION
      // ---------------------------------------------------------
      var grantSheet = getOrCreateSheet(ss, 'Grants', [
        'Timestamp',
        'Full Name',
        'Email Address',
        'Phone Number',
        'Gender',
        'Age Group',
        'Grant Category',
        'Societal Impact',
        'Kingdom Advancement',
        'Why Do You Need This Grant',
        'Proposal / Budget Details',
        'Proposal / Document Link'
      ]);

      grantSheet.appendRow([
        timestamp,
        data.fullName || '',
        data.email || '',
        data.phone || '',
        data.sex || '',
        data.ageGroup || '',
        data.grantType || '',
        data.societalImpact || '',
        data.kingdomAdvancement || '',
        data.needReason || '',
        data.proposalDetails || '',
        data.proposalLink || ''
      ]);

      if (data.email) {
        sendGrantConfirmationEmail(data);
      }

    } else {
      // ---------------------------------------------------------
      // SUMMIT REGISTRATION SUBMISSION (12 Fields)
      // ---------------------------------------------------------
      var regSheet = getOrCreateSheet(ss, 'Registrations', [
        'Timestamp',
        'Full Name',
        'Email Address',
        'Phone Number',
        'Address',
        'Country',
        'State',
        'City',
        'Preferred Attendance Option',
        'Nearest Bus Stop',
        'How Did You Hear About Us',
        'Relationship Status',
        'Expectations'
      ]);

      regSheet.appendRow([
        timestamp,
        data.fullName || '',
        data.email || '',
        data.phone || '',
        data.address || '',
        data.country || '',
        data.state || '',
        data.city || '',
        data.attendanceOption || '',
        data.nearestBusStop || '',
        data.referralSource || '',
        data.relationshipStatus || '',
        data.expectations || ''
      ]);

      if (data.email) {
        sendRegistrationConfirmationEmail(data);
      }
    }

    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// ---------------------------------------------------------
// HELPER: GET OR INITIALIZE SHEET WITH HEADERS
// ---------------------------------------------------------
function getOrCreateSheet(ss, sheetName, headers) {
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold').setBackground('#EAE1D7');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// ---------------------------------------------------------
// EMAIL: SUMMIT REGISTRATION CONFIRMATION
// ---------------------------------------------------------
function sendRegistrationConfirmationEmail(data) {
  var recipientName = data.fullName || 'Beloved Sister';
  var attendanceMode = data.attendanceOption || 'Physical Attendance (Lagos)';
  var subject = "Your Seat is Reserved: Global Wives Summit 2.0 (Lagos 2027)";
  var whatsappGroupUrl = "https://chat.whatsapp.com/Gxl9V3GkCfxLsLaMNaFUjP?mode=gi_t";

  var htmlBody = `
    <div style="background-color: #FAF8F5; padding: 40px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #2A2E24; line-height: 1.6;">
      <div style="max-width: 580px; margin: 0 auto; background: #FFFFFF; border: 1px solid #EAE1D7; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
        
        <!-- Header Banner -->
        <div style="background-color: #3F4B2B; padding: 36px 30px; text-align: center; color: #FAF8F5;">
          <p style="margin: 0 0 6px 0; font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: #DFCA98;">
            CONVENING IN LAGOS • 2027
          </p>
          <h1 style="margin: 0; font-family: Georgia, serif; font-size: 26px; font-weight: normal; color: #FAF8F5; letter-spacing: 0.04em;">
            Global Wives Summit 2.0
          </h1>
          <p style="margin: 8px 0 0 0; font-style: italic; color: #EAE1D7; font-size: 15px;">
            "Renewed in Love, Faith & Divine Purpose"
          </p>
        </div>

        <!-- Body Content -->
        <div style="padding: 32px 30px;">
          <p style="font-size: 16px; margin: 0 0 16px 0;">
            Dear <strong>${recipientName}</strong>,
          </p>
          <p style="font-size: 15px; margin: 0 0 18px 0; color: #3A4032;">
            We are overjoyed to confirm that your registration for <strong>Global Wives Summit 2.0</strong> has been received! Your seat has been reserved for this life-enriching gathering.
          </p>

          <!-- Attendance Badge -->
          <div style="background-color: #F6F3EB; border-left: 4px solid #C6A96B; padding: 16px 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 4px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #5C6B42; font-weight: bold;">
              ATTENDANCE SELECTION
            </p>
            <p style="margin: 0; font-size: 17px; font-family: Georgia, serif; color: #3F4B2B; font-weight: 600;">
              ${attendanceMode}
            </p>
            ${data.city ? `<p style="margin: 4px 0 0 0; font-size: 13px; color: #5C6B42;">Location: ${data.city}, ${data.state || ''} ${data.country || 'Nigeria'}</p>` : ''}
          </div>

          <!-- PROMINENT WHATSAPP COMMUNITY ACTION CARD -->
          <div style="background-color: #E8F5E9; border: 2px solid #25D366; border-radius: 14px; padding: 22px 20px; margin: 26px 0; text-align: center;">
            <p style="margin: 0 0 6px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #1E7E34; font-weight: bold;">
              IMPORTANT NEXT STEP: JOIN OUR COMMUNITY
            </p>
            <h3 style="margin: 0 0 8px 0; font-family: Georgia, serif; font-size: 20px; color: #1B4323; font-weight: normal;">
              Have You Joined Our WhatsApp Group Yet?
            </h3>
            <p style="font-size: 14px; color: #2D5A35; line-height: 1.5; margin: 0 0 18px 0;">
              If you haven't joined yet, please do so now! All official announcements, venue hall coordinates, plenary schedules, and sisterhood fellowships will be shared inside the group.
            </p>
            <a href="${whatsappGroupUrl}" target="_blank" style="display: inline-block; background-color: #25D366; color: #FFFFFF; text-decoration: none; font-weight: 600; font-size: 14px; padding: 14px 28px; border-radius: 50px; letter-spacing: 0.05em; text-transform: uppercase; box-shadow: 0 4px 14px rgba(37,211,102,0.35);">
              👉 Click Here to Join WhatsApp Group
            </a>
            <p style="margin: 12px 0 0 0; font-size: 12px; color: #4B6E4A; word-break: break-all;">
              Or copy this link: <a href="${whatsappGroupUrl}" style="color: #1E7E34;">${whatsappGroupUrl}</a>
            </p>
          </div>

          <p style="font-size: 15px; margin: 0 0 18px 0; color: #3A4032;">
            As we finalize our plenary itinerary, venue announcements, and special delegate kits in Lagos, you will receive real-time updates directly to this inbox.
          </p>

          <!-- Contact & Enquiries Block -->
          <div style="background-color: #FAF8F5; border: 1px solid #EAE1D7; border-radius: 12px; padding: 18px 20px; margin: 26px 0;">
            <p style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; color: #3F4B2B; font-weight: bold;">
              For More Information & Enquiries:
            </p>
            <table style="width: 100%; font-size: 14px; color: #2A2E24; border-collapse: collapse;">
              <tr>
                <td style="padding: 4px 0; width: 28px;">📞</td>
                <td style="padding: 4px 0;">
                  <a href="tel:+2349165840610" style="color: #3F4B2B; text-decoration: none; font-weight: 500;">+234 916 584 0610</a> 
                  <span style="color: #6B7258; font-size: 13px;">— Aderonke</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 4px 0; width: 28px;">💬</td>
                <td style="padding: 4px 0;">
                  <a href="https://wa.me/2348072484722" style="color: #3F4B2B; text-decoration: none; font-weight: 500;">08072484722</a> 
                  <span style="color: #6B7258; font-size: 13px;">— Precious (WhatsApp)</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 4px 0; width: 28px;">✉️</td>
                <td style="padding: 4px 0;">
                  <a href="mailto:globalwivessummit@gmail.com" style="color: #3F4B2B; text-decoration: none; font-weight: 500;">globalwivessummit@gmail.com</a>
                </td>
              </tr>
            </table>
          </div>

          <p style="font-size: 14px; color: #6B7258; margin: 24px 0 0 0; font-style: italic;">
            Warm regards,<br />
            <strong>The Global Women Summit Team</strong><br />
            Convening in Lagos, Nigeria
          </p>
        </div>

        <!-- Footer -->
        <div style="background-color: #F3EFE8; padding: 18px 24px; text-align: center; font-size: 12px; color: #7B856B; border-top: 1px solid #EAE1D7;">
          © 2027 Global Wives Summit. All rights reserved.
        </div>

      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: data.email,
    subject: subject,
    name: "Global Women Summit",
    replyTo: "globalwivessummit@gmail.com",
    htmlBody: htmlBody
  });
}

// ---------------------------------------------------------
// EMAIL: GRANT APPLICATION CONFIRMATION
// ---------------------------------------------------------
function sendGrantConfirmationEmail(data) {
  var recipientName = data.fullName || 'Applicant';
  var categoryLabel = data.grantType ? data.grantType.toUpperCase() : 'BENEVOLENCE';
  var subject = "Application Received: GWS 2027 Grant & Seed Funding Initiative";
  var whatsappGroupUrl = "https://chat.whatsapp.com/Gxl9V3GkCfxLsLaMNaFUjP?mode=gi_t";

  var htmlBody = `
    <div style="background-color: #FAF8F5; padding: 40px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #2A2E24; line-height: 1.6;">
      <div style="max-width: 580px; margin: 0 auto; background: #FFFFFF; border: 1px solid #EAE1D7; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
        
        <!-- Header Banner -->
        <div style="background-color: #3F4B2B; padding: 36px 30px; text-align: center; color: #FAF8F5;">
          <p style="margin: 0 0 6px 0; font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: #DFCA98;">
            BENEVOLENCE & EMPOWERMENT INITIATIVE
          </p>
          <h1 style="margin: 0; font-family: Georgia, serif; font-size: 24px; font-weight: normal; color: #FAF8F5;">
            GWS 2027 Grant Application
          </h1>
          <p style="margin: 8px 0 0 0; font-style: italic; color: #EAE1D7; font-size: 15px;">
            Grants & Seed Funding Up to ₦500,000
          </p>
        </div>

        <!-- Body Content -->
        <div style="padding: 32px 30px;">
          <p style="font-size: 16px; margin: 0 0 16px 0;">
            Dear <strong>${recipientName}</strong>,
          </p>
          <p style="font-size: 15px; margin: 0 0 18px 0; color: #3A4032;">
            Thank you for submitting your application for the <strong>GWS 2027 Benevolence & Seed Funding Initiative</strong>. We have successfully logged your entry.
          </p>

          <!-- Category Pill -->
          <div style="background-color: #F6F3EB; border-left: 4px solid #C6A96B; padding: 14px 18px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 4px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #5C6B42; font-weight: bold;">
              SELECTED CATEGORY
            </p>
            <p style="margin: 0; font-size: 16px; font-family: Georgia, serif; color: #3F4B2B; font-weight: 600;">
              ${categoryLabel} GRANT INITIATIVE
            </p>
          </div>

          <p style="font-size: 15px; margin: 0 0 18px 0; color: #3A4032;">
            Our evaluation committee will carefully review your submission against our criteria of societal impact, feasibility, and purpose. Shortlisted candidates will be contacted directly with next steps.
          </p>

          <!-- WHATSAPP COMMUNITY ACTION CARD -->
          <div style="background-color: #E8F5E9; border: 2px solid #25D366; border-radius: 14px; padding: 20px; margin: 24px 0; text-align: center;">
            <p style="margin: 0 0 6px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #1E7E34; font-weight: bold;">
              STAY CONNECTED
            </p>
            <h3 style="margin: 0 0 8px 0; font-family: Georgia, serif; font-size: 18px; color: #1B4323; font-weight: normal;">
              Join the Global Wives WhatsApp Group
            </h3>
            <p style="font-size: 13px; color: #2D5A35; margin: 0 0 16px 0;">
              If you haven't joined yet, please connect with the official attendee group to stay informed on key summit updates and announcements.
            </p>
            <a href="${whatsappGroupUrl}" target="_blank" style="display: inline-block; background-color: #25D366; color: #FFFFFF; text-decoration: none; font-weight: 600; font-size: 13px; padding: 12px 24px; border-radius: 50px; letter-spacing: 0.05em; text-transform: uppercase;">
              👉 Join WhatsApp Group Now
            </a>
          </div>

          <!-- Contact & Enquiries Block -->
          <div style="background-color: #FAF8F5; border: 1px solid #EAE1D7; border-radius: 12px; padding: 18px 20px; margin: 26px 0;">
            <p style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; color: #3F4B2B; font-weight: bold;">
              For More Information & Enquiries:
            </p>
            <table style="width: 100%; font-size: 14px; color: #2A2E24; border-collapse: collapse;">
              <tr>
                <td style="padding: 4px 0; width: 28px;">📞</td>
                <td style="padding: 4px 0;">
                  <a href="tel:+2349165840610" style="color: #3F4B2B; text-decoration: none; font-weight: 500;">+234 916 584 0610</a> 
                  <span style="color: #6B7258; font-size: 13px;">— Aderonke</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 4px 0; width: 28px;">💬</td>
                <td style="padding: 4px 0;">
                  <a href="https://wa.me/2348072484722" style="color: #3F4B2B; text-decoration: none; font-weight: 500;">08072484722</a> 
                  <span style="color: #6B7258; font-size: 13px;">— Precious (WhatsApp)</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 4px 0; width: 28px;">✉️</td>
                <td style="padding: 4px 0;">
                  <a href="mailto:globalwivessummit@gmail.com" style="color: #3F4B2B; text-decoration: none; font-weight: 500;">globalwivessummit@gmail.com</a>
                </td>
              </tr>
            </table>
          </div>

          <p style="font-size: 14px; color: #6B7258; margin: 24px 0 0 0; font-style: italic;">
            Warm regards,<br />
            <strong>The Global Women Summit Team</strong><br />
            Benevolence & Empowerment Committee
          </p>
        </div>

        <!-- Footer -->
        <div style="background-color: #F3EFE8; padding: 18px 24px; text-align: center; font-size: 12px; color: #7B856B; border-top: 1px solid #EAE1D7;">
          © 2027 Global Wives Summit. All rights reserved.
        </div>

      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: data.email,
    subject: subject,
    name: "Global Women Summit",
    replyTo: "globalwivessummit@gmail.com",
    htmlBody: htmlBody
  });
}
