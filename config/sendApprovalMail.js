const transporter = require("./mailer");

const sendApprovalMail = async ({
  to,
  patientName,
  caseId,
  doctorName,
  department
}) => {

    console.log(to, patientName, department, doctorName, process.env.MAIL_USER);

  await transporter.sendMail({
    from: `"CarePath" <${process.env.MAIL_USER}>`,
    to,
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
};

module.exports = sendApprovalMail;