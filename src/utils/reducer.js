import { ACTIONS } from "./actions";
import { bfs } from "./bfs";
import { dfs } from "./dfs";
import { dijktras } from "./dijktras";
import { getInitialState } from "./initialState";
import { getNeighboringVertices } from "./getNeighboringVertices";
export const reducer = (state, action) => {
  if (action.type === ACTIONS.UNDO) {
    if (state.lock) {
      return state;
    }
    if (state.last_actions.length === 0) {
      return state;
    }
    const last_index = state.last_actions.length - 1;
    if (state.last_actions[last_index] === "edge") {
      //last operation was an edge
      return {
        ...state,
        adjList: state.adjList.filter(
          (adjItem, index) => index !== state.adjList.length - 1
        ),
        last_actions: state.last_actions.filter(
          (actions, index) => index !== last_index
        ),
      };
    } else {
      //last operation was an vertex
      const vertex_index = state.last_actions[last_index];
      const notAllowed = getNeighboringVertices(
        vertex_index,
        state.rows,
        state.cols
      );
      return {
        ...state,
        vertices: state.vertices.map((vertex, index) => {
          if (index === vertex_index) {
            return 0;
          }
          if (notAllowed.includes(index)) {
            return vertex + 1;
          }
          return vertex;
        }),
        last_actions: state.last_actions.filter(
          (actions, index) => index !== last_index
        ),
      };
    }
  }
  if (action.type === ACTIONS.DELETE) {
    return getInitialState();
  }
  if (action.type === ACTIONS.REFRESH) {
    return {
      ...state,
      edge: {
        node1: -1,
        node2: -1,
        weight: -1,
      },
      CurrentVertex: null,
      currentAlgo: "",
      vertices: state.vertices.map((item) => {
        if (item >= 1) return 1;
        return 0;
      }),
      nodesDist: state.vertices.map((node) => 10000),
      lock: false,
    };
  }
  if (action.type === ACTIONS.TOGGLE_LOCK) {
    return { ...state, lock: !state.lock };
  }
  if (action.type === ACTIONS.MAKENODE) {
    if (state.lock) {
      return state;
    }
    const index = action.payload;
    // console.log(index);
    //if an algorithm is running ignore clicks
    if (state.currentAlgo !== "") {
      return state;
    }
    //check if user clicked on a vertex twice
    if (index === state.edge.node1) {
      //deactivate edge making process
      return {
        ...state,
        currentVertex: null,
        edge: { ...state.edge, node1: -1 },
        startNode: index,
      };
    }

    //set this node as the current node
    //if this node was already an vertex
    if (state.vertices[index] === 1) {
      return { ...state, currentVertex: index };
    }

    //see if its possible to make this node as vertex
    if (state.vertices[index] < 0) {
      return state;
    }
    //this is a new vertex
    // get those nodes where putting a new vertex is not allowed
    let notAllowed = getNeighboringVertices(index, state.rows, state.cols);

    return {
      ...state,
      currentVertex: null,
      startNode: index,
      edge: {
        node1: -1,
        node2: -1,
        weight: -1,
      },
      vertices: state.vertices.map((vertex, idx) => {
        if (index === idx) {
          return 1;
        }
        if (notAllowed.includes(idx)) {
          return vertex - 1;
        }
        return vertex;
      }),
      last_actions: [...state.last_actions, index],
    };
  }
  if (action.type === ACTIONS.MAKEEDGE) {
    //ignore if currently doing graph traversal
    if (state.currentAlgo !== "") return state;
    //maybe this vertex is part of an edge
    if (state.edge.node1 !== -1) {
      //found an edge
      const edgeWeight = Math.floor(Math.random() * 10 + 1);
      return {
        ...state,
        adjList: [
          ...state.adjList,
          [state.edge.node1, state.currentVertex, edgeWeight],
        ],
        edge: {
          node1: -1,
          node2: -1,
          weight: -1,
        },
        currentVertex: null,
        last_actions: [...state.last_actions, "edge"],
      };
    } else {
      //maybe this is the first node of an edge
      return {
        ...state,
        edge: {
          ...state.edge,
          node1: state.currentVertex,
        },
      };
    }
  }
  if (action.type === ACTIONS.CHANGEALGO) {
    return { ...state, currentAlgo: action.payload, lock: true };
  }
  if (action.type === ACTIONS.VISUALISE) {
    if (action.payload === "bfs") {
      return {
        ...state,
        vertices: bfs(state.startNode, state.vertices, state.adjList),
      };
    }
    if (action.payload === "dfs") {
      return {
        ...state,
        vertices: dfs(state.startNode, state.vertices, state.adjList),
      };
    }
    if (action.payload === "dijktras") {
      return {
        ...state,
        nodesDist: dijktras(state.startNode, state.nodesDist, state.adjList),
      };
    }
  }
  if (action.type === ACTIONS.WINDOW_RESIZE) {
    return {
      ...state,
      windowSize: window.innerWidth,
    };
  }

  throw new Error("invalid call");
};
