import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm, Controller } from "react-hook-form";
import { MediaContext } from "../../contexts/mediaContext";
import { useNavigate } from "react-router-dom";
import styles from "./styles";
import genre from "./genres";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const MediaForm = ({ movie }) => {
  const defaultValues = {
    title: "",
    overview: "",
    runtime: "0",
    company: "",
    release_date: "",
    genre_ids: [],
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm(defaultValues);

  const navigate = useNavigate();
  const context = useContext(MediaContext);

  const [genres, setGenres] = useState([]);
  const [open, setOpen] = useState(false);

  const handleGenreChange = (event) => {
    setGenres(event.target.value);
  };

  const handleSnackClose = (event) => {
    navigate("/fantasy/movie");
    setOpen(false);
  };

  const onSubmit = (movie) => {
    movie.genre_ids = genres
    context.addFantasyMovie(movie)
    setOpen(true);
  };

  return (
    <Box component="div" sx={styles.root}>
      <Typography component="h2" variant="h3">
        My fantasy Movie
      </Typography>
      <Typography component="h2" variant="h3">
      </Typography>
      <Snackbar
        sx={styles.snack}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleSnackClose}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={handleSnackClose}
        >
          <Typography variant="h4">
            Thank you for submitting your fantasy Movie
          </Typography>
        </Alert>
      </Snackbar>
      <form sx={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="title"
          control={control}
          rules={{ required: "Movie title is required" }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="title"
              label="Movie title"
              autoFocus
            />
          )}
        />
        {errors.title && (
          <Typography variant="h6" component="p">
            {errors.title.message}
          </Typography>
        )}
        <Controller
          name="overview"
          control={control}
          rules={{
            required: "Overview cannot be empty.",
            minLength: { value: 10, message: "Overview is too short" },
          }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={value}
              onChange={onChange}
              label="Overview"
              id="overview"
              multiline
              minRows={5}
            />
          )}
        />
        {errors.overview && (
          <Typography variant="h6" component="p">
            {errors.overview.message}
          </Typography>
        )}
        <Controller
          name="runtime"
          control={control}
          rules={{ required: "Runtime is required" }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              type="number"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="runtime"
              label="Runtime in minutes"
            />
          )}
        />
        {errors.title && (
          <Typography variant="h6" component="p">
            {errors.runtime.message}
          </Typography>
        )}
        <br />
        <Controller
          name="release_date"
          control={control}
          rules={{ required: "Release date is required" }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              type="date"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="release_date"
            />
          )}
        />
        {errors.title && (
          <Typography variant="h6" component="p">
            {errors.release_date.message}
          </Typography>
        )}
        <br />
        <Controller
          name="company"
          control={control}
          rules={{ required: "Production Company is required" }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="company"
              label="Production Company"
            />
          )}
        />
        {errors.title && (
          <Typography variant="h6" component="p">
            {errors.title.message}
          </Typography>
        )}
        <br />
        <Controller
          control={control}
          name="genre_ids"
          render={({ field: { onChange, value } }) => (
            <TextField
              id="select-genre"
              margin="normal"
              select
              SelectProps={{
                multiple: true,
                value: genres,
                onChange: handleGenreChange
              }}
              variant="outlined"
              label="Genre Select"
              helperText="Don't forget your genre"
            >
              {genre.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        <Box sx={styles.buttons}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={styles.submit}
          >
            Submit
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            sx={styles.submit}
            onClick={() => {
              reset({
                author: "",
                content: "",
              });
            }}
          >
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default MediaForm;
