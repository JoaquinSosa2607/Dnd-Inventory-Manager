import bcrypt from "bcrypt";

export function hashPassword(password: string) {
    const saltround: number = 10;
    const passwordHashed: string = bcrypt.hashSync(password, saltround);
    return passwordHashed;
}

export async function validatePassword(password: string, userPassword: string) {
    const validatePassword: boolean = await bcrypt.compare(password, userPassword);
    return validatePassword;
}