import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const data =[
    {
        username:"midudev",
        name:"Miguel Gonazales Sarmiento",
        isFollowing:true
    },
    {
        username:"sebasrb08",
        name:"Sebastian Rueda Bedoya",
        isFollowing:false
    },
    {
        username:"naruto",
        name:"Naruto Uzumaki",
        isFollowing:false
    },
    {
        username:"ElonMusk",
        name:"Elon Musk",
        isFollowing:true
    }
]



export function App(){
   
    const format = (username)=> `@${username}`
    return(
        <>

            {data.map(({username, name , isFollowing})=>(
                <TwitterFollowCard key={username} initialIsFollowing={isFollowing}  format={format}  username={username} >
                    {name}
                </TwitterFollowCard>
            ))
            }

        </>
    )
}

