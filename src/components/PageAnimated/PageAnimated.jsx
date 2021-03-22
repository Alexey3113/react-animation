import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'


export const PageAnimated = ({children}) => {
    const { isAnimation } = useSelector((state) => {

        return state.animation
    })

    const classes = useMemo(() => isAnimation ? "page animate" : "page", [isAnimation]) 
    return (
        <div className={classes}>
            {children}
        </div>
    )
}

