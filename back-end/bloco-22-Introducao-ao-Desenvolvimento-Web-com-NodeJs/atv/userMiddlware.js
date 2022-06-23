const validateUsername = (req, res, next) => {
    const { username } = req.body;
    if (username.length < 3) return res.status(400).json({message: 'Invalid data'});
    next();
}

const validateEmail = (req, res, next) => {
    const { email } = req.body;
    const testEmail = /\S+@\S+\.\S+/;
    if (!testEmail.test(email)) return res.status(400).json({ message: "invalid data" });
    next();
}

const validatePassword = (req, res, next) => {
    const { password } = req.body;
    if (password < 4 || password > 8) return res.status(400).json({ message: "invalid data" });
    next();
}

module.exports = {
    validateUsername,
    validateEmail,
    validatePassword
}