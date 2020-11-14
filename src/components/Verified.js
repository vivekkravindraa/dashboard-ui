import React from 'react'
import { useSelector } from 'react-redux';

export default function Verified() {
    const colorMode = useSelector(state => state.colorMode);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: !colorMode ? 'white' : 'black',
            height: '100vh',
            color: !colorMode ? 'purple' : "yellow"
        }}>
            Verified Component
        </div>
    )
}
