import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({initialIsFollowing,children,format ,username}){
    console.log(initialIsFollowing,children,username)
    const [isFollowing,setIsFollowing] = useState(initialIsFollowing)

    const following = isFollowing? 'Siguiendo':'Seguir';
    
    const buttonClasssname= isFollowing?
     'tw-followCard-button is-following':
     'tw-followCard-button';

    const handleClick=()=>{
        setIsFollowing(!isFollowing)
    }

    return(
        <article className="tw-followCard">
                <header className="tw-followCard-header">
                    <img className='tw-followCard-avatar' alt={children} src={`https://unavatar.io/${username}`} />
                    <div className="tw-followCard-info">
                        <strong>{children}</strong>
                        <span className="tw-followCard-infoUserName">{format(username)}</span>
                    </div>
                </header>
                <aside>
                    <button className={buttonClasssname} onClick={handleClick}>
                        <span className="tw-followCard--text">{following}</span>
                        <span className="tw-followCard-topFollow">Dejar de seguir</span>
                    </button>
                </aside>
        </article>
    )
}
