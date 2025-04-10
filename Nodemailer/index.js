// import "dotenv/config";
// import { createTransport } from "nodemailer";
//
// // This for Gmail....
// const emailServer = createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.MY_EMAIL,
//         pass: process.env.PASSWORD,
//     },
// });
//
// // This for Outlook....
// // const emailServer = createTransport({
// //     host: "smtp.office365.com",
// //     port: 587,
// //     secure: false, // TLS
// //     auth: {
// //         user: process.env.MY_EMAIL,   // your outlook email
// //         pass: process.env.PASSWORD,   // your email password or app password
// //     },
// // });
//
// emailServer.sendMail(
//     {
//         from: process.env.MY_EMAIL,
//         to: process.env.SEND_EMAIL,
//         subject: "New Email",
//         text: "Hi, this is from Node.js!",
//     },
//     (err, info) => {
//         if (err) {
//             console.error(" Email not sent:", err);
//         } else {
//             console.log("Email sent successfully!");
//             console.log("Info:", info.response);
//         }
//     }
// );
//



import "dotenv/config";
import { createTransport } from "nodemailer";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Nodemailer transporter
const transporter = createTransport({
    service: "gmail",
    auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.PASSWORD,
    },
});

// Email content with file attachments
const mailOptions = {
    from: `"Node Mailer 🤖" <${process.env.MY_EMAIL}>`,
    to: process.env.SEND_EMAIL,
    subject: "📎 Files from Node.js",
    text: "Hey! Please find the attached file(s).",
    html: `
        <h2 style="font-family:sans-serif;">📁 Files are attached below!</h2>
        <p>Sent from a Node.js app using <strong>Nodemailer</strong>.</p>
    `,
    attachments: [
        {
            filename: "sample.txt",
            path: join(__dirname, "files", "sample.txt"),
        },
        {
            filename: "image.png",
            path: join(__dirname, "files", "image.png"),
        },
    ],
};

// Send the email
transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.error("Email failed:", err);
    } else {
        console.log("Email sent:", info.response);
    }
});
