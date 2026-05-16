import React, { use, useEffect, useState } from 'react'
import Input from '../component/Input'
import Button from '../component/Button'
import Skeleton from '../component/Skeleton'

const DataUser = () => {
    const [data, setData] = useState([])
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [detailUser, setDetailUser] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [loading, setLoading] = useState(true)

    const handleGetUser = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setData(data))
    }

    const handlePutUser = (() => {
        setIsLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${detailUser.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: detailUser.id,
                title: title,
                body: body,
                userId: detailUser.userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                
            },
        })
        .then((response) => response.json())
        .then((json) => {
            setIsLoading(false)
            console.log(json)
            setData(data.map(d => d.id === 1 ? json : d))
        })
    })
    
    const handlePostUser = (() => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1,
                
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            setIsLoading(false)
            setData([...data, json])
        })
    })

    const handleDeleteUser = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
        .then((response) => {
            if (response.ok) {
                console.log(`User with id ${id} deleted`)
                setData(data.filter(d => d.id !== id))
            }
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(detailUser)
        if (detailUser.id) {
            handlePutUser()
        } else {
            handlePostUser()
        }
    }
    
    useEffect (() => {
        handleGetUser()
    }, [])

    useEffect(() => {
    setLoading(true)

    const timer = setTimeout(() => {
        setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
}, [])
    
    return (
    <div className='flex flex-col justify-center'>
        {loading ? <Skeleton/> 
        : 
        <div>

            <form className='flex justify-center items-center gap-4' onSubmit={handleSubmit}>
                <Input name="title" className='max-w-xs' placeholder="Title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <Input name="body" className='max-w-xs' placeholder="Body" type="text" value={body} onChange={(e) => setBody(e.target.value)} />
                <Button className='bg-blue-500' type="submit" disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Submit'}
                </Button>
            </form>
        
            <div className='grid grid-cols-3 gap-4 m-2'>
            {data.map((user) => (
                <div className='cursor-pointer mx-auto border-2 border-amber-500 p-4 rounded-lg max-w-sm' key={user.id}>
                    <h2 onClick={() => {
                        console.log(user)
                        setDetailUser(user) 
                        setBody(user.body)
                        setTitle(user.title)
                    }} className='my-2 text-md font-bold'>{user.title}</h2>
                    <p>{user.body}</p>
                    <Button className='bg-red-500 mt-4 cursor-pointer' onClick={() => handleDeleteUser(user.id) }>Delete</Button>
                </div>
            ))}
            </div>
         </div>

}
</div>
  )
}

export default DataUser