import React, { useEffect, useState } from 'react'

export const ProductSearchSystem = () => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await res.json();
                setDatas(data)
            } catch (error) {
                setError(error.message)
            }finally {
                setLoading(false);
              }
        }
        fetchdata()
        
    }, [])


    if (loading) {
  return <h2>Loading...</h2>;
}

if (error) {
  return <h2>{error}</h2>;
}
    return (
        <>
            {datas.map((e, i) => (
                <div key={i}>
                    <p>{e.name}</p>
                    <p>{e.email}</p>
                    <p>{e.company.name}</p>
                </div>
            ))}

        </>
    )
}
