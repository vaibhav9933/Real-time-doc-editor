import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const SERVER_URL = "http://localhost:5000";

export default function App() {
    const [documentId, setDocumentId] = useState("test-document"); // Default document ID
    const [isConnected, setIsConnected] = useState(false);
    const editorRef = useRef(null);
    const socketRef = useRef(null);

    useEffect(() => {
        if (!documentId) return;

        // Initialize Socket.io
        socketRef.current = io(SERVER_URL);

        socketRef.current.on("connect", () => {
            console.log("✅ Connected to Server");
            setIsConnected(true);
            socketRef.current.emit("get-document", documentId);
        });

        socketRef.current.on("disconnect", () => {
            console.log("❌ Disconnected from Server");
            setIsConnected(false);
        });

        socketRef.current.on("load-document", (data) => {
            if (editorRef.current) {
                editorRef.current.setContents(data);
            }
        });

        socketRef.current.on("receive-changes", (delta) => {
            if (editorRef.current) {
                editorRef.current.updateContents(delta);
            }
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, [documentId]);

    useEffect(() => {
        // Initialize Quill Editor
        const quill = new Quill("#editor", {
            theme: "snow",
            placeholder: "Start typing...",
        });

        editorRef.current = quill;

        // Handle text changes
        quill.on("text-change", (delta, oldDelta, source) => {
            if (source === "user" && socketRef.current) {
                socketRef.current.emit("send-changes", delta);
                socketRef.current.emit("save-document", quill.getContents());
            }
        });

        return () => {
            quill.off("text-change");
        };
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>📝 Real-Time Collaborative Editor</h1>

            <div style={{ marginBottom: "10px" }}>
                <label>📄 Document ID: </label>
                <input
                    type="text"
                    value={documentId}
                    onChange={(e) => setDocumentId(e.target.value)}
                    style={{
                        padding: "8px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        fontSize: "16px",
                    }}
                />
                <button
                    onClick={() => window.location.reload()}
                    style={{
                        marginLeft: "10px",
                        padding: "8px 15px",
                        fontSize: "16px",
                        borderRadius: "5px",
                        border: "none",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        cursor: "pointer",
                    }}
                >
                    Load Document
                </button>
            </div>

            <div id="editor" style={{ height: "300px", border: "1px solid #ccc" }}></div>

            <p style={{ marginTop: "10px", color: isConnected ? "green" : "red" }}>
                {isConnected ? "🟢 Connected" : "🔴 Disconnected"}
            </p>
        </div>
    );
}
