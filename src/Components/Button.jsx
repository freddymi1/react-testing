import React, { useState } from 'react'

export default function Button() {
    const [showAnotnerButton, setShowAnotherButton] = useState(false)
    return (
        <div>
            <button data-testid="button"
            onClick={()=>{
                setShowAnotherButton(true)
            }}>
                CLICK HEREEEEE
            </button>
            {
                showAnotnerButton && (
                    <button data-testid="button">
                        CLICK HEREEEEE
                    </button>
                )
            }
        </div>
    )
}
