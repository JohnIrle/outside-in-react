import RestaurantList from './RestaurantList';
import {Card, CardContent, Typography} from '@mui/material';

export default function RestaurantScreen() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Restaurants</Typography>
        <RestaurantList />
      </CardContent>
    </Card>
  );
}
