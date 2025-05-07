import { useState } from 'react';
import styles from './InputNome.module.css';

const InputNome = ({ setNomeUsuario }) => {
    const [inputValor, setInputValor] = useState('');

    return (
        <>
            <div className={styles.containerInput}>
                <form>
                    <input 
                        className={styles.input} type="text"  placeholder="Type your username" 
                        onChange={(e) => setInputValor(e.target.value)}
                    />
                    <button 
                        className={styles.button} 
                        type='button' 
                        onClick = {() => setNomeUsuario(inputValor)}
                    >
                        Search
                    </button>
                </form>
            </div>
        </>
    );
}

export default InputNome;