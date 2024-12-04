import React from "react";
import styles from "./Support.module.scss";

export const Support = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>О проекте</h1>
      <div className={styles.content}>
        <p>
          <strong>Этот проект</strong> создан как учебный пример для изучения
          и практики работы со следующими технологиями:
        </p>
        <ul>
          <li>
            <strong>EditorJS</strong> — библиотека для создания редакторов
            блокового типа.
          </li>
          <li>
            <strong>React</strong> — библиотека для создания пользовательских
            интерфейсов.
          </li>
          <li>
            <strong>TypeScript</strong> — надстройка над JavaScript для
            обеспечения строгой типизации.
          </li>
          <li>
            <strong>SCSS-модули</strong> — для стилизации компонентов с
            использованием модульного подхода.
          </li>
          <li>
            <strong>Webpack</strong> — для сборки и оптимизации проекта.
          </li>
          <li>
            <strong>NestJS</strong> — фреймворк для создания серверных
            приложений с использованием TypeScript.
          </li>
          <li>
            <strong>Passport.js</strong> — библиотека для реализации
            аутентификации в приложении.
          </li>
          <li>
            <strong>MongoDB</strong> — NoSQL база данных для хранения и работы с данными.
          </li>
        </ul>

        <h2 className={styles.subHeader}>Цель проекта</h2>
        <p>
          Основная цель проекта — это ознакомление с EditorJS и создание полноценного приложения с
          использованием технологий, таких как React, NestJS и MongoDB. Мы создаем
          систему, которая позволяет хранить данные, а также управлять пользователями
          через аутентификацию с использованием Passport.js и MongoDB для хранения
          информации о пользователях и других данных.
        </p>

        <h2 className={styles.subHeader}>Стек технологий</h2>
        <ul>
          <li>React + TypeScript</li>
          <li>Webpack</li>
          <li>SCSS-модули</li>
          <li>EditorJS</li>
          <li>Redux-toolkit</li>
          <li>NestJS</li>
          <li>Passport.js</li>
          <li>MongoDB</li>
        </ul>

        <h2 className={styles.subHeader}>Почему этот проект полезен?</h2>
        <p>
          Проект полезен для изучения как фронтенд, так и бекенд технологий. Я
          получил опыт работы с React, а также освоил создание серверной части с
          использованием NestJS и интеграцию с аутентификацией через Passport.js. 
          Вдобавок, MongoDB позволил поработать с NoSQL базами данных, изучая основы
          моделирования данных и выполнения запросов.
        </p>

        <h2 className={styles.subHeader}>Реализация бекенда с NestJS, Passport.js и MongoDB</h2>
        <p>
          Бекенд этой системы был построен с использованием <strong>NestJS</strong>, 
          что позволяет быстро разрабатывать серверные приложения, структурировать код 
          и создавать RESTful API. Я также использовал <strong>Passport.js</strong> для 
          аутентификации пользователей.
        </p>
        
        <h2 className={styles.subHeader}>Дополнительные сведения</h2>
        <p>
          Вы можете связаться с
          автором:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:gapasilka6@mail.ru" target="_blank" rel="noopener noreferrer">
              gapasilka6@mail.ru
            </a>
          </li>
          <li>
            Telegram:{" "}
            <a href="https://t.me/gapasil" target="_blank" rel="noopener noreferrer">
              https://t.me/gapasil
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
