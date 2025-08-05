import { data } from "./utils/data.js";
import Card from "./components/Card";
function App() {
  return (
    <>
      {data.map((mainData, index) => {
        return <Card data={mainData} key={index} />;
      })}
    </>
  );
}

export default App;
