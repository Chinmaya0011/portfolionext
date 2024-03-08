"use client"
import React, { useState, useEffect } from 'react';
import style from '../styles/github.module.css';
import Image from 'next/image'; // Import Image component from Next.js

const Git = () => {
  const username = "Chinmaya0011";
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchGit = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();
        setUser(userData);

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`);
        const reposData = await reposResponse.json();
        setRepositories(reposData);

        // Calculate total pages based on response headers
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
      }
    };

    fetchGit();
  }, [page, perPage]); // Trigger fetchGit on page or perPage change

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
    <div className={style.container}>
      {user && (
        <div className={style.details}>
          <h2 className={style.heading}>
            <a style={{ textDecoration: "none" }} href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">{user.name}</a>
          </h2>
          <Image src={user.avatar_url} alt="Avatar" width={100} height={100} />
          <p className={style.textusername}>
            <a style={{ textDecoration: "none" }} href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">Username: {user.login}</a>
          </p>
          <p className={style.textbio}>Bio: {user.bio}</p>
          <p className={style.textfollowers}>Followers: {user.followers}</p>
          <p className={style.textfollowing}>Following: {user.following}</p>
        </div>
      )}

      <div className={style.repositories}>
        <h2 className={style.heading}>Repositories:</h2>
        <ul>
          {repositories.map(repo => (
            <li key={repo.id} className={style.listItem}>
              <a href={`https://github.com/${username}/${repo.name}`} target="_blank" rel="noopener noreferrer" className={style.link}>
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
  );
};

export default Git;
