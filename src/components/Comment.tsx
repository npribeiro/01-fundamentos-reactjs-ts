import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        //setLikeCount(likeCount + 1);
        setLikeCount((state) => {
            return state + 1
        });
    }

    //sempre que vc for atualizar uma informação e essa info depende do valor que ela tinha anteriormente (dela mesmo), usar esse padrão de função

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego </strong>
                            <time title="11 de maio às 08:12h" dateTime="2022-05-11 08:12">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span> {likeCount} </span>
                    </button>
                </footer>

            </div>
        </div>
    )
}