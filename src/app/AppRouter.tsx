import { useRoutes } from "react-router-dom"
import routes from "../Config/routes"
// import routes from "../Config/routes"

const AppRouter = () => {
    const Routes=useRoutes(routes)
    return <div>{Routes}</div>
}

export default AppRouter