import {createContext} from 'react';

export const PostsContext = createContext({
    name: "",
    last_name: "",
    age: 0,
    study: "",
    profession: ""
});