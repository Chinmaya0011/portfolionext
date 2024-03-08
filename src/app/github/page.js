"use client"
import React, { useState, useEffect } from 'react';
import style from '../styles/github.module.css';
import Image from 'next/image';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';

const Git = () => {
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [yourUserName, setYourUserName] = useState('Chinmaya0011');
  const [checkUserName, setCheckUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckYour = () => {
    setYourUserName(checkUserName);
  };

  useEffect(() => {
    const fetchGit = async () => {
      try {
        setIsLoading(true);

        const userResponse = await fetch(`https://api.github.com/users/${yourUserName}`);
        const userData = await userResponse.json();
        setUser(userData);

        const reposResponse = await fetch(`https://api.github.com/users/${yourUserName}/repos?page=${page}&per_page=${perPage}`);
        const reposData = await reposResponse.json();
        setRepositories(reposData);

        const linkHeader = reposResponse.headers.get('link');
        if (linkHeader) {
          const totalPagesRegex = /page=(\d+)>; rel="last"/;
          const totalPagesMatch = linkHeader.match(totalPagesRegex);
          if (totalPagesMatch) {
            setTotalPages(parseInt(totalPagesMatch[1], 10));
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGit();
  }, [page, perPage, yourUserName]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <><Header />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          
          <div className={style.container}>
            {user && (
              <div className={style.details}>
                <h2 className={style.heading}>
                  <a
                    style={{ textDecoration: "none" }}
                    href={`https://github.com/${yourUserName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {user.name}
                  </a>
                </h2>
                <Image src={user.avatar_url} alt="Avatar" width={100} height={100} />
                <p className={style.textusername}>
                  <a
                    style={{ textDecoration: "none" }}
                    href={`https://github.com/${yourUserName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Username: {user.login}
                  </a>
                </p>
                <p className={style.textbio}>Bio: {user.bio}</p>
                <p className={style.textfollowers}>Followers: {user.followers}</p>
                <p className={style.textfollowing}>Following: {user.following}</p>
              </div>
            )}
            <div className={style.seeyourgit}>
              <label className={style.checkyour}>Enter Your Github Username</label>
              <br />
              <input
                type='text'
                className={style.yourgitinput}
                placeholder='Chinmaya@0011'
                onChange={(e) => { setCheckUserName(e.target.value) }}
              />
              <button className={style.checkyou} onClick={handleCheckYour}>See</button>
            </div>
            <div className={style.repositories}>
              <h2 className={style.heading}>Repositories:</h2>
              <ul>
                {repositories.map(repo => (
                  <li key={repo.id} className={style.listItem}>
                    <a
                      href={`https://github.com/${yourUserName}/${repo.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.link}
                    >
                      {repo.name}
                    </a>
                  </li>
                ))}
              </ul>
              {totalPages > 1 && (
                <div className={style.pagination}>
                  <button onClick={handlePrevPage} disabled={page === 1} className={style.button}>Previous</button>
                  <span className={style.pageInfo}>Page {page} of {totalPages}</span>
                  <button onClick={handleNextPage} disabled={page === totalPages} className={style.button}>Next</button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
              <Footer />
</>
  );
};

export default Git;
