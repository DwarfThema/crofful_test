import React from "react";
import styled from "styled-components";


function FixedBar(props) {
  const { crofful, className } = props;

  return (
    <FixedBar1 className={`fixed-bar ${className || ""}`}>
      <OverlapGroup10 className="overlap-group10">
        <BgBlur className="bg-blur"></BgBlur>
        <Grad className="grad" src="/img/grad@1x.png" />
        <Line className="line" src="/img/line@1x.png" />
        <Crofful className="crofful-1" src={crofful} />
      </OverlapGroup10>
    </FixedBar1>
  );
}

const FixedBar1 = styled.div`
  position: fixed;
  height: 130px;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  align-items: flex-start;
  min-width: 3044px;

  &.fixed-bar.fixed-bar-1 {
    z-index: 7;
  }
`;

const OverlapGroup10 = styled.div`
  width: 3044px;
  height: 71px;
  position: relative;
  margin-top: -2px;
`;

const BgBlur = styled.div`
  position: absolute;
  width: 3044px;
  height: 65px;
  top: 2px;
  left: 0;
  background-color: var(--white-3);
  backdrop-filter: blur(25px) brightness(100%);
  -webkit-backdrop-filter: blur(25px) brightness(100%);
`;

const Grad = styled.img`
  position: absolute;
  width: 3044px;
  height: 65px;
  top: 2px;
  left: 0;
`;

const Line = styled.img`
  position: absolute;
  width: 1897px;
  height: 71px;
  top: 0;
  left: 0;
`;

const Crofful = styled.img`
  position: absolute;
  width: 156px;
  height: 35px;
  top: 17px;
  left: 19px;
`;

export default FixedBar;
