import { useState, useEffect } from "react";
import usePut from "./usePut";
import { ENDPOINT, UPDATE_PROFILE } from "./constants";

export const useInactivity = ({userId}) => {
    const { info, pending, sendUpdatedData } = usePut();
    const url = `${ENDPOINT}${UPDATE_PROFILE}/${userId}`;

    useEffect(() => {

        const offline = () => {

            if (typeof window !== "undefined") {
                window.addEventListener('beforeunload', () => {
                    sendUpdatedData({
                        endpoint: url,
                        putData: {
                            online: false,
                        },
                    });
                })
            }
        }

    }, [])
}