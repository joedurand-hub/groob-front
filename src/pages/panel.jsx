import { useState } from 'react'
import Image from 'next/image'
import styles from './panel.module.css'
import InfiniteScroll from 'react-infinite-scroll-component'
const Panel = () => {
    // const [panel, setPanel] = useState("metricas")
    return (
        <>
        {/* El InfiniteScrollcomponente se puede utilizar de tres maneras.

Especifique un valor para la heightpropiedad si desea que su contenido desplazable tenga una altura específica, proporcionando barras de desplazamiento para desplazar su contenido y obtener más datos.
Si su contenido desplazable se representa dentro de un elemento principal que ya proporciona barras de desplazamiento de desbordamiento, puede configurar la scrollableTargetpropiedad para que haga referencia al elemento DOM y usar sus barras de desplazamiento para obtener más datos.
Sin configurar los accesorios heighto scrollableTarget, el desplazamiento ocurrirá document.bodycomo el desplazamiento de la línea de tiempo de Facebook . */}
{/* <InfiniteScroll
  dataLength={items.length} //This is important field to render the next data
  next={fetchData}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  // below props only if you need pull down functionality
  refreshFunction={this.refresh}
  pullDownToRefresh
  pullDownToRefreshThreshold={50}
  pullDownToRefreshContent={
    <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
  }
  releaseToRefreshContent={
    <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
  }
>
  {items}
</InfiniteScroll> */}
            {/* <main className={styles.main}>

                <sidebar className={styles.sidebar}>
                <Image src="/Logo.png" width={250} height={150} alt="imagen" />

                    <div className={styles.container_buttons_sidebar}>

                        <h3>DASHBOARD</h3>
                        <button className={styles.sidebar_button} onClick={() => setPanel("metricas")}>Métricas</button>
                        <hr/>

                        <h3>MODERACIÓN</h3>
                        <button className={styles.sidebar_button} onClick={() => setPanel("publicaciones")}>Publicaciones</button>
                        <br/>
                        <button className={styles.sidebar_button} onClick={() => setPanel("perfiles")}>Perfiles</button>
                        <br/>
                        <button className={styles.sidebar_button} onClick={() => setPanel("nsfw")}>NSFW</button>

                    </div>

                </sidebar>
                <section className={styles.section}>
                    <h1>Groob</h1>
                    {panel === "metricas" && (
                        <>
                            <h2><strong>Métricas</strong></h2>
                            <div className={styles.section_container}>
                                <div className={styles.container_box}>

                                    <div className={styles.section_container_box}>
                                        <h6>Cantidad de usuarios registrados</h6>
                                    </div>
                                    <div className={styles.section_container_box}>
                                        <h6>Cantidad de usuarios online</h6>

                                    </div>
                                    <div className={styles.section_container_box}>
                                        <h6>Publicaciones con precio</h6>
                                    </div>
                                    <div className={styles.section_container_box}>
                                        <h6>Métrica 4</h6>
                                    </div>
                                    <div className={styles.section_container_box}>
                                    <h6>Métrica 5</h6>

                                    </div>
                                    <div className={styles.section_container_box}>
                                    <h6>Métrica 6</h6>

                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {panel === "publicaciones" && (
                        <>
                            <h2><strong>Publicaciones</strong></h2>
                            <div className={styles.section_container}>
                                <div className={styles.section_container_post}>
                                    <h5>Nombre de usuario</h5>
                                    <Image src="/Logo.png" width={150} height={150} alt="imagen" />
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ducimus necessitatibus excepturi perspiciatis vitae sed dolorem officiis laborum magnam voluptas.</p>
                                    <div className={styles.container_box_buttons}>
                                        <button className={styles.box_button}>Mantener</button>
                                        <button className={styles.box_button}>Eliminar</button>
                                    </div>
                                </div>
                                <div className={styles.section_container_post}>
                                    <h5>Nombre de usuario</h5>
                                    <Image src="/Logo.png" width={150} height={150} alt="imagen" />
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ducimus necessitatibus excepturi perspiciatis vitae sed dolorem officiis laborum magnam voluptas.</p>
                                    <div className={styles.container_box_buttons}>
                                        <button className={styles.box_button}>Mantener</button>
                                        <button className={styles.box_button}>Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {panel === "perfiles" && (
                        <>
                            <h2><strong>Perfiles</strong></h2>
                            <div className={styles.section_container}>
                                <div className={styles.section_container_post}>
                                    <h5>Nombre de usuario</h5>
                                    <Image src="/Logo.png" width={150} height={150} alt="imagen" />
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ducimus necessitatibus excepturi perspiciatis vitae sed dolorem officiis laborum magnam voluptas.</p>
                                    <div className={styles.container_box_buttons}>
                                        <button className={styles.box_button}>Mantener</button>
                                        <button className={styles.box_button}>Eliminar</button>
                                    </div>
                                </div>
                                <div className={styles.section_container_post}>
                                    <h5>Nombre de usuario</h5>
                                    <Image src="/Logo.png" width={150} height={150} alt="imagen" />
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ducimus necessitatibus excepturi perspiciatis vitae sed dolorem officiis laborum magnam voluptas.</p>
                                    <div className={styles.container_box_buttons}>
                                        <button className={styles.box_button}>Mantener</button>
                                        <button className={styles.box_button}>Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {panel === "nsfw" && (
                        <>
                            <h2><strong>NSFW - publicaciones</strong></h2>
                            <div className={styles.section_container}>
                                <div className={styles.section_container_post}>
                                    <h5>Nombre de usuario</h5>
                                    <Image src="/Logo.png" width={150} height={150} alt="imagen" />
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ducimus necessitatibus excepturi perspiciatis vitae sed dolorem officiis laborum magnam voluptas.</p>
                                    <div className={styles.container_box_buttons}>
                                        <button className={styles.box_button}>QUITAR NSFW</button>
                                        <button className={styles.box_button}>ASIGNAR NSFW</button>
                                    </div>
                                </div>
                                <div className={styles.section_container_post}>
                                    <h5>Nombre de usuario</h5>
                                    <Image src="/Logo.png" width={150} height={150} alt="imagen" />
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ducimus necessitatibus excepturi perspiciatis vitae sed dolorem officiis laborum magnam voluptas.</p>
                                    <div className={styles.container_box_buttons}>
                                        <button className={styles.box_button}>QUITAR NSFW</button>
                                        <button className={styles.box_button}>ASIGNAR NSFW</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </section>
            </main> */}
        </>
    )
}

export default Panel