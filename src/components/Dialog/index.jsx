import './dialog.style.css';
import { useRef } from 'react';

export function Dialog() {

    const dialogRef = useRef(null);

    const showButton = () => {
        dialogRef.current.showModal();
    }

    const closeButton = () => {
        dialogRef.current.close();
    }

    return (
        <>
            <dialog ref={dialogRef}>
                <button onClick={closeButton}>Close</button>
                <p>This modal dialog has a groovy backdrop!</p>
            </dialog>
            <button onClick={showButton}>Show the dialog</button>
        </>
    )
}