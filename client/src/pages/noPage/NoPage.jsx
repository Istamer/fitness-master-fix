import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const NoPage = () => {

    const navigator = useNavigate();

    const onBackClick = useCallback(()=>{
        navigator(-1, {replace: true});
    }, [])

    return (
        <div>
            <center>
                <div>
                    <h1>404</h1>
                    <h4>Page not found.. :(</h4>
                </div>
                <div>
                    <button onClick={onBackClick}>Back</button>
                </div>
            </center>
        </div>
    )
}

export default NoPage
