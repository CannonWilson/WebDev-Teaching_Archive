import {connect} from "../database.utils";
import {Piece} from "../interfaces/Piece";
import {RowDataPacket} from 'mysql2';

export async function selectPieceByPieceId(pieceId: string): Promise<Piece|null>  {
    try {
        const mysqlConnection = await connect();
        const sqlQuery: string = 'SELECT BIN_TO_UUID(pieceId) as pieceId, bin_to_uuid( pieceProfileId) as pieceProfileId, pieceDescription, pieceImage, pieceName FROM piece WHERE pieceId = UUID_TO_BIN(:pieceId)'
        const result = await mysqlConnection.execute(sqlQuery, {pieceId}) as RowDataPacket[]
        const rows: Piece[]  = result[0] as Piece[]
        return rows.length === 1 ? {...rows[0]} : null;
    } catch (error) {
        throw error
    }
}
