import { Button } from 'antd';
import React from 'react';
import styles from './Button.module.scss';

export default function CustomButton({ icon, text, onClick }) {
    return (
        <Button onClick={onClick} className={styles.button} type="primary" shape="round" icon={icon} size='middle'>
            {text}
        </Button>
    );
}
