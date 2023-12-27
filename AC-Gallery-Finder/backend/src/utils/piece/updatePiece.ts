import {Piece} from "../interfaces/Piece";
import {connect} from "../database.utils";

export async function updatePiece(piece: Piece): Promise<string>  {
    try {
        const mysqlConnection = await connect();
        const query : string = 'UPDATE piece SET pieceProfileId = :pieceProfileId, pieceDescription = :pieceDescription, pieceName = :pieceName, pieceImage = :pieceImage WHERE pieceId = UUID_TO_BIN(:pieceId)';
        await mysqlConnection.execute(query, piece);
        return 'Piece successfully updated'
    } catch (error) {
        throw error;
    }
}


