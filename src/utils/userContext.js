import { createContext } from "react";

const userContext = createContext({
    userLoggedIn: "Default user",
});

export default userContext;