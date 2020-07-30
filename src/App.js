import React, { useRef, useLayoutEffect } from "react";
import { TweenLite } from "gsap";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// function R(max) {
//   return Math.random() * max;
// }

// function Background(props) {
//   const { total = 40 } = props;
//   const ref = useRef();

//   useLayoutEffect(() => {
//     const prat = ref.current;
//     console.log(prat);
//     const w = window.innerWidth;
//     const h = window.innerHeight;
//     const dots = [];

//     function addAnimation(elm) {
//       return TweenLite.to(elm, R(20) + 10, {
//         bezier: {
//           values: [
//             {
//               x: R(w),
//               y: R(h),
//             },
//             {
//               x: R(w),
//               y: R(h),
//             },
//           ],
//         },
//         opacity: R(1),
//         scale: R(1) + 0.5,
//         delay: R(1),
//         onComplete: addAnimation,
//         onCompleteParams: [elm],
//       });
//     }

//     for (let i = 0; i < total; i++) {
//       const div = document.createElement("div");
//       TweenLite.set(div, {
//         attr: {
//           class: "dot",
//         },
//         x: R(w),
//         y: R(h),
//         opacity: 0,
//       });
//       prat.appendChild(div);
//       const dot = addAnimation(div);
//       dot.play();
//       dots.push(dot);
//     }

//     return () => {
//       // Clear animations and whatever here
//       dots.forEach((dot) => dot.kill());
//       prat.innerHTML = "";
//     };
//   }, [total]);
//   return <div className="fireflies" ref={ref} />;
// }

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact={true}>
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
