import { useEffect, useRef, useState } from "react";

const useSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Account');
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const menuRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current?.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    const handleButtonClick = (e) => {
        e.stopPropagation();
        setIsOpen(prev => !prev);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    return { buttonRef, isOpen, handleButtonClick, handleItemClick, menuRef, selectedItem, setIsOpen }

}

export default useSelect;