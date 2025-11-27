import { IconClose } from '../icons';
import './dialog.style.css';
import { useRef, useEffect } from 'react';

export function Dialog({ isOpen, onClose, children }) {

    const dialogRef = useRef(null);

    const openDialog = () => {
        dialogRef.current.showModal();
    }

    const closeDialog = () => {
        dialogRef.current.close();
    }

    useEffect(() => {
        if (isOpen) {
            openDialog();
        } else {
            closeDialog();
        }
    }, [isOpen]);

    useEffect(() => {
        const dialog = dialogRef.current
        dialog?.addEventListener('close', onClose)
        return () => {
            dialog?.removeEventListener('close', onClose)
        }
    }, [onClose])

    return (
        <>
            <dialog ref={dialogRef} className='dialog'>
                <div className='btn-close-wrapper'>
                    <button autoFocus onClick={onClose} className='btn-close'>
                        <IconClose />
                    </button>
                </div>
                <div className='body'>
                    {children}
                </div>
            </dialog>
        </>
    )
}