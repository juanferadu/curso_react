import { useState, useEffect } from "react";
import { productos } from "../db/dbProducts.json";
import { getFirestore } from "../configs/firebase";

export default function RestService(url, options) {

    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    // useEffect(() => {        
    //    (async()=>{
    //        try {
    //            const res = await fetch(url, options);
    //            const json = await res.json();
    //            setResult(productos);
    //            setLoading(false);
    //        } catch (err) {
    //            setLoading(false);
    //            setError(err);
    //        }
    //    })();
    // }, [options, url]);


    const db = getFirestore();

    function crearProductos() {
      productos.forEach(function(obj) {
        db.collection("productos").add({
            id: obj.id,
            title: obj.title,
            description: obj.description,
            price: obj.price,
            category: obj.category,
            pictureUrl: obj.pictureUrl,
            stock: obj.stock
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    });
    }

    

    useEffect(() => {
        const db = getFirestore();
        var dataCollection = null;
        if(!options)
        {
          dataCollection =  db.collection(`${url}`);
        }
        else
        {
          dataCollection =  db.collection(`${url}`).where("category", "==", 'man');       
        }
       
        dataCollection
        .get()
        .then((resp) => {
          if (resp.size === 0) {
            //console.log("Sin datos");
            setResult( null);
            setLoading(true);
          }else{
            //console.log(resp);
            setResult( resp.docs.map(doc => doc.data()));
            setLoading(false);
          }        
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
            setError(err);
        });
        
    }, [url]);

    return {loading, result, error, crearProductos};
}

