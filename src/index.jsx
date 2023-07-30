import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import ActorDetailsPage from "./pages/actorDetailsPage";
import AddMediaPage from "./pages/addMediaPage";
import FantasyMovie from "./pages/fantasyMoviePage";
import ProtectedRoute from "./protectedRoute";
import LoginPage from "./pages/loginPage";
import AuthContextProvider from "./contexts/authContext";
import MediaContextProvider from "./contexts/mediaContext";
import FavouriteActorPage from "./pages/favouriteActorPage";
import SearchPage from "./pages/searchPage";
import ActorForm from "./components/actorForm";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
          <SiteHeader />
          <MediaContextProvider>
            <Routes>
              <Route path="/fantasy/movie" element={<FantasyMovie />} />
              <Route path="/movie/form" element={<AddMediaPage />} />
              <Route path="/actor/form" element={<ActorForm />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/actor/:id" element={
                <ProtectedRoute>
                  <ActorDetailsPage />
                </ProtectedRoute>
              } />
              <Route path="/movies/trending" element={<TrendingMoviesPage />} />
              <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
              <Route path="/actors/favourites" element={<FavouriteActorPage />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </MediaContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
