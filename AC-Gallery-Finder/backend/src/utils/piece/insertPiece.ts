import {connect} from "../database.utils";
import {Piece} from "../interfaces/Piece";

export async function insertPiece(piece: Piece) : Promise<string>{
    try {
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO piece(pieceId, pieceProfileId, pieceDescription, pieceImage, pieceName) VALUES (UUID_TO_BIN(UUID()) , UUID_TO_BIN(:pieceProfileId), :pieceDescription, :pieceImage, :pieceName)';
        await mysqlConnection.execute(query, piece);
        return 'Piece Successfully Created'
    } catch (error) {
        throw error
    }
}