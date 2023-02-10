import css from './layout.module.scss'
import {LayoutProvider} from "../../hooks/layout/layout-provider";
export const Layout = (props) => {
    return (
        <LayoutProvider>
            <div className={css.layout}>{props.children}</div>
        </LayoutProvider>
    )
}
