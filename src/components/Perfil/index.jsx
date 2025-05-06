//ESTRUTURA DE ARQUIVOS
// 1. importacao
// 2. Estrutura do arquivo
// 3. Exportacao

import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {

    // const { nome } = props;

    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>
                {nomeUsuario}
                </h1>
        </header>
    )
}

export default Perfil;