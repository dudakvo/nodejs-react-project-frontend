// import { Switch, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import Container from './components/Container';
import TaskPage from './pages/TaskPage/';
import ModalTaskPages from './components/ModalTaskPages/ModalTaskPages';
import Header from './components/Header';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

import authOperations from './redux/auth/auth-operations';
import routes from './routes';

const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "LoginPage" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "RegisterPage" */),
);
const ProjectsView = lazy(() =>
  import('./pages/ProjectsView' /* webpackChunkName: "ProjectsView" */),
);
const ProjectDetailsView = lazy(() =>
  import(
    './pages/ProjectDetailsView' /* webpackChunkName: "ProjectDetailsView" */
  ),
);
const SprintView = lazy(() =>
  import('./pages/SprintView/SprintView' /* webpackChunkName: "SprintView" */),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />

      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          {/* <Route exact path={routes.home} component={LoginPage} />
          <Route exact path={routes.register} component={RegisterPage} />
          <Route exact path={routes.login} component={LoginPage} />
          <Route exact path={routes.projects} component={ProjectsView} />
          <Route
            exact
            path={routes.projectDetails}
            component={ProjectDetailsView}
          />
          <Route exact path={routes.sprint} component={SprintView} /> */}
          {/*реализация с публичными и приватными роутами */}

          <PublicRoute
            exact
            path={routes.register}
            restricted
            component={RegisterPage}
            redirectTo={routes.projects}
          />
          <PublicRoute
            exact
            path={routes.login}
            restricted
            component={LoginPage}
            redirectTo={routes.projects}
          />
          <PrivateRoute
            exact
            path={routes.sprint}
            component={SprintView}
            redirectTo={routes.login}
          />
          <PrivateRoute
            exact
            path={routes.projectDetails}
            component={ProjectDetailsView}
            redirectTo={routes.login}
          />
          <PrivateRoute
            exact
            path={routes.projects}
            component={ProjectsView}
            redirectTo={routes.login}
          />
        </Switch>
      </Suspense>

      <Container>
        <ModalTaskPages>
          <TaskPage />
        </ModalTaskPages>
      </Container>
    </>
  );
}

export default App;
