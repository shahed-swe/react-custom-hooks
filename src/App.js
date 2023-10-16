// importing hooks for testing
import DebounceComponent from "./hooks/useDebounce/examples/index";
import TimeOutComponent from "./hooks/useTimeout/examples/index";
import ToggleComponent from "./hooks/useToogle/examples/index";
import UpdateEffectComponent from "./hooks/useUpdateEffect/examples/index";
import ArrayComponent from "./hooks/useArray/examples/index";
import PreviousComponent from "./hooks/usePrevious/examples/index";
import StateWithHistoryComponent from "./hooks/useStateWithHistory/examples";
import StorageComponent from "./hooks/useStorage/examples";
import AsyncComponent from "./hooks/useAsync/examples";
import FetchComponent from "./hooks/useFetch/examples";
import ScriptComponent from "./hooks/useScript/examples";
import DeepCompareEffectComponent from "./hooks/useDeepCompareEffect/examples";
import EventListenerComponent from "./hooks/useEventListener/examples";
import OnScreenComponent from "./hooks/useOnScreen/examples";
import WindowSizeComponent from "./hooks/useWIndowSize/examples";
import StateWithValidationComponent from "./hooks/useStateWithValidation/examples";

function App() {
  return (
    <div className="App">
      <h1>debounce</h1>
      <DebounceComponent/>
      <h1>time out</h1>
      <TimeOutComponent/>
      <h1>toggle</h1>
      <ToggleComponent/>
      <h1>update effect</h1>
      <UpdateEffectComponent/>
      <h1>array component</h1>
      <ArrayComponent/>
      <h1>previous component</h1>
      <PreviousComponent/>
      <h1>state with history</h1>
      <StateWithHistoryComponent/>
      <h1>storage component</h1>
      <StorageComponent/>
      <h1>async component</h1>
      <AsyncComponent/>
      <h1>fetch component</h1>
      <FetchComponent/>
      <h1>script component</h1>
      <ScriptComponent/>
      <h1>useDeepcompareEffect</h1>
      <DeepCompareEffectComponent/>
      <h1>Event listener</h1>
      <EventListenerComponent/>
      <h1>On Screent Component</h1>
      <OnScreenComponent/>
      <h1>Window Size Component</h1>
      <WindowSizeComponent/>
      <h1>State with Validation</h1>
      <StateWithValidationComponent/>
    </div>
  );
}

export default App;
