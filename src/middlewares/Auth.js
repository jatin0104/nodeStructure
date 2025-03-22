const checkRequestBodyType = (req, res, next) => {
    const contentType = req.headers['content-type'];

    // Check if the Content-Type is application/json
    if (!contentType || !contentType.includes('application/json')) {
        return res.status(400).json({ error: "Invalid Content-Type. Expected application/json" });
    }

    next(); // Proceed to the next middleware or route handler
};

const checkRequestBody = (req, res, next) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    console.log("Login request received:", email);
    
    // Proceed to the next middleware or controller
    next();
};

module.exports = {
    checkRequestBodyType,
    checkRequestBody,
}