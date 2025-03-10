import { Suspense } from "react";
import Loader from "../Loader.tsx/loader";
// import Loader from "../Loader.tsx";

export const Loadable =
  (Component: React.ComponentType<any>) => (props:any) =>
    (
      <Suspense
        fallback={
          <div className="flex jusify-center items-center">
            <Loader/>
          </div>
        }
      >
        <Component {...props} />
      </Suspense>
    );
