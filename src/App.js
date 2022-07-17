import {Provider} from 'react-redux';
import index from './store';
import RestaurantScreen from './components/RestaurantScreen';

function App() {
  return (
    <div>
      <Provider store={index}>
        <RestaurantScreen />
      </Provider>
    </div>
  );
}

export default App;
