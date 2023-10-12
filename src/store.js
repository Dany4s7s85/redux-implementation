import { createStoreHook } from "react-redux";
import rootReducer from "./reducer/reducerIndex";

const useStore = createStoreHook(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default useStore;