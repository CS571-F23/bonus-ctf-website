import { useEffect, useMemo, useState } from "react";

export default function useBadgerGuard(options) {

    const logErrors = options?.logErrors ?? true;
    const bid = options?.bid;

    const UNKNOWN_STATE = useMemo(() => "UNKNOWN", []);
    const INVALID_STATE = useMemo(() => "INVALID", []);
    const VALID_STATE = useMemo(() => "VALID", []);

    const POTENTIAL_STATES = useMemo(() => { return {
        UNKNOWN_STATE: false,
        INVALID_STATE: false,
        VALID_STATE: true
    }}, []);

    const [state, setState] = useState(bid ? VALID_STATE : UNKNOWN_STATE);

    useEffect(() => {
        fetch("https://cs571.org/api/auth/what-is-my-bid", {
            credentials: "include"
        })
        .then(res => {
            if (res.status === 200) {
                setState(VALID_STATE)
            } else {
                if (logErrors) {
                    console.error("Failed to aquire Badger ID, are you logged in?");
                    console.error("If error persists, try closing all browser windows, disabling your extensions, or using a different browser.");
                }
                setState(INVALID_STATE);
            }
        })
    }, [setState]);

    return {
        POTENTIAL_STATES: POTENTIAL_STATES,
        state: state
    }
}