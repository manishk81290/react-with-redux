import React from 'react';

const ColorChange=(WrappedComponent)=>{
    const colors=['red','orange','blue','purple','pink','green','aqua'];
    const randomColor=colors[Math.floor(Math.random()*5)];
    const className=randomColor+'-text';

    return (props)=>{
        return(
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}


export default ColorChange;