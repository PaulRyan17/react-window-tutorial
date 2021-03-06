import React, { useState, useEffect } from 'react';
import { fetchMovies } from './fetch-movies';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Movie = ({
  Title,
  Production_Budget,
  Release_Date,
  Distributor,
  Director,
}) => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {Title}
        </Typography>
        <Typography variant="h5" component="h2" />
        <Typography color="textSecondary">{Production_Budget}</Typography>
        <Typography variant="body2" component="p">
          {Release_Date} {Distributor} {Director}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container direction="row" justify="center" alignItems="center">
          <Button variant="contained" size="small" color="primary">
            Learn More
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies().then(res => {
      setMovies(res);
    });
  }, []);

  const moviesList = movies.slice(0, 5000);

  return moviesList.map((movie, index) => {
    return <Movie key={index} {...movie} />;
  });
};
