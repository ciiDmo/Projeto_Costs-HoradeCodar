import LinkButton from '../layout/LinkButton'

import styles from './Home.module.css'

import savings from '../../img/savings.svg'

function Home() {
    return (
        <>
            <section className={styles.home_container}>
                <h1>Bem-vindo ao <span>COSTS</span></h1>
                <p>Começe a gerenciar seus projetos agora mesmo!</p>
                <LinkButton to="/newproject" text="Criar Projeto" />
                <img src={savings} alt="Savings" />
            </section>
        </>
    )
}

export default Home