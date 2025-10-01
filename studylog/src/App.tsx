import { lazy, useCallback, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { NavBar } from './components/nav-bar';
import type { StudySession } from './types/StudySession';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import { ErrorFallback } from './components/error-fallback';
import { Loading } from './components/loading';

const HomePage = lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.HomePage }))
);

const AddStudy = lazy(() =>
  import("./pages/NovaSessao").then((module) => ({
    default: module.AddStudy,
  }))
);

const StudyList = lazy(() =>
  import("./components/study-list").then((module) => ({
    default: module.StudyList,
  }))
);

function Layout() {
  return (
    <>
      <NavBar />
      <main className="pt-4">
        <Outlet />
      </main>
    </>
  );
}

function App() {
  const [studySessions, setStudySessions] = useState<StudySession[]>([]);

  const handleAddStudy = useCallback((study: StudySession) => {
    setStudySessions((prev) => [...prev, study]);
  }, []);

  const handleRemoveStudy = useCallback((id: string) => {
    setStudySessions((prev) => {
      const indexToDelete = prev.findIndex((study) => study.id === id);

      if (indexToDelete !== -1) {
        return prev.filter((_, index) => index !== indexToDelete);
      }
      return prev; 
    });
  }, []);
  
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="/NovaSessao"
                element={<AddStudy onAdd={handleAddStudy} study={[]} />}
              />
              <Route
                path="/sessions"
                element={
                  <div className="flex justify-center items-start pt-8">
                    <StudyList
                      studiesList={studySessions}
                      removeStudy={handleRemoveStudy}
                    />
                  </div>
                }
              />
              <Route
                path="*"
                element={<h1 className="text-center mt-10 text-red-500">Página Não Encontrada!</h1>}
              />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;