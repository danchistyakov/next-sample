import { FC } from 'react';
import styles from './Header.module.css';
import Select from './components/Select';

const Header: FC = () => {
    return (
        <header className={styles.container}>
            <Select />
        </header>
    );
};

export default Header;