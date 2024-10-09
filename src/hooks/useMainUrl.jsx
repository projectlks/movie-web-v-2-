import { MainUrlContext } from "../contexts/MainUrlContext";
import { useContext } from "react";



export default function useMainUrl() {
 const link = useContext(MainUrlContext)

 if (link === undefined) {
    new Error(' this is error')
 }
 return link
}
