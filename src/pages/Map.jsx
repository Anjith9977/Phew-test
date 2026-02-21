import React from 'react'

function Map() {
    return (
        <div className="w-full h-[400px] rounded-xl overflow-hidden mb-20">
            <iframe
                title="location"
                className="w-full h-full border-0"
                src="https://www.google.com/maps?q=Abu%20Dhabi&output=embed"
            />
        </div>
    )
}

export default Map