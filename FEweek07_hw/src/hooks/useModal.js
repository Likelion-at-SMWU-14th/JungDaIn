import { useState, useRef, useEffect } from 'react';

export function useModal() {
    const [selectedSong, setSelectedSong] = useState(null);
    const modalRef = useRef(null);

    const openModal = (song) => setSelectedSong(song);
    const closeModal = () => setSelectedSong(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                closeModal();
            }
        }

        if (selectedSong) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [selectedSong]);

    return { selectedSong, modalRef, openModal, closeModal };
}

export default useModal;