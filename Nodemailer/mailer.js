import "dotenv/config";
import { createTransport } from "nodemailer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create the email transporter using Gmail
const transporter = createTransport({
    service: "gmail",
    auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.PASSWORD,
    },
});

// Function to send an email with attachments
export const sendEmail = async ({ to, subject, message, files }) => {
    const attachments = files.map(file => ({
        filename: file.originalname,
        path: file.path,
    }));

    const mailOptions = {
        from: `"Node Mailer App 🚀" <${process.env.MY_EMAIL}>`,
        to,
        subject,
        html: `<h2>${subject}</h2><p>${message}</p>`,
        attachments,
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
    }
};
