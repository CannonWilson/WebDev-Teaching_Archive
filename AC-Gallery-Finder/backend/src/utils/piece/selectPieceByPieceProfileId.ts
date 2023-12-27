import {connect} from "../database.utils";
import {Piece} from "../interfaces/Piece";
import {RowDataPacket} from 'mysql2';

export async function selectPieceByPieceProfileId(pieceProfileId: string): Promise<Piece[]>  {
    try {
        const mysqlConnection = await connect();
        const sqlQuery: string = 'SELECT BIN_TO_UUID(pieceId) as pieceId, BIN_TO_UUID(pieceProfileId) AS pieceProfileId, pieceDescription, pieceName, pieceImage FROM piece WHERE pieceProfileId = pieceProfileId'
        const result = await <RowDataPacket>mysqlConnection.execute(sqlQuery, {pieceProfileId})
        return result[0] as Piece[]
    } catch (error) {
        throw error
    }
}