import React from "react";
import styled from "styled-components";
import {
  NotosansNormalSonicSilver29px,
  NotosansNormalEerieBlack22px,
  NotosansSemiBoldEerieBlack37px,
} from "../../styledMixins";


function Page2(props) {
  const { mockup1, shadow1, shadow12, character, butterfly, className } = props;

  return (
    <Page21 className={`page2 ${className || ""}`}>
      <Text11 className="text-11">현생에서 나눌 수 없었던</Text11>
      <Text10 className="text-10">
        게임 속 이야기,
        <br />
        크로플에서 시작하세요
      </Text10>
      <SNS className="sns-1">
        인스타그램 같은 SNS에 올리기 눈치보였던 게임 속 소소한 이야기, 이제 크로플에서 기록하며 추억을 쌓아 보세요.
      </SNS>
      <OverlapGroup8 className="overlap-group8">
        <OverlapGroup className="overlap-group-4">
          <Shadow className="shadow-4"></Shadow>
          <Mockup1 className="mockup1" src={mockup1} />
        </OverlapGroup>
        <X1 className="x1">
          <OverlapGroup1 className="overlap-group1-3">
            <Shadow1 className="shadow1-6" src={shadow1} />
            <Shadow11 className="shadow1-7" src={shadow12} />
            <Character className="character" src={character} />
          </OverlapGroup1>
          <Butterfly className="butterfly" src={butterfly} />
        </X1>
      </OverlapGroup8>
    </Page21>
  );
}

const Page21 = styled.div`
  position: absolute;
  width: 706px;
  top: 1544px;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 29.9px 40.7px;
  align-items: flex-start;
  min-height: 1149px;

  &.page2.page2-1 {
    z-index: 5;
    margin-left: 6px;
    width: 705.999755859375px;
    align-self: center;
    margin-top: 132.3px;
    min-height: 1148.717529296875px;
    position: unset;
    top: unset;
    left: unset;
  }
`;

const Text11 = styled.div`
  ${NotosansNormalEerieBlack22px}
  width: 227px;
  min-height: 31px;
  margin-top: 18px;
  margin-left: 13.16px;
  letter-spacing: 0;
`;

const Text10 = styled.div`
  ${NotosansSemiBoldEerieBlack37px}
  width: 594px;
  min-height: 104px;
  align-self: center;
  margin-top: 4px;
  margin-right: 4.8px;
  letter-spacing: 0;
`;

const SNS = styled.div`
  ${NotosansNormalSonicSilver29px}
  width: 591px;
  min-height: 120px;
  align-self: center;
  margin-top: 24px;
  margin-right: 7.2px;
  letter-spacing: -1.45px;
  line-height: 40px;
`;

const OverlapGroup8 = styled.div`
  width: 596px;
  height: 772px;
  position: relative;
  margin-top: 16px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 346px;
  height: 687px;
  top: 0;
  left: 250px;
`;

const Shadow = styled.div`
  position: absolute;
  width: 334px;
  height: 680px;
  top: 7px;
  left: 12px;
  background-color: var(--tolopea);
  border-radius: 77px;
  filter: blur(20px);
  opacity: 0.2;
`;

const Mockup1 = styled.img`
  position: absolute;
  width: 343px;
  height: 681px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const X1 = styled.div`
  position: absolute;
  width: 361px;
  height: 304px;
  top: 468px;
  left: 0;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 380px;
  height: 334px;
  top: 0;
  left: 0;
`;

const Shadow1 = styled.img`
  position: absolute;
  width: 204px;
  height: 88px;
  top: 234px;
  left: 98px;
  mix-blend-mode: multiply;
`;

const Shadow11 = styled.img`
  position: absolute;
  width: 108px;
  height: 65px;
  top: 269px;
  left: 271px;
  mix-blend-mode: multiply;
`;

const Character = styled.img`
  position: absolute;
  width: 284px;
  height: 292px;
  top: 0;
  left: 0;
`;

const Butterfly = styled.img`
  position: absolute;
  width: 72px;
  height: 66px;
  top: 134px;
  left: 289px;
`;

export default Page2;
