import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query
} from "firebase/firestore";
import { database } from "../firebase";
export default function useFirestore() {
  // to get collection data
    let getCollection = (collectionName) => {
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      const [data, setData] = useState([]);

      useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          const ref = collection(database, collectionName);
          const q = query(ref, orderBy('date','desc'));
          onSnapshot(q, (docs) => {
            if (docs.empty) {
              setError(error);
              setLoading(false);
            } else {
              let collectionData = [];
              docs.forEach((doc) => {
                let cmt = { id: doc.id, ...doc.data() };
                collectionData.push(cmt);
              });
              setData(collectionData);
              setLoading(false);
              setError("");
            }
          });
        };

        fetchData();
      }, []);
      return { loading, error, data };
    };
  // to get document data
  let getDocument = (collectionName, id) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);

        const docRef = doc(database, collectionName, id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setLoading(false);
        } else {
          setError("Oops! Something went wrong. Please try again later.");
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    return { loading, error, data };
  };

  // to add document
  let addCollection = async (collectionName, data) => {
    let ref = collection(database, collectionName);
    return addDoc(ref, data);
  };
  let deleteDocument = (collectionName, id) => {
    let ref = doc(database, collectionName, id);
    deleteDoc(ref);
  };

  return { getCollection, getDocument, addCollection, deleteDocument };
}








