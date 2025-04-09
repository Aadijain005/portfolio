import React from "react";
import Grandchild from './Grandchild';

function Child({data}){
    return <Grandchild data = {data} />;
}
export default Child;