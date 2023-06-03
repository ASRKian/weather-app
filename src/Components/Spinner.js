import React from 'react'
import '../App.css'

export default function Spinner() {
    return (
        <div className="spinner-border text-light spinner" role="status">
            <span className="visually-hidden ">Loading...</span>
        </div>
    )
}
