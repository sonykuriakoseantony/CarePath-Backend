const transporter = require("./mailer");

const sendApprovalMail = async ({
  to,
  patientName,
  caseId,
  doctorName,
}) => {

    console.log(to, patientName, caseId, doctorName);

  await transporter.sendMail({
    from: '"CarePath" <no-reply@carepath.com>',
    to,
    subject: "Your case has been approved",
    html: `
      <p>Hello ${patientName},</p>
      <p>Your case <b>${caseId}</b> has been approved.</p>
      <p><b>Doctor:</b> Dr. ${doctorName}</p>
      <p>You may now proceed to booking.</p>
      <br/>
      <p>CarePath Team</p>
    `,
  });
};

module.exports = sendApprovalMail;