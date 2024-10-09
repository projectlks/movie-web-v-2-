import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../firebase";

const useEdit = (id) => {
  const [backDrop, setBackDrop] = useState("");
  const [company, setCompany] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");
  const [genres, setGenres] = useState([]);
  const [language, setLanguage] = useState("");
  const [link, setLink] = useState("");
  const [month, setMonth] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [day, setDay] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
     const [posterPrev, setPosterPrev] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const docRef = doc(database, 'movie', id);
        const docSnap = await getDoc(docRef);
           setLoading(false);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setTitle(data.title || "");
          setReview(data.review || "");
          setPoster(data.poster || "");
          setBackDrop(data.backDrop || "");
          setRating(data.vote_average || "");
          setDuration(data.runtime || "");
          setCompany(data.company || "");
          setLanguage(data.language || "");
          setLink(data.link || "");
          setRating(data.rating || "");
          setDirector(data.director || "");
          setDuration(data.duration || "");
          setCompany(data.company || "");
          // setPosterPrev(data.poster || '')
          setGenres(data.genres || []);
          if (data.date) {
            setYear(data.date.slice(0, 4));
            setMonth(data.date.slice(5, 7));
            setDay(data.date.slice(8, 10));
          }
          setError(null);
        } else {
          setError("Oops! Something went wrong. Please try again later.");
          setLoading(false);

        }
      } catch (error) {
        setError("Oops! Something went wrong. Please try again later.");
        setLoading(false)
      } 
    };
    
    if (id) {
      fetchData();
    }
  }, [id]);

  return {
    error,
    loading,
    backDrop,
    company,
    director,
    duration,
    genres,
    language,
    link,
    month,
    poster,
    rating,
    review,
    title,
    year,
    day,
    posterPrev, setPosterPrev,
  setBackDrop,
    setCompany,
    setDirector,
    setDuration,
    setGenres,
    setLanguage,
    setLink,
    setMonth,
    setPoster,
    setRating,
    setReview,
    setTitle,
    setYear,
    setDay
  };
};

export default useEdit;
