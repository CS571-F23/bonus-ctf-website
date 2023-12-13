import { useEffect, useRef, useState } from "react";
import useBadgerGuard from "../hooks/UseBadgerGuard";

export default function BadgerGuardian(props) { 
    const guard = useBadgerGuard(props);
    const guardRef = useRef(guard)

    const [loadingMessage, setLoadingMessage] = useState("");

    useEffect(() => {
        setTimeout(() => {
            if (guardRef.current.state === "UNKNOWN") {
                setLoadingMessage("Loading, please wait...")
            }
        }, 1000)
    }, [])
    
    console.log(guard.state)
    switch (guard.state) {
        case "UNKNOWN":
            return <p>{loadingMessage}</p>
        case "INVALID":
            return <p>You do not have a valid session! <a target="_blank" href="https://www.cs571.org/auth/login">Please login.</a> After logging in, wait 1 minute and restart your browser.</p>
        case "VALID":
            return props.children
    }
}