import React, { useEffect, useRef } from "react";
import { BASE_URL } from "../../api/apiConfig";
import { useParams } from "react-router-dom";
import { Container, Divider, Grid, Image, Table } from "@mantine/core";
import ReviewForm from "../reviewForm/ReviewForm";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
	const revText = useRef();
	let params = useParams();
	const movieId = params.movieId;

	useEffect(() => {
		getMovieData(movieId);
	}, []);

	const rows = reviews?.map((r) => (
		<>
			<tr>{r.body}</tr>
			<Divider my="sm" c="dark" />
		</>
	));

	const addReview = async (e) => {
		e.preventDefault();
		const rev = revText.current;

		try {
			const response = await fetch(`${BASE_URL}/api/v1/reviews`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					reviewBody: rev.value,
					imdbId: movieId,
				}),
			});

			const updatedReviews = [...reviews, { body: rev.value }];
			console.log(updatedReviews);

			rev.value = "";

			setReviews(updatedReviews);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container size="75%" mt={200}>
			<Grid grow>
				<Grid.Col span="content">
					<Image src={movie?.poster} />
				</Grid.Col>

				<Grid.Col span={8}>
					<Container>
						<ReviewForm
							handleSubmit={addReview}
							revText={revText}
							labelText="Write a review?"
						/>
						<Table title="Reviews">
							<thead>
								<tr></tr>
							</thead>
							<tbody>{rows}</tbody>
						</Table>
					</Container>
				</Grid.Col>
			</Grid>
		</Container>
	);
};

export default Reviews;
