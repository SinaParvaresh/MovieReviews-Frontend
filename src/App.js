import "./App.css";
import { BASE_URL } from "./api/apiConfig";
import { useState, useEffect } from "react";
import { Layout } from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import Trailer from "./components/trailer/Trailer";
import Reviews from "./components/reviews/Reviews";

function App() {
	const [movies, setMovies] = useState([]);
	const [movie, setMovie] = useState("");
	const [reviews, setReviews] = useState([]);

	const getMovies = async () => {
		try {
			const response = await fetch(`${BASE_URL}/api/v1/movies`);
			const movies = await response.json();
			setMovies(movies);
		} catch (error) {
			console.log(error);
		}
	};

	const getMovieData = async (movieId) => {
		try {
			const response = await fetch(`${BASE_URL}/api/v1/movies/${movieId}`);
			const singleMovie = await response.json();

			setMovie(singleMovie);

			setReviews(singleMovie.reviewIds);
		} catch (error) {}
	};

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<ColorSchemeProvider>
			<MantineProvider
				theme={{
					colorScheme: "dark",
					globalStyles: () => ({
						fontFamily: "Verdana, sans-serif",
						body: {
							minHeight: "100vh",
							height: "100vh",
							display: "flex",
							flexDirection: "column",
							backgroundColor: "black",
							color: "white",
						},
					}),
				}}
				withGlobalStyles
				withNormalizeCSS
			>
				<div className="App">
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Layout />}>
								<Route path="/" element={<Home movies={movies} />} />
								<Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
								<Route
									path="/Reviews/:movieId"
									element={
										<Reviews
											getMovieData={getMovieData}
											movie={movie}
											reviews={reviews}
											setReviews={setReviews}
										/>
									}
								/>
							</Route>
						</Routes>
					</BrowserRouter>
				</div>
			</MantineProvider>
		</ColorSchemeProvider>
	);
}

export default App;
