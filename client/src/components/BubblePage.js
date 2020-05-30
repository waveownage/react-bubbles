import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../util/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
    const [colorList, setColorList] = useState([]);
    useEffect(() => {
      axiosWithAuth()
          .get('/colors')
          .then(res => setColorList(res.data))
          .catch(err => console.log(err))
  }, [colorList]);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
