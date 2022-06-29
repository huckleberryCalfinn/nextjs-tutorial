import Head from 'next/head';
import Link from 'next/link';
import Layout, {siteTitle} from '../components/layout';
import { getSortedPostsData} from '../lib/posts';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}




export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>introduction stuff goes here...</p>
        <p>
          (
            this is some good stuff {' '} but now a new line {' '}
            <a href='/posts/first-post'>go to first post page</a>
          )
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
              {
                allPostsData.map(({id, date, title})=>{
                  return (
                  <li className={utilStyles.listItem} key={id}>
                    {title}
                    <br/>
                    {id}
                    <br/>
                    {date}
                  </li>
                  );
                })
              }
            </ul>
      </section>
    </Layout>
  );
}
