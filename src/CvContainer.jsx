import { useState } from 'react';
import './CvContainer.css';
import './print.css';

function CvContainer({ children }) {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="cv-container printable">
            {children}
        </div>
    );
}

export default CvContainer