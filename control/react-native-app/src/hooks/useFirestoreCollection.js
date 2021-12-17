import { useState, useEffect } from "react";
import { getCollection } from "../actions/dbActions";

export const useFirestoreCollection = (collection) =>{
    const [docs , setDocs] = useState([]);

    useEffect(()=>{
        const unsubscribe = getCollection(collection)
                .orderBy('createdAt','desc')
                .onSnapshot(snapshot=>{
                    let documents = []
                    snapshot.forEach(doc=>{
                        documents.push({id:doc.id,...doc.data()});
                    })
                    setDocs(documents);
                })

        return () => unsubscribe();
    },[collection])

    return { docs }
}