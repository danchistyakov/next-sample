import { useEffect, useRef, useState } from "react";

const useSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Account');
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as HTMLDivElement) && !buttonRef.current?.contains(event.target as HTMLButtonElement)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setIsOpen(prev => !prev);
    };

    const handleItemClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setSelectedItem(e.currentTarget.id);
        setIsOpen(false);
    };

    return { buttonRef, isOpen, handleButtonClick, handleItemClick, menuRef, selectedItem }

}

export default useSelect;