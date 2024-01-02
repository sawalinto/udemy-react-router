import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import Detail from "../views/Detail";
import NotFound from "../views/NotFound";

const Router = () => {
  return (
    <React.Fragment>
      <Routes>
        {/* <Switch> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        {/* </Switch> */}
      </Routes>
    </React.Fragment>
  );
};

export default Router;
