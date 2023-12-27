import React from 'react'

import EventModal from './EventModal'
import PieceModal from './PieceModal'
import ProfilePicModal from './ProfilePicModal'


const ModalManager = ({
                          closeFn = () => null,
                          modal = ''
                      }) => (
    <>
        <EventModal
            closeFn={closeFn}
            open={modal === 'event-modal'} />

        <PieceModal
            closeFn={closeFn}
            open={modal === 'piece-modal'} />

        <ProfilePicModal
            closeFn={closeFn}
            open={modal === 'profilepic-modal'} />
    </>
)

export default ModalManager