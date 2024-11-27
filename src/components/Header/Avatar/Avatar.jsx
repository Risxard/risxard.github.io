

import { lazy } from 'react';
import './Avatar.scss'
import AvatarLogo from './AvatarLogo.jsx'

const avatar = () => {
    return(
        <div className="Avatar-container" >
            <AvatarLogo/>
        </div>
    )
}
export default avatar;
