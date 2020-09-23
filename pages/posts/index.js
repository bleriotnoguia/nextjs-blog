import Link from 'next/link'

export default function Posts(){
    return <>
        <h1>Liste des posts</h1>
        <ul>
            <li><Link href="/posts/first-post">Fist post</Link></li>
            <li></li>
        </ul>
        </>
}