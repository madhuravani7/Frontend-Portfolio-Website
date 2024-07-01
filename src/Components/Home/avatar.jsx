import React from "react"

function Avatar(){
    return <div class="avatar left-content">
               <img src={process.env.PUBLIC_URL + '/images/madhu.jpeg'} alt='pfp'/>
           </div>
}

export default Avatar