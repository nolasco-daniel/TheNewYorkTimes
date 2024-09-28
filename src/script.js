document.addEventListener('DOMContentLoaded', () => {
    const apiUrlArts = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=qT3OsxIOrXHUpqxlvzRoE0AsNFAmJQJI';
    const apiUrlScience = 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=qT3OsxIOrXHUpqxlvzRoE0AsNFAmJQJI';
    const apiUrlInternational = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=qT3OsxIOrXHUpqxlvzRoE0AsNFAmJQJI';
    const apiUrlUsNews = 'https://api.nytimes.com/svc/topstories/v2/us.json?api-key=qT3OsxIOrXHUpqxlvzRoE0AsNFAmJQJI';
    const apiUrlHome = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=qT3OsxIOrXHUpqxlvzRoE0AsNFAmJQJI';
    
    const topStoriesSection = document.querySelector('.top-stories');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    fetchNews(apiUrlArts);

    document.getElementById('science-link').addEventListener('click', (event) => {
        event.preventDefault();
        fetchNews(apiUrlScience);
        hamburgerMenu.click(); 
    });

    document.getElementById('international-link').addEventListener('click', (event) => {
        event.preventDefault();
        fetchNews(apiUrlInternational);
        hamburgerMenu.click(); 
    });

    document.getElementById('UsNews-link').addEventListener('click', (event) => {
        event.preventDefault();
        fetchNews(apiUrlUsNews);
        hamburgerMenu.click();
    });

    document.getElementById('art-link').addEventListener('click', (event) => {
        event.preventDefault();
        fetchNews(apiUrlArts);
        hamburgerMenu.click(); 
    });

    document.getElementById('Home-link').addEventListener('click', (event) => {
        event.preventDefault();
        fetchNews(apiUrlHome);
        hamburgerMenu.click(); 
    });

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active'); 
    });

    function fetchNews(apiUrl) {
        topStoriesSection.innerHTML = '<p>Loading...</p>'; 

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                displayTopStories(data.results);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                topStoriesSection.innerHTML = '<p>Failed to load top stories.</p>';
            });
    }

    function displayTopStories(stories) {
        topStoriesSection.innerHTML = ''; 

        stories.forEach(story => {
            const storyElement = document.createElement('div');
            storyElement.classList.add('story');

            const imageUrl = story.multimedia && story.multimedia.length > 0 ? story.multimedia[0].url : '';

            storyElement.innerHTML = `
                <h2>${story.title}</h2>
                ${imageUrl ? `<a href="${story.url}" target="_blank"><img src="${imageUrl}" alt="${story.title}" /></a>` : ''}
                <p>${story.abstract}</p>
            `;
            topStoriesSection.appendChild(storyElement);
        });
    }

    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; 
        const formattedDate = now.toLocaleDateString('en-US', options);
        document.getElementById('date-time').innerText = formattedDate;
    }
    
    updateDateTime();
    setInterval(updateDateTime, 1000);
});
