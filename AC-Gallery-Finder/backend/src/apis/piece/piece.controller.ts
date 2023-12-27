import {Request, Response} from "express";
import {Piece} from "../../utils/interfaces/Piece";
import {Status} from "../../utils/interfaces/Status";
import {updatePiece} from "../../utils/piece/updatePiece";
import {selectPieceByPieceId} from "../../utils/piece/selectPieceByPieceId";
import {Profile} from "../../utils/interfaces/Profile";
import {insertPiece} from "../../utils/piece/insertPiece";
import {selectPieceByPieceProfileId} from "../../utils/piece/selectPieceByPieceProfileId";

export async function postPiece(request: Request, response: Response) : Promise<Response<Status>> {
    try {

        const {pieceDescription, pieceImage, pieceName} = request.body;
        const profile : Profile = request.session.profile as Profile
        const pieceProfileId : string = <string>profile.profileId

        const piece: Piece = {
            pieceId: null,
            pieceProfileId,
            pieceDescription,
            pieceImage,
            pieceName,
        }
        console.log("piece",piece)
        const result = await insertPiece(piece)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        };
        return response.json(status);

    } catch(error) {
        console.error(error)
        return  response.json({
            status: 500,
            message: "Error creating piece, try again later.",
            data: null
        });
    }
}

export async function putPieceController(request: Request, response: Response) : Promise<Response>{
    try {
        const {pieceId} = request.params
        const {pieceDescription, pieceProfileId, pieceName, pieceImage} = request.body
        const piece = await selectPieceByPieceId(pieceId)
        const profile = <Profile>request.session.profile
        const profileIdFromSession = <string>profile.profileId

        const preformUpdate = async (piece: Piece) : Promise<Response> => {
            const previousPiece: Piece = await selectPieceByPieceId(<string>piece.pieceId) as Piece
            const newPiece: Piece = {...previousPiece, ...piece}
            await updatePiece(newPiece)
            return response.json({status: 200, data: null, message: "Piece successfully updated"})
        }

        const updateFailed = (message: string) : Response => {
            return response.json({status: 400, data: null, message})
        }

        return profileIdFromSession === piece?.pieceProfileId
            ? preformUpdate({pieceId, pieceProfileId, pieceDescription, pieceName, pieceImage})
            : updateFailed("you are not allowed to preform this action")
    } catch (error: any) {
        return response.json( {status:400, data: null, message: error.message})
    }
}

export async function getPieceByPieceProfileId(request: Request, response: Response) : Promise<Response> {
    try {
        const profileId = request.session.profile?.profileId ?? ""
        const mySqlResult = await selectPieceByPieceProfileId(profileId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data:data, message: "Successfully got piece by pieceProfileId"}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))
    }
}


export async function getPieceByPieceId(request: Request, response: Response) : Promise<Response> {
    try {
        const {pieceId} = request.params;
        const mySqlResult = await selectPieceByPieceId(pieceId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))
    }
}