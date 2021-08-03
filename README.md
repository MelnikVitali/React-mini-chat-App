# Guestbook-frontend 'MERN' Test task

[Deployed App on Netlify](https://guestbook-mvitalim.netlify.app/)

Author: Vitalii Melnyk

## Technology Stack

- React with React Hooks
- React styles & libraries: Material-UI
- Redux with Redux Hooks
- Redux-toolkit
- Formik and Yup
- axios
- react-toastify
- luxon
__________________________________________________________________

## Technical Requirements

1. 
2. Адаптивная верстка
3. При наведении и других событиях элементы приложения не смещаются
4. JS валидация формы и уведомления об ошибках
5. Нельзя отправить визуально пустые поля
6. Нельзя отправить поле имя с недопустимыми символами (допустимо: латинские буквы, цифры, знак нижнего подчеркивания)
7. Есть уведомление о том, какая в каком поле ошибка
8. Уведомление об ошибке скрывается при начале ввода в соответствующее поле
9. Уведомления об ошибках при появлении не сдвигают другие поля
10. Использованы регулярные выражения в валидации (например, запрет  на добавление гиперссылок)
11. Обработаны ответы сервера (сообщение добавлено, не добавлено...)
12. Отсутствуют лишние перерендеры
13. Использованы хуки useState, useCallback и прочие
14. После отправки формы очищается поле текст сообщения
15. После отправки формы НЕ очищается поле автор сообщения
16. Использованы переменные окружения
17. Структура формы отправки сообщения: имя, текст, кнопка
17. Сообщение отправляется по клику на кнопку и по Ctrl+Enter
17. Новое сообщение добавляется без перезагрузки страницы
17. Новое сообщение добавляется в начало (вверх) списка сообщений
17. Сообщения отсортированы по убыванию даты (новые вверху)
17. Новое сообщение содержит имя отправителя и текст
17. После принудительной перезагрузки страницы сообщение не исчезает, не перемещается
17. При заходе на страницу из другого браузера сообщение остается на месте (хранение данных на сервере)![img.png](img.png)![img_1.png](img_1.png)
_________________________________________________________

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
