import { Toolbar } from "../components/toolbar";
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Nofd.module.css';


export const NOTD = ({ articles }) => {
    const myLoader = ({ src }) => {
        return articles[0].urlToImage;
    }


    return (
        <>
        <Head>
        <meta property="og:image" content={articles[0]?.urlToImage} />
        <meta property="og:description" content={articles[0]?.description} />
        <meta property="og:title" content={articles[0]?.title + ' and more!'} />
      </Head>
        <div className="bg-image">
            <Toolbar />

            <div className={styles.main}>
                <div className={styles.headerRow}>
                    <Image
                        loader={myLoader}
                        src={articles[0].urlToImage}
                        alt="Image"
                        width={120}
                        height={120}
                        className={styles.imgRounded}
                    />
                    <h2 className={styles.headerText}>{articles[0].title}</h2>
                </div>
                <div className={styles.text}>
                    {articles[0].description}&nbsp;
                    <span className={styles.moreText} onClick={() => window.location.href = articles[0].url}>Read More</span>
                </div>
            </div>
        </div>
        </>
    )
}


export const getServerSideProps = async pageContext => {
    const pageNumber = Math.floor(Math.random() * 10);

    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=1&page=${pageNumber}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
            },
        },
    ).then(res => res.json());

    const { articles } = apiResponse;

    console.log(articles);

    return {
        props: {
            articles
        },
    };
}



export default NOTD;