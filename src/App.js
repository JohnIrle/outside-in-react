import {Provider} from 'react-redux';
import index from './store';
import RestaurantScreen from './components/RestaurantScreen';
import {
  AppBar,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import {green} from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: green,
  },
});

function App() {
  return (
    <div>
      <Provider store={index}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Opinion Ate</Typography>
            </Toolbar>
          </AppBar>
          <Container>
            <RestaurantScreen />
          </Container>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
