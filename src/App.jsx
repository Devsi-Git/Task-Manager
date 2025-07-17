import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { UiProvider } from "./services/Uicontext";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

const queryClient = new QueryClient({});

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <UiProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="home" />} />
                <Route path="home" element={<Home />} />
                <Route path="login" element={<Login />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UiProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
