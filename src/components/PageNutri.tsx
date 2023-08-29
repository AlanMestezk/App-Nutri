import { useEffect, useState } from "react"

import styles from './PageNutri.module.css'


export const PageNutri =()=>{

    const [nutri, setNutri] = useState([])

    useEffect(
        ()=>{
            const loadApi = ()=>{
                
                const url:string = "https://sujeitoprogramador.com/rn-api/?api=posts"
                fetch(url)//aqui estou chamando a api

                .then(

                    (r)=> r.json()
                )
                .then(
                    (json) =>{

                        //aqui dentro eu carrego todo o resultado da api
                        setNutri(json)
                    }
                )
            }
            

            loadApi()
        }
        ,[]
    )


    return(
        <>
            <header className={styles.container}>

                <section className={styles.header}>

                    <strong>Nutri Active</strong>

                </section>

            </header>

            <main>
                    {
                        nutri.map(
                            (i: any)=>{
                                return(
                                    <article key={i.id} className={styles.posts}>
                                        <strong className={styles.titulo}>{i.titulo}</strong>
                                        <img src={i.capa} alt={i.titulo} className={styles.capa}/>
                                        <p className={styles.subtitulo}>{i.subtitulo}</p>
                                        <a className={styles.botao}>acessar</a>
                                    </article>
                                )
                            }
                        )
                    }
            </main>
        </>
    )
}