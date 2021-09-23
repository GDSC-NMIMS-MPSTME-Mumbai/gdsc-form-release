import React, { useState, useEffect } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import M from 'materialize-css'

export default function Login() {

    useEffect(() => {
        // var $iframes = $('zeIframe');
        // $iframes.each(function () {
        //      var thisDoc = this.contentWindow.document;
        //      if ( ! thisDoc.getElementById(scriptID)) {
        //          var scriptObj = thisDoc.createElement("script");
        //          scriptObj.type = "text/javascript";
        //          scriptObj.id = scriptId;
        //          scriptObj.innerHTML = script;
        //          thisDoc.body.appendChild(scriptObj);
        //      }
        //  });

        // setTimeout(() => {
        //     var script = `document.onkeydown = function (e) {
        //         if (e.keyCode == 123) {
        //           return false;
        //         }
        //         if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        //           return false;
        //         }
        //         if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        //           return false;
        //         }
        //         if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        //           return false;
        //         }
        //       }`;
        //     window.$('#zeIframe').contents().find('body').append(window.$('<script>').html(script))
        // }, 3000);

        // var myFrame = document.getElementById('zeIframe');

        // myFrame.contentWindow.foo = document.onkeydown = function (e) {
        //     if (e.keyCode == 123) {
        //         return false;
        //     }
        //     if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        //         return false;
        //     }
        //     if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        //         return false;
        //     }
        //     if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        //         return false;
        //     }
        // }

        // setTimeout(() => {
        //     const iframe = document.getElementById('zeIframe');
        //     const iframeWin = iframe.contentWindow || iframe;
        //     const iframeDoc = iframe.contentDocument || iframeWin.document;

        //     var script = iframeDoc.createElement("script");
        //     script.append(`
        //         document.querySelector("html").addEventListener('contextmenu', (e) => {
        //             e.preventDefault();
        //         });
        //     `);
        //     iframeDoc.documentElement.appendChild(script);
        // }, 10000);

    })

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
        } catch(err) {
            console.log("eeror", err)
        }
    }

    const [isSignedin, setIsSignedIn] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            strict()
        }, 1000)
    }, [isSignedin])

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
                    setIsSignedIn(res)
                } else {
                    M.toast({ html: "You must login with an nmims email domain. Logging out..." })
                    firebase.auth().signOut().then(() => {
                        M.toast({ html: "Logged out. Refresh to continue" })
                    }).catch((err) => {
                        console.log("Error caught while logging out:", err)
                    })
                }
            }
        },
    };

    return (
        <>
            {
                isSignedin ? (
                    <div style={{ height: "95vh" }} >
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSeZtLUO3sTUi-aGuuRxvyk37BAVbDjEN0fYM5CIwCQ_iCy48Q/viewform?embedded=true"
                            width="80%"
                            height="100%"
                            style={{ margin: "0 auto" }}
                            frameborder="0"
                            marginheight="0"
                            marginwidth="0"
                            id="zeIframe"
                            // onLoad={() => strict()}
                        >Loading…</iframe>
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
