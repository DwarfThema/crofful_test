import React from "react";
import styled from "styled-components";
import { Border3pxMountainMist, NotosansNormalMountainMist20px } from "../../styledMixins";


function View(props) {
  const { check, chack, className } = props;

  return (
    <View1 className={`view-2 ${className || ""}`}>
      <OverlapGroup1 className="overlap-group1-4">
        <Default className="default">
          <Check className="check" src={check} />
        </Default>
        <Agree className="agree">
          <Check className="chack" src={chack} />
        </Agree>
      </OverlapGroup1>
      <Text2 className="text-2">개인정보 처리 방침에 동의합니다.</Text2>
    </View1>
  );
}

const View1 = styled.div`
  align-self: flex-start;
  margin-top: 17px;
  margin-left: 23.93px;
  display: flex;
  align-items: flex-start;
  min-width: 338px;

  &.view-2.view-3 {
    margin-top: 18px;
  }
`;

const OverlapGroup1 = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  border-radius: 11.97px;
`;

const Default = styled.div`
  ${Border3pxMountainMist}
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background-color: var(--white);
  border-radius: 11.97px;
`;

const Check = styled.img`
  margin-top: 5.8px;
  width: 17.5px;
  height: 13px;
  margin-left: 0;
`;

const Agree = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background-color: var(--electric-violet);
  border-radius: 90px;
`;

const Text2 = styled.div`
  ${NotosansNormalMountainMist20px}
  width: 303px;
  min-height: 24px;
  margin-left: 8px;
  letter-spacing: 0;
`;

export default View;
