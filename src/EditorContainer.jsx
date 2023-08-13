import { useState } from 'react'
import './EditorContainer.css'

function EditorContainer({ children }) {
    return (
        <div className="editor-container">
            <div className='editor-content'>{children}</div>
        </div>
    );
}

export default EditorContainer