import React from 'react';
import LastProductInDb from './LastProductInDb';
import LastUserInDb from './LastUserInDb';

function ContentRowBotton(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {/*<!-- Last Product in DB -->*/}
            <LastProductInDb />    
            <LastUserInDb />
        </div>
        </React.Fragment>
    )
}
export default ContentRowBotton;