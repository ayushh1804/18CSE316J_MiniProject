import { Router } from "express";

const router = Router();

// Home route
router.get("/", (req, res) => {
    res.json({
        message: "Welcome to Node Application",
        info: "This API is powered by Express. Explore the routes to learn more!",
        routes: [
            { path: "/", description: "Home route" },
            { path: "/health", description: "Check API health status" },

        ]
    });
});

// Health route
router.get("/health", (req, res, next) => {
    // Simulate an error for demonstration
    // throw new Error("Internal Server Error");

    // If you want to check database health or other services, add your logic here

    // If everything is good, send a success response
    res.status(200).json({ message: "API is healthy! 🌟" });
});

// Error handler middleware
router.use((err, req, res) => {
    res.status(500).json({
        message: "Something went wrong 💥",
        error: err.message
    });
});

export default router;