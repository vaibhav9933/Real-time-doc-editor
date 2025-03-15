const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");
const multer = require("multer");
const path = require("path");
require("dotenv").config();
const Document = require("./models/Document");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});

// ✅ **Middleware**
app.use(cors());
app.use(express.json());

// ✅ **File Storage Setup**
const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage });

// ✅ **Handle File Uploads**
app.post("/upload", upload.single("file"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    res.json({ filePath: `/uploads/${req.file.filename}` });
});

// ✅ **Serve Uploaded Files**
app.use("/uploads", express.static("uploads"));

// ✅ **Connect MongoDB with Auto-Reconnect**
const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "realtime-docs",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err);
        setTimeout(connectMongoDB, 5000); // Retry connection after 5 seconds
    }
};
connectMongoDB();

mongoose.connection.on("error", (err) => console.error("❌ Database error:", err));
mongoose.connection.once("open", () => console.log("🗄️ Database connection established"));

// ✅ **Socket.io for Real-Time Collaboration**
io.on("connection", (socket) => {
    console.log(`🔗 New user connected: ${socket.id}`);

    // ✅ **User requests a document**
    socket.on("get-document", async (documentId) => {
        try {
            if (!documentId) return;

            let document = await Document.findById(documentId);
            if (!document) {
                document = await Document.create({ _id: documentId, content: "" });
            }

            socket.join(documentId);
            socket.emit("load-document", document.content);

            console.log(`📄 User joined document: ${documentId}`);

            // ✅ **Listen for text changes**
            socket.on("send-changes", (delta) => {
                console.log(`✍️ Changes received: ${JSON.stringify(delta)}`);
                socket.to(documentId).emit("receive-changes", delta);
            });

            // ✅ **Auto-Save Document**
            socket.on("save-document", async (content) => {
                console.log(`💾 Saving document: ${documentId}`, content);
                try {
                    await Document.findByIdAndUpdate(documentId, { content }, { new: true, upsert: true });
                } catch (error) {
                    console.error("❌ Error saving document:", error);
                }
            });
        } catch (error) {
            console.error("❌ Error handling document:", error);
            socket.emit("error", "An error occurred while loading the document.");
        }
    });

    // ✅ **User Disconnection**
    socket.on("disconnect", () => {
        console.log(`❌ User disconnected: ${socket.id}`);
    });
});

// ✅ **Route for Testing Server**
app.get("/", (req, res) => {
    res.send("🟢 Server is running!");
});

// ✅ **Graceful Shutdown**
process.on("SIGINT", async () => {
    console.log("🔴 Closing server...");
    await mongoose.disconnect();
    server.close(() => {
        console.log("✅ Server closed.");
        process.exit(0);
    });
});

// ✅ **Start Server**
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
