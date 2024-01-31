import React from "react";


export default function Status({ status }: {status:string}) {
    return (
        <div className="status">{status}</div>
    );
}