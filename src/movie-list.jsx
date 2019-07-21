import React, { useState, useEffect } from 'react';
import { fetchMovies } from './fetch-movies';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { FixedSizeList as List } from 'react-window';
import { AutoSizer } from 'react-virtualized';

const Movie = ({
  Title,
  Production_Budget,
  Release_Date,
  Distributor,
  Director,
}) => {
  if (Title) {
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
  }

  return null;
};

const Row = ({ index, style, data }) => {
  const movie = data[index];
  return (
    <div style={style} key={index}>
      <Movie key={index} {...movie} />
    </div>
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

  return (
    <div className="container">
      <AutoSizer>
        {({ height, width }) => (
          <List
            className="List"
            height={height}
            itemCount={1000}
            itemSize={150}
            width={width}
            itemData={moviesList}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};
