import jwt from "jsonwebtoken";
import { Request } from "express";
import { OPTION_TOKEN_KEY, SECRET_TOKEN_KEY } from "../../env";
import { IPayload } from "../../middlewares";

export const extractPayload = (req: Request) => {
    const token: string | undefined = req.header("auth-header");
    if (!token) return null;
    const optionTokenKey: string | undefined = OPTION_TOKEN_KEY?.toString();
    if (!SECRET_TOKEN_KEY || !optionTokenKey) throw new Error("Secret keys are empty");
    try {
        const payload: IPayload = jwt.verify(token, SECRET_TOKEN_KEY || optionTokenKey) as IPayload;
        return payload;
    } catch (error) {
        console.log("Error in the token: ", error);
        if (error instanceof jwt.TokenExpiredError) {
            const payload: IPayload | undefined = jwt.decode(token) as IPayload | undefined;
            if (payload) {
                throw new Error("Token de usuario expirado");
            }
        }
        throw new Error("Token vencido");
    }
};
