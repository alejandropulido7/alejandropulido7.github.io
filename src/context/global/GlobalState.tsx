import {useReducer} from "react";
import { ShowNavContext } from "./GlobalContext";

export function GlobalState({children} : any) {

    const initialState = {
        showNav: false
    }

    const globalReducer = (state, action)=>{
        if(action.type === 'ACTIVE_NAV') {
            return { ...state, showNav: action.payload};
        }
        return state;
        
    }

    const [state, dispatch] = useReducer(globalReducer, initialState);

    const toggleShowNav = (active) => {        
        dispatch({
            type: 'ACTIVE_NAV',
            payload: active
        })
    }

    return (
        <ShowNavContext.Provider value={{
            showNav: state.showNav,
            toggleShowNav
        }}>
            {children}
        </ShowNavContext.Provider>
    )
    
}