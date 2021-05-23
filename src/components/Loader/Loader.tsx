import React, {ReactElement} from "react";

export function Loader(): ReactElement {
    return (
        <div className="spinner-border text-danger" role="status">
            <span className="sr-only"/>
        </div>
    )
}