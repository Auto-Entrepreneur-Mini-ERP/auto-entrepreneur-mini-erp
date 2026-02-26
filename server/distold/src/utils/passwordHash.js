import bcrypt from 'bcrypt';
const passwordHash = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};
const passwordMatch = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};
export { passwordHash, passwordMatch };
//# sourceMappingURL=passwordHash.js.map