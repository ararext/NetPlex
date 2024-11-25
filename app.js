document.addEventListener('DOMContentLoaded', () => {
    const videoList = document.getElementById('video-list');
    const player = document.getElementById('player');
  
    // Fetch the list of videos from the server
    fetch('/api/videos')
      .then(response => response.json())
      .then(videos => {
        videos.forEach(video => {
          const videoItem = document.createElement('div');
          videoItem.classList.add('video-item');
          videoItem.innerText = video;
          videoItem.onclick = () => {
            player.src = `/video/${video}`;
            player.play();
          };
          videoList.appendChild(videoItem);
        });
      });
  });
  