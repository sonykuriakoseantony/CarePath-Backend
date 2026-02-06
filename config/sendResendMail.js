const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendCaseApprovedEmail({
  to,
  patientName,
  caseId,
  doctorName,
  department,
}) {
  return resend.emails.send({
    from: "CarePath <onboarding@resend.dev>",
    to: [to],
    subject: "Your case has been approved",
    html: `
      <p>Hello ${patientName},</p>
      <p>Your case <b>${caseId}</b> has been approved.</p>
      <p><b>Doctor:</b> Dr. ${doctorName} @ ${department} department</p>
      <p>You may now proceed to booking.</p>
      <br/>
      <p>CarePath Team</p>
    `,
  });
}

module.exports = sendCaseApprovedEmail;
