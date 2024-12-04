import React, { useEffect, useRef, useState } from 'react';
import { User } from "../../models/User";
import styles from "./post.module.scss";
import { PostModel } from '../../models/post';
import EditorJS from '@editorjs/editorjs';
import configuration from '../TextEditor/configuration';

export const Post = () => {
  const [post, setPost] = useState<PostModel[] | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const editorInstance = useRef<EditorJS | null>(null);
  const [editorRefState, setEditorRefState] = useState<HTMLDivElement | null>(null);

  const [loading, setLoading] = useState(true);

  const url = process.env.REACT_APP_API;
  const [err, setErr] = useState(false);

  const checkoutEditorRef = (ref: HTMLDivElement | null) => {
    console.log(ref);
    
    if (ref) setEditorRefState(ref);
  };
  // Получаем пост по ID из URL
  useEffect(() => {
    let idMass: string[] = []; // Объявляем idMass как массив строк
    for (let index = 0; index < window.location.pathname.length; index++) {
      if (index >= 6) {
        idMass.push(window.location.pathname[index]);
      }
    }
    const idPost = idMass.join(""); // Собираем id из URL

    fetch(`${url}Post/get-PostID`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ _id: idPost }),
    })
      .then((response) => {
        if (response.statusText === "Unauthorized") {
          setErr(true);
          return;
        }
        return response.json();
      })
      .then((result) => {
        console.log("Fetched post: ", result); // Логируем данные поста после получения
        setPost(result);
        setLoading(false);
      });
  }, []); // Выполняется один раз при монтировании компонента

  // Получаем информацию о пользователе
  useEffect(() => {
    if (post && post.length > 0) {
      fetch(`${url}user/getUserId`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ id: post[0].idUser }),
      })
        .then((response) => {
          if (response.statusText === "Unauthorized") {
            setErr(true);
            return;
          }
          return response.json();
        })
        .then((result) => setUser(result));
    }
  }, [post, url]);

  useEffect(() => {
    console.log(editorRefState);
    if (loading || !post || !editorRefState) return;

    // Инициализация редактора
    if (!editorInstance.current) {
      console.log(post[0].file);
      fetch(`${url}${post[0].file}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const editor = new EditorJS({
          ...configuration("view"),
          holder: editorRefState,
          data: data, // Загружаем контент поста
        });

        editorInstance.current = editor;
        console.log(editor, "editor");
      })
    }

    // Очистка редактора при размонтировании компонента
    return () => {
      if (editorInstance.current) {
        editorInstance.current.destroy();
        editorInstance.current = null;
      }
    };
  }, [loading, post, editorRefState, url]); // Зависимости от loading и post

  if (loading) {
    return <div>Загрузка редактора...</div>;
  }

  if (err) {
    return <div>Произошла ошибка при загрузке поста. {err}</div>;
  }

  if (!post || !user) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.container__ContainerHead}>
        <div className={styles.container__ContainerHead__blockHead}>
          <div className={styles.container__ContainerHead__blockHead__leftBlock}>
            <div className={styles.container__ContainerHead__blockHead__leftBlock__img}>
              <img className={styles.buttonUser__img} src={`${url}${user.avatar}`} />
            </div>
            <p>{user.firstName} {user.lastName}</p>
          </div>
          <div className={styles.container__ContainerHead__blockHead__rightBlock}>
            <p>{post[0].theme}</p>
          </div>
        </div>
      </div>

      <div className={styles.header}>
        <h1>{post[0].headers}</h1>
      </div>

      <div
        ref={checkoutEditorRef}
        style={{
          width: "100%",
          minHeight: 500,
          borderRadius: "7px",
          background: "#fff",
        }}
      />
    </div>
  );
};
