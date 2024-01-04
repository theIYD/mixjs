import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isInitialCall, setIsInitialCall] = useState(true);
  const loadingRef = useRef(null);

  const fetchImages = async (abortController) => {
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}`,
        {
          signal: abortController.signal,
        },
      );
      const data = await response.json();
      console.log("data", data);
      setIsInitialCall(false);
      setImages((images) => [...images, ...data]);
    } catch (err) {
      if (abortController.signal.aborted) return;
      console.log(err);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    fetchImages(abortController);

    return () => {
      abortController.abort();
    };
  }, [page]);

  useEffect(() => {
    if (!loadingRef.current) return;

    const loading = loadingRef.current;

    const loadingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInitialCall) {
          setPage((page) => page + 1);
        }
      },
      { threshold: 1 },
    );

    loadingObserver.observe(loading);

    return () => {
      if (loading) loadingObserver.unobserve(loading);
    };
  }, [images]);

  return (
    <div className="App">
      <h1>Infinite Scroll</h1>
      <div className="image-container">
        {images.map((image, index) => {
          return (
            <div key={index} className="image">
              <img height={400} src={image.download_url} alt={image.author} />
            </div>
          );
        })}
      </div>
      <div ref={loadingRef}>Loading...</div>
    </div>
  );
}

export default App;
