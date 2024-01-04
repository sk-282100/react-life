import React, { useState } from 'react'

export default function TextSummary(props) {
    return (
        <>
            <div className="container my-3">
                <h2>Your Text Summary:</h2>
                <p>{props.wordCount} words, {props.characterCount} characters</p>
            </div>
        </>
    )
}