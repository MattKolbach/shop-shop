import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

//Every Context object comes with two components, a Provider and Consumer.
const StoreContext = createContext();
const { Provider } = StoreContext;


const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
      products: [],
      cart: [],
      cartOpen: false,
      categories: [],
      currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
  };

//this is a custom react hook
  const useStoreContext = () => {
    return useContext(StoreContext);
  };


  export { StoreProvider, useStoreContext };