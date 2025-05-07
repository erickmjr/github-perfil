import { useEffect, useState } from "react";

import styles from './RepoList.module.css';

const ReposList = ({ nomeUsuario }) => {

    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [totalRepos, setTotalRepos] = useState(0);
    const [erro, setErro] = useState(false);

    useEffect(() => {
            setEstaCarregando(true)
            fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if(!res.ok) {
                    throw new Error(res.status);
                }
                setErro(false);
                return res.json();
            })
            .then(resJson => {
                setTotalRepos(resJson.length);
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 1000)
            })
            .catch(error => {
                setErro(true);
                alert(error);
                setEstaCarregando(false);
            })
    }, [nomeUsuario]);

    return (
        <>
            {(erro) ? (
                <h2>Error during repositories search.</h2>
            ) : (

                    <div className="container"> 
                        {estaCarregando ? (
                            <h1>Loading...</h1>
                        ) : (
                            <>
                                <h2>
                                    Repositories: {totalRepos}
                                </h2>
                                <ul
                                    className={styles.list}>
                                    {repos.map(({ id, name, language, html_url}) => (
                                        <li className={styles.listItem} key={id}>
                                            <div className={styles.itemName}>
                                                <b>Name:</b> {name}
                                            </div> 

                                            <div className={styles.itemLanguage}>
                                                <b>Language:</b> {language}
                                            </div> 
                                            
                                            <div>
                                                <a className={styles.itemLink} target="_blank" href={html_url}>View on GitHub</a>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                )
            }
        </>
    )
}

export default ReposList;