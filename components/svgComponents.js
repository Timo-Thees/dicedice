export function DSix1({width, height, fill}){
    return(
        <svg width={width} height={height} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="48" height="48" rx="5" stroke={fill} stroke-width="2"/>
        <circle cx="25" cy="25" r="5" fill={fill}/>
        </svg>
    )
}
export function DSix2({width, height, fill}){
    return(
        <svg width={width} height={height} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="48" height="48" rx="5" stroke={fill} stroke-width="2"/>
        <circle cx="17" cy="33" r="5" fill={fill}/>
        <circle cx="34" cy="17" r="5" fill={fill}/>
        </svg>
    )
}
export function DSix3({width, height, fill}){
    return(
        <svg width={width} height={height} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="48" height="48" rx="5" stroke={fill} stroke-width="2"/>
        <circle cx="25" cy="25" r="5" fill={fill}/>
        <circle cx="39" cy="36" r="5" fill={fill}/>
        <circle cx="12" cy="14" r="5" fill={fill}/>
        </svg>
    )
}
export function DSix4({width, height, fill}){
    return(
        <svg width={width} height={height} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="48" height="48" rx="5" stroke={fill} stroke-width="2"/>
        <circle cx="37" cy="36" r="5" fill={fill}/>
        <circle cx="37" cy="14" r="5" fill={fill}/>
        <circle cx="14" cy="14" r="5" fill={fill}/>
        <circle cx="14" cy="36" r="5" fill={fill}/>
        </svg>
    )
}
export function DSix5({width, height, fill}){
    return(
        <svg width={width} height={height} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="48" height="48" rx="5" stroke={fill} stroke-width="2"/>
        <circle cx="39" cy="37" r="5" fill={fill}/>
        <circle cx="39" cy="13" r="5" fill={fill}/>
        <circle cx="11" cy="13" r="5" fill={fill}/>
        <circle cx="11" cy="37" r="5" fill={fill}/>
        <circle cx="25" cy="25" r="5" fill={fill}/>
        </svg>
    )
}
export function DSix6({width, height, fill}){
    return(
        <svg width={width} height={height} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="48" height="48" rx="5" stroke={fill} stroke-width="2"/>
        <circle cx="37" cy="39" r="5" fill={fill}/>
        <circle cx="37" cy="25" r="5" fill={fill}/>
        <circle cx="37" cy="11" r="5" fill={fill}/>
        <circle cx="14" cy="11" r="5" fill={fill}/>
        <circle cx="14" cy="39" r="5" fill={fill}/>
        <circle cx="14" cy="25" r="5" fill={fill}/>
        </svg>
    )
}
export function DSixAll({dice, width, heigth, fill}){
    return(
        <div>
            {dice===1?(<DSix1 width={width} height={heigth} fill={fill}/>):(<></>)}
            {dice===2?(<DSix2 width={width} height={heigth} fill={fill}/>):(<></>)}
            {dice===3?(<DSix3 width={width} height={heigth} fill={fill}/>):(<></>)}
            {dice===4?(<DSix4 width={width} height={heigth} fill={fill}/>):(<></>)}
            {dice===5?(<DSix5 width={width} height={heigth} fill={fill}/>):(<></>)}
            {dice===6?(<DSix6 width={width} height={heigth} fill={fill}/>):(<></>)}
        </div>
    )
}