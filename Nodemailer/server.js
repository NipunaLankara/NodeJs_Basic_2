import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { sendEmail } from "./mailer.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const upload = multer({ dest: "uploads/" });


app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post("/send-email", upload.array("attachments"), async (req, res) => {
    const { to, subject, message } = req.body;
    const files = req.files;

    try {

        await sendEmail({ to, subject, message, files });

        res.status(200).send("Email Sent Successfully!");
    } catch (err) {

        console.error(" Error sending email:", err);
        res.status(500).send(" Failed to send email.");
    } finally {
        // Clean up uploaded files
        if (files) {
            files.forEach(file => {
                fs.unlinkSync(file.path);
            });
        }
    }
});

// Serve the HTML form at the root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
