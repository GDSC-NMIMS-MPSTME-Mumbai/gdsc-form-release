import React, { useState, useEffect } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import M from 'materialize-css'

export default function Login(props) {

    var timeout

    const strict = () => {
        try {
            const iframe = document.getElementById('zeIframe');
            const iframeWin = iframe.contentWindow || iframe;
            const iframeDoc = iframe.contentDocument || iframeWin.document;

            var script = iframeDoc.createElement("script");
            script.append(`
                window.onload = function() {
                    document.querySelector("html").addEventListener('contextmenu', (e) => {
                        e.preventDefault();
                    });
                    document.onkeydown = function (e) {
                        if (e.keyCode == 123) {
                            return false;
                        }
                        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
                            return false;
                        }
                        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
                            return false;
                        }
                        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
                            return false;
                        }
                    }
                }
            `);
            iframeDoc.documentElement.appendChild(script);
        } catch (err) {
            console.log("eeror", err)
        }
    }

    const [isSignedin, setIsSignedIn] = useState(false)

    // useEffect(() => {
    //     setTimeout(() => {
    //         var devtools = function () { };
    //         devtools.toString = function () {
    //             if (document.querySelector("#zeIframe") != null) {
    //                 document.querySelector("#zeIframe").setAttribute("src", "")
    //             }
    //             // logout()
    //             setIsSignedIn(false)
    //             clearInterval(timeout)
    //             M.toast({ html: "You've been logged out as we detected something sus!" })
    //             return '-'
    //         }

    //         timeout = setInterval(() => {
    //             console.profile(devtools)
    //             console.profileEnd(devtools)
    //         }, 1000)
    //     }, 1000)

    //     return () => {
    //         clearInterval(timeout)
    //     }
    // }, [isSignedin])


    
    const firebaseOut = () => {
        firebase.auth().signOut().then(() => {
            M.toast({ html: "Logged out. Refresh to continue" })
            setIsSignedIn(false)
        }).catch((err) => {
            console.log("Error caught while logging out:", err)
            setIsSignedIn(false)
        })
    }

    const logout = () => {
        M.toast({ html: "You must login with an nmims email domain. Logging out..." })
        firebaseOut()
    }

    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: (res) => {
                if (res.user && res.user.email && res.user.email.includes("nmims.edu.in")) {
                    firebase.firestore().collection("blacklist").doc("30DaysOfGCP").get().then((data) => {
                        let people = data.data().emails
                        console.log("peeps", people)
                        console.log("ckec", people.includes(res.user.email))
                        if (people && people.includes(res.user.email)) {
                            M.toast({ html: "You've already submitted the form using this email id." })
                            firebaseOut()
                        } else {
                            firebase.firestore().collection("blacklist").doc("30DaysOfGCP").set({
                                emails: firebase.firestore.FieldValue.arrayUnion(res.user.email)
                            }).then(() => {
                                setIsSignedIn(res)
                            })
                        }
                    }).catch(err => {
                        M.toast({ html: "Something went wrong, please try again!" })
                    })
                } else {
                    logout()
                }
            }
        },
    };



    return (
        <>
            {
                isSignedin ? (
                    props.url ? (
                        <div style={{ height: "95vh" }} >
                            <iframe
                                // hidden
                                src={props.url}
                                width="80%"
                                height="100%"
                                style={{ margin: "0 auto" }}
                                frameborder="0"
                                marginheight="0"
                                marginwidth="0"
                                id="zeIframe"
                                contextMenu="return false;"
                            // onLoad={() => strict()}
                            >

                            </iframe>
                        </div>
                    ) : (
                        <div className="valign-wrapper" style={{
                            height: "95vh",
                            width: "100vw",
                            justifySelf: "center",
                            alignSelf: "center",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }} >
                            <div className="preloader-wrapper small active">
                                <div className="spinner-layer spinner-green-only">
                                    <div className="circle-clipper left">
                                        <div className="circle"></div>
                                    </div><div className="gap-patch">
                                        <div className="circle"></div>
                                    </div><div className="circle-clipper right">
                                        <div className="circle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                ) : (
                    <div className="valign-wrapper" style={{
                        height: "95vh",
                        width: "100vw",
                        justifySelf: "center",
                        alignSelf: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }} >
                        <div style={{ textAlign: "center" }}>
                            <h4>Please login using NMIMS ID</h4>
                            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                        </div>
                    </div>
                )
            }
        </>
    )
}
