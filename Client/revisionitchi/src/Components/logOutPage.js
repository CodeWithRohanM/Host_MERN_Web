import React, { useEffect } from "react";

const logOutPage = () => {

    const logOutUser = async () => {
        try {
            const getData = await fetch("/signOut", {
                type: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                body: {

                }
            })

        } catch (err) {
            console.log(err);
        }

    }


    useEffect((curValue, index) => {
        logOutUser();

    }, []);

    return <>


    </>
};


