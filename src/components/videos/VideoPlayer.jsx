const VideoPlayer = () => {
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src="https://www.youtube.com/embed/O02GFZrZg3E?si=EYMYpiV4gg5xDK2B"
      title="Some video title"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;
