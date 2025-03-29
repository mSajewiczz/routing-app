import {createContext} from 'react';

export const PostsContext = createContext({
    id: 0,
    name: "",
    last_name: "",
    age: 0,
    study: "",
    profession: "",
    photo: ""
});