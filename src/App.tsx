import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { ChartComponent } from "./ChartComponent.js";

const client = generateClient<Schema>();

function App() {
  client.models.History.list()

  return (
    <main>
      <footer className="App-header">
        <p>Korea House Price Index</p>
      </footer>
      <body>
        <ChartComponent data={null} volumeData={null}></ChartComponent>
      </body>
      <footer className="App-footer">
        <p>모든 데이터는 대한민국 공식 전자정부 누리집에서 제공받습니다. </p>
      </footer>
    </main>
  );
}

export default App;
