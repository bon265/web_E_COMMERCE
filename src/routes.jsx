// @flow strict

import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './about';
import Product from './product';


function PageRoutes() {
    return (
        <Routes>
            
            <Route path={'about'} element={<About/>}> </Route>
            <Route path={'product'} element={<Product/>}> </Route>   
        </Routes>
    );
};

export default PageRoutes;