import { Button, Divider, Textarea } from "@mantine/core";
import React from "react";

const ReviewForm = ({ handleSubmit, revText, labelText }) => {
	return (
		<form>
			<Textarea
				label={labelText}
				placeholder={labelText}
				size="lg"
				ref={revText}
			/>
			<Button onClick={handleSubmit}>Submit</Button>
			<Divider my="sm" c="dark" />
		</form>
	);
};

export default ReviewForm;
