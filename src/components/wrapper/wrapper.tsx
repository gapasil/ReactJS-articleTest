import React, { useEffect, ComponentType } from "react";
import { TitleList } from "../../pages/titleList";
import { RegisterPage } from "../../pages/registerPage/registerPage";
import { HelpSpecificPage } from "../../pages/helpSpecificPage/helpSpecificPage";
import { LoginPage } from "../../pages/loginPage/loginPage";
import { PostListPage } from "../../pages/postListPage/postListPage";
import { PagePost } from "../../pages/pageTovar/PagePost";
import { TovarRedactorPage } from "../../pages/editorRedactorPage/EditorRedactorPage";
import style from "./wrapper.module.scss";
import { Support } from "../../pages/support/support";

// Тип для обертки
type ComponentWithWrapper<T> = React.FC<T>;

// HOC для обертки компонентов
function wrapper<T extends {}>(
  WrappedComponent: ComponentType<T>,
  displayName?: string
): ComponentWithWrapper<T> {
  const componentName =
    displayName || WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithWrapper: ComponentWithWrapper<T> = React.memo((props) => {
    useEffect(() => {
      console.log(`Компонент ${componentName} был смонтирован.`);
      return () => {
        console.log(`Компонент ${componentName} был размонтирован.`);
      };
    }, []);

    return (
      <div className={style.wrapp}>
        <WrappedComponent {...props} />
      </div>
    );
  });

  ComponentWithWrapper.displayName = `Wrapper(${componentName})`;

  return ComponentWithWrapper;
}

const PageSupport = wrapper(Support, "SupportPage")
const PageTitleList = wrapper(TitleList, "TitleList");
const PageRegisterPage = wrapper(RegisterPage, "RegisterPage");
const PageHelpSpecificPage = wrapper(HelpSpecificPage, "HelpPage");
const PageLoginPage = wrapper(LoginPage, "LoginPage");
const PageListPage = wrapper(PostListPage, "PostListPage");
const PagePagePost = wrapper(PagePost, "PagePost");
const PageTovarRedactorPage = wrapper(TovarRedactorPage, "RedactorPage");

export {
  PageTitleList,
  PageRegisterPage,
  PageHelpSpecificPage,
  PageLoginPage,
  PageListPage,
  PagePagePost,
  PageTovarRedactorPage,
  PageSupport
};

export default wrapper;
