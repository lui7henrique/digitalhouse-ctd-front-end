import { useCallback, useMemo, useReducer } from "react";

type State = {
  count: number;
};

type ActionTypes = "INCREMENT" | "DECREMENT" | "RESET";

type Action = {
  type: ActionTypes;
};

export const Count = () => {
  const initialState = useMemo((): State => {
    return {
      count: 0,
    };
  }, []);

  const reducer = (state: State, action: Action) => {
    const actions: Record<ActionTypes, State> = {
      INCREMENT: { ...state, count: state.count + 1 },
      DECREMENT: { ...state, count: state.count - 1 },
      RESET: { ...state, count: state.count - state.count },
    };

    return actions[action.type] || {};
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ marginBottom: "2rem" }}>
      Count: {state.count}
      <div>
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          style={{ padding: "1rem" }}
        >
          Increment (+)
        </button>

        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          style={{ padding: "1rem" }}
        >
          Decrement (-)
        </button>

        <button
          onClick={() => dispatch({ type: "RESET" })}
          style={{ padding: "1rem" }}
        >
          RESET
        </button>
      </div>
    </div>
  );
};
