import { CustomError } from "./CustomError";

export class ShortName extends CustomError {
    constructor() {
        super("nome muito curto", 400)
    }
}