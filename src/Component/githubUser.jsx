
import React, { useState, useEffect } from "react";
import './stylesheets/githubUser.css'

const GithubUser = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/github-john-doe');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div class="github-user-info">
        <h1> Github user </h1>
        
      <h2>{userData.name}</h2>
      <img class="github-user-image" src={userData.avatar_url} alt={userData.name} />

      <p>{userData.bio}</p>
      <p>Abonnés : {userData.followers}</p>
      <p>Abonnements : {userData.following}</p>
      <p>Créé le : {new Date(userData.created_at).toLocaleDateString()}</p>
      <p>Modifié le : {new Date(userData.updated_at).toLocaleDateString()}</p>
      <p>URL repositories: <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
        {userData.repos_url}</a></p>
      
    </div>
  );
};

export default GithubUser;
