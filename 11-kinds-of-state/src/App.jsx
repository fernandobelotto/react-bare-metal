import { StateArray } from "./components/StateArray";
import { StateBool } from "./components/StateBool";
import { StateNumber } from "./components/StateNumber";
import { StateObject } from "./components/StateObject";
import { StateString } from "./components/StateString";
export default function App() {
  return (
    <>
      <div>
        <StateNumber />
      </div>
      <div>
        <StateString />
      </div>
      <div>
        <StateBool />
      </div>
      <div>
        <StateObject />
      </div>
      <div>
        <StateArray />
      </div>
    </>
  );
}
