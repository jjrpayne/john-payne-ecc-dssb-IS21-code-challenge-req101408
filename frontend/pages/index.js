import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3000/api/'

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(API_URL + 'products');
      const data = await response.json();
      setProducts(data);
    }
    fetchdata();
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>ECC Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          ECC Web Application Catalogue
        </h1>

        <p className={styles.description}>
          Total products: XX
        </p>
        <div className={styles.card}>
          <div className="relative overflow-x-auto">
            <table className="w-full text-md text-left text-gray-500 dark:text-gray-400">
              <thead className="text-sm text-gray-700 uppercase dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">Product Number</th>
                  <th scope="col" className="px-6 py-3">Product Name</th>
                  <th scope="col" className="px-6 py-3">Scrum Master</th>
                  <th scope="col" className="px-6 py-3">Product Owner</th>
                  <th scope="col" className="px-6 py-3">Developer Names</th>
                  <th scope="col" className="px-6 py-3">Start Date</th>
                  <th scope="col" className="px-6 py-3">Methodology</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map( (product, key) => 
                    <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="px-6 py-4">{product.productId}</td>
                      <td className="px-6 py-4">{product.productName}</td>
                      <td className="px-6 py-4">{product.scrumMasterName}</td>
                      <td className="px-6 py-4">{product.productOwnerName}</td>
                      <td className="px-6 py-4">{product.Developers}</td>
                      <td className="px-6 py-4">{product.startDate}</td>
                      <td className="px-6 py-4">{product.methodology}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
