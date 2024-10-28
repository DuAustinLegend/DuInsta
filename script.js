async function fetchInstagramData() {
    const username = document.getElementById("username").value;
    const results = document.getElementById("results");
  
    if (!username) {
      results.innerHTML = "<p>Please enter a username</p>";
      return;
    }
  
    // This example shows a structure for how to display data; 
    // Instaloader would typically run in a Python backend or CLI tool.
    results.innerHTML = `<p>Fetching data for ${username}...</p>`;
  
    // Simulated data as Instaloader doesn’t have a web API.
    const data = {
      username: username,
      followers: 1000,
      following: 150,
      bio: "This is a sample bio for demonstration.",
      posts: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    };
  
    displayData(data);
  }
  
  function displayData(data) {
    const results = document.getElementById("results");
    results.innerHTML = `
      <h2>${data.username}</h2>
      <p><strong>Followers:</strong> ${data.followers}</p>
      <p><strong>Following:</strong> ${data.following}</p>
      <p><strong>Bio:</strong> ${data.bio}</p>
      <div id="posts">
        ${data.posts.map(url => `<img src="${url}" alt="Post image">`).join("")}
      </div>
    `;
  }
  