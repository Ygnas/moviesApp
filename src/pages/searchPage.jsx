import { Button, ButtonGroup, Checkbox, FormControlLabel, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { searchMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import PageTemplate from "../components/templateMovieListPage";
import PaginationList from "../components/pagination";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const SearchPage = (props) => {
  const [title, setTitle] = useState('');
  const [includeAdult, setIncludeAdult] = useState(false);
  const [language, setLanguage] = useState('');
  const [region, setRegion] = useState('');
  const [year, setYear] = useState('');
  let currentPage = 1;

  const { data, error, isLoading, isError, refetch } = useQuery("search", () => searchMovies({ title, includeAdult, language, currentPage, region, year }));
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  const handleSubmit = (event) => {
    event.preventDefault();
    handlePageChange(1)
    refetch();
  };

  const handlePageChange = (page) => {
    currentPage = page;
    refetch()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };


  const handleReset = () => {
    setTitle("");
    setYear("");
    setRegion("");
    setIncludeAdult(false);
    setLanguage("");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const movies = data ? data.results : [];

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">Movie Search</Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Movie Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField
              label="Language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField
              label="Region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField
              select
              id="year-select"
              value={year}
              label="Year"
              fullWidth
              margin="normal"
              onChange={(e) => setYear(e.target.value)}
            >
              {years.map((yearOption) => (
                <MenuItem key={yearOption} value={yearOption}>{yearOption}</MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox checked={includeAdult} onChange={(e) => setIncludeAdult(e.target.checked)} />}
              label="Include Adult Content"
            />
          </Grid>

          <Grid item xs={12}>
            <ButtonGroup variant="contained">
              <Button color="primary" type="submit">
                Search
              </Button>
              <Button color="secondary" onClick={handleReset}>
                Reset
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </form>


      {movies ?
        <>
          <PageTemplate
            title="Found Movies"
            movies={movies}
            action={(movie) => {
              return <AddToFavouritesIcon media={movie} />;
            }} />
          <PaginationList count={data.total_pages} page={currentPage} onChange={handlePageChange} />
        </>
        : () => { }}
    </>
  );
};
export default SearchPage;