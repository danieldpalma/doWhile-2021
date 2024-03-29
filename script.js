const medias = {
  github: 'danieldpalma',
  youtube: 'RocketSeat',
  facebook: '100072938482531',
  instagram: 'danieldpalma',
  twitter: 'daniel_dpalma',
};

const getSocialMediaLinks = () => {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');
    li.children[0].href = `https://${social}.com/${medias[social]}`;
  }
};

const getGitHubProfileInfos = () => {
  const url = `https://api.github.com/users/${medias.github}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userProfileImage.src = data.avatar_url;
      userProfile.textContent = data.login;
    })
    .catch(error => console.error(error))
}

getSocialMediaLinks();
getGitHubProfileInfos();
