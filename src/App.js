
import cars from './data/cars'
function App() {
  return (
    <div className="App">
      {cars.map((car) => (
        <div key={car.id}>
          {car.img.map((i) => {
            return(
              <img src={i} alt="car img" />
            )
          })}
          
        </div>
      ))}
      <h1>Hello</h1>
    </div>
  );
}

export default App;
