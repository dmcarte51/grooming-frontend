import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Layout from './components/Layout';
import Register from './components/Register';
import Login from './components/Login';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <Layout> {/* Wrap the content of each route with the Layout component */}
                  <Landing />
                </Layout>
              }
            />
              <Route
              path="/reg"
              element={
                <Layout> {/* Wrap the content of each route with the Layout component */}
                  <Register />
                </Layout>
              }
            />
            <Route
              path="/login"
              element={
                <Layout>
                  <Login />
                </Layout>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default App;
