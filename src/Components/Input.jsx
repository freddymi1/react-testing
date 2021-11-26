import React, { useState } from 'react'

export default function Input({showDiv}) {
    const [searchWord, setSearchWord] = useState("")
    return (
        <div>
            <input type="text"
            data-testid="searchBar"
            placeholder="Search..."
            onChange={(e)=>{
                setSearchWord(e.target.value);
            }}
            />

            <h1 data-testid="displaySearch">{searchWord}</h1>

            {
                showDiv && (
                    <div data-testid="divWeWantToShow">
                        hey My Name Is Freddy, pls subscribe I would be very happy pls
                    </div>
                )
            }
        </div>
    )
}
