export const embedYoutubeVideos = async (searchTerm) => {
  async function searchYoutubeVideos(searchTerm) {
    let searchResults = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchTerm}&key=AIzaSyAWgu9o-CD36HzXYrRVsgjkJsvogQ4kCWw`
    );
    return searchResults.json();
  }

  function linkYouTubeVideo(videoId) {
    return `https://www.youtube.com/watch?v=${videoId}`;
  }

  let response = await searchYoutubeVideos(searchTerm);

  let newArr = response.items.map((video) => {
    if (video?.id?.videoId !== undefined) {
      return {
        trailer: linkYouTubeVideo(video.id.videoId),
        thumbnail: video.snippet?.thumbnails.medium,
      };
    }
  });

  return newArr;
};
