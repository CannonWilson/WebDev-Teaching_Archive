import {getPieceByPieceId, getPieceByPieceProfileId, putPieceController, postPiece} from "./piece.controller";
import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {pieceValidator} from "./piece.validator";

export const PieceRoute = Router();
PieceRoute.route('/')
    .post(isLoggedIn,
        asyncValidatorController(checkSchema(pieceValidator)),
        postPiece);

PieceRoute.route("/pieceId/:pieceId")
    .get(
        asyncValidatorController([
            check("pieceId").isUUID()
        ]),
        getPieceByPieceId
    )
    .put(
        isLoggedIn,
        asyncValidatorController(checkSchema(pieceValidator)),
        putPieceController
    )

PieceRoute.route("/pieceProfileId/:pieceProfileId")
    .get(
        asyncValidatorController([
            check("pieceProfileId").isUUID()
        ]),
        getPieceByPieceProfileId
    )

    .put(isLoggedIn,
        asyncValidatorController(checkSchema(pieceValidator)), putPieceController)