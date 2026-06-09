import React, { useEffect, useState } from 'react'

const UserSearch = () => {
    const [user, setUser] = useState([])
    const [search, setSearch] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json()
            setUser(data)
        }
        fetchData()
            , []
    })
    const filterData = user.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4 text-center">User Search</h2>
                <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="search user" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <table className="min-w-full bg-white border">
                <thead>
                    <tr className="border-b bg-gray-200">
                        <th className="py-2 text-left">Name</th>
                        <th className="py-2 text-left">Email</th>
                        <th className="py-2 text-left">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {filterData.map((item, index) => (
                        <tr key={index} className="border-b">
                            <td className="py-2">{item.name}</td>
                            <td className="py-2">{item.email}</td>
                            <td className="py-2">{item.phone}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </>
    )
}

export default UserSearch