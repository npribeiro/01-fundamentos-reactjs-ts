//componente é uma função que retorna um html 
//jsx = javascript + xml 

import { Header } from "./components/Header";
import { Post, PostProps } from "./components/Post";
import styles from './App.module.css';
import './global.css';
import { Sidebar } from "./components/Sidebar";

interface Posts extends PostProps {
  id: number
}

const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/npribeiro.png',
      name: 'Nathalia Ribeiro',
      role: 'FrontEnd Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto........' },
      { type: 'link', content: '👉 https://github.com/npribeiro' },
    ],
    publishedAt: new Date('2022-09-02 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/davilopesm.png',
      name: 'Davi Lopes',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto........' },
      { type: 'link', content: '👉 https://github.com/npribeiro' },
    ],
    publishedAt: new Date('2022-09-05 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'http://github.com/eaebruno.png',
      name: 'Bruno Ramos',
      role: 'Dev'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto........' },
      { type: 'link', content: '👉 https://github.com/npribeiro' },
    ],
    publishedAt: new Date('2022-09-06 10:00:00'),
  },
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}




