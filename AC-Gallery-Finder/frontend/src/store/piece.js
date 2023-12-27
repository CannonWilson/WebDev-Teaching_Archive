import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"

const pieceSlice = createSlice({
    name: "piece",
    initialState: null,
    reducers: {
        getAllPieces: (piece, action) => {
            return action.payload
        }
    }
})

export const {getAllPieces} = pieceSlice.actions

export const fetchAllPiece = () => async (dispatch) => {
    const {data} = await httpConfig.get('/apis/piece/')
    dispatch(getAllPieces(data))
}
export default pieceSlice.reducer