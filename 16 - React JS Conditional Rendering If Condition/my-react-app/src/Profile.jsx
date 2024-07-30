import React, { useState } from "react";

export const Profile = () => {
    
    const [loging, setLoging] = useState(2);

    // if(loging)
    // {
    //     return(
    //         <>
    //             <h1>Welcome to User 1</h1>
    //         </>
    //     );
    // }else
    // {
    //     return(
    //         <>
    //             <h1>Welcome to User 2</h1>
    //         </>
    //     );
    // }
        return(
            <>
                {/* {loging?<h1>Welcome to User 1</h1>:<h1>Welcome to User 2</h1>} */}
                {/* {loging==1?<h1>Welcome to User 1</h1>:loging==2?<h1>Welcome to User 2</h1>:loging==3?<h1>Welcome to User 3</h1>:<h1>Welcome to Guest User</h1>} */}
                {loging==1?
                <h1>Welcome to User 1</h1>
                :loging==2?<h1>Welcome to User 2</h1>
                :loging==3?<h1>Welcome to User 3</h1>
                :<h1>Welcome to Guest User</h1>}
            </>
        );
};
