import {Schema} from "express-validator";

export const pieceValidator : Schema = {
    pieceId: {
        escape: true,
        trim: true,
    },
    pieceDescription: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'pieceDescription must be between one and fifty characters',
            options: {min:1, max: 50 }
        }
    },
    pieceName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'pieceName must be between one and twenty characters',
            options: {min:1, max: 20 }
        }
    }
}