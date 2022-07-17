import {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadRestaurants} from '../store/restaurants/actions';
import {List, ListItem, ListItemText} from '@mui/material';

export function RestaurantList({loadRestaurants, restaurants}) {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <List>
      {restaurants.map(restaurant => (
        <ListItem key={restaurant.id}>
          <ListItemText>{restaurant.name}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
}

const mapStateToProps = state => ({
  restaurants: state.restaurants.records,
});

const mapDispatchToProps = {loadRestaurants};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
