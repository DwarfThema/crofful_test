import React from "react";
import Page2 from "../Page2";
import FixedBar from "../FixedBar";
import View from "../View";
import styled from "styled-components";
import {
  NanumsquareotfRegularNormalWhite32p,
  NanumsquareotfBoldWhite13px,
  NotosansExtraBoldEerieBlack41px,
  NotosansSemiBoldEerieBlack37px,
  NotosansBoldBlueViolet21px,
  NotosansNormalMountainMist25px,
  NotosansNormalSonicSilver29px,
  NanumsquareotfBoldSonicSilver13px,
  NotosansNormalSonicSilver30px,
  RobotoBoldWhite35px,
  NanumsquareotfExtraExtraBoldWhite32,
  RobotoBoldWhite27px,
} from "../../styledMixins";
import "./Mobile.css";

function Mobile(props) {
  const {
    overlapGroup9,
    crofful,
    spanText,
    spanText2,
    spanText3,
    text12,
    text9,
    mockup3,
    text8,
    shadow1,
    shadow12,
    shadow13,
    maskGroup,
    maskGroup2,
    mockup2,
    shadow14,
    shadow2,
    shadow15,
    animal_Crossing_New_Horizons__Chara,
    minecraft,
    mockup4,
    shadow16,
    animal_Crossing_New_Horizons__Chara2,
    vector2,
    text4,
    text5,
    text6,
    text7,
    overlapGroup4,
    snsCrofful,
    text3,
    overlapGroup2,
    inputType,
    inputPlaceholder,
    text1,
    spanText4,
    spanText5,
    page2Props,
    fixedBarProps,
    viewProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="mobile screen" name="form1" action="form1" method="post">
        <OverlapGroup12>
          <Page2
            mockup1={page2Props.mockup1}
            shadow1={page2Props.shadow1}
            shadow12={page2Props.shadow12}
            character={page2Props.character}
            butterfly={page2Props.butterfly}
          />
          <OverlapGroup9 style={{ backgroundImage: `url(${overlapGroup9})` }}>
            <Crofful src={crofful} />
            <OverlapGroup1>
              <SNS>
                <Span0>{spanText}</Span0>
                <Span1>{spanText2}</Span1>
                <Span0>{spanText3}</Span0>
              </SNS>
              <Rectangle35></Rectangle35>
            </OverlapGroup1>
            <View1>
              <OverlapGroup>
                <Shadow></Shadow>
                <Button></Button>
                <Text12>{text12}</Text12>
              </OverlapGroup>
            </View1>
          </OverlapGroup9>
        </OverlapGroup12>
        <FixedBar crofful={fixedBarProps.crofful} />
        <Page3>
          <OverlapGroup7>
            <Text9>{text9}</Text9>
            <OverlapGroupContainer>
              <OverlapGroup4>
                <OverlapGroup2>
                  <Shadow1></Shadow1>
                  <Mockup3 src={mockup3} />
                </OverlapGroup2>
                <Text8>{text8}</Text8>
                <OverlapGroup3>
                  <Shadow11 src={shadow1} />
                  <Shadow12 src={shadow12} />
                  <Shadow13 src={shadow13} />
                  <MaskGroup src={maskGroup} />
                  <MaskGroup1 src={maskGroup2} />
                </OverlapGroup3>
              </OverlapGroup4>
              <OverlapGroupContainer1>
                <OverlapGroup11>
                  <Shadow2></Shadow2>
                  <Mockup2 src={mockup2} />
                </OverlapGroup11>
                <OverlapGroup21>
                  <Shadow14 src={shadow14} />
                  <Shadow21 src={shadow2} />
                  <Shadow15 src={shadow15} />
                  <AnimalCrossingNewHorizonsCharacterA src={animal_Crossing_New_Horizons__Chara} />
                  <Minecraft src={minecraft} />
                </OverlapGroup21>
              </OverlapGroupContainer1>
            </OverlapGroupContainer>
          </OverlapGroup7>
        </Page3>
        <Page4>
          <OverlapGroup6>
            <BG4></BG4>
            <OverlapGroup5>
              <Shadow3></Shadow3>
              <Mockup4 src={mockup4} />
            </OverlapGroup5>
            <OverlapGroup13>
              <Shadow16 src={shadow16} />
              <AnimalCrossingNewHorizonsCharacterA1 src={animal_Crossing_New_Horizons__Chara2} />
            </OverlapGroup13>
            <OverlapGroup22>
              <Vector src="/img/vector-2@2x.png" />
              <Vector1 src={vector2} />
              <Text4>{text4}</Text4>
              <Text5>{text5}</Text5>
            </OverlapGroup22>
            <Text6>{text6}</Text6>
            <Text7>{text7}</Text7>
          </OverlapGroup6>
        </Page4>
        <OverlapGroupContainer2>
          <OverlapGroup41 style={{ backgroundImage: `url(${overlapGroup4})` }}>
            <OverlapGroup31>
              <SNSCrofful>{snsCrofful}</SNSCrofful>
              <Text3>{text3}</Text3>
              <OverlapGroup23 style={{ backgroundImage: `url(${overlapGroup2})` }}>
                <BzS6nH name="이메일을입력해주세요" placeholder={inputPlaceholder} type={inputType} />
              </OverlapGroup23>
              <View check={viewProps.check} chack={viewProps.chack} />
              <a href="javascript:SubmitForm('form1')">
                <View2>
                  <OverlapGroup8>
                    <Text1>{text1}</Text1>
                  </OverlapGroup8>
                </View2>
              </a>
            </OverlapGroup31>
          </OverlapGroup41>
          <OverlapGroup51>
            <CroffulgmailcomCo>
              <span className="notosans-bold-blue-violet-21px">{spanText4}</span>
              <span className="notosans-normal-blue-violet-21px">{spanText5}</span>
            </CroffulgmailcomCo>
          </OverlapGroup51>
        </OverlapGroupContainer2>
      </form>
    </div>
  );
}

const OverlapGroup12 = styled.div`
  width: 706px;
  height: 2693px;
  z-index: 4;
  position: relative;
  margin-top: -118px;
  margin-left: 0;
`;

const OverlapGroup9 = styled.div`
  position: absolute;
  width: 700px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 541.1px 51.5px;
  align-items: center;
  min-height: 1636px;
  background-size: 100% 100%;
`;

const Crofful = styled.img`
  width: 554px;
  height: 155px;
  margin-right: 7.87px;
`;

const OverlapGroup1 = styled.div`
  width: 597px;
  height: 58px;
  position: relative;
  align-self: flex-start;
  margin-top: 21px;
`;

const SNS = styled.div`
  ${NanumsquareotfExtraExtraBoldWhite32}
  position: absolute;
  width: 597px;
  top: 0;
  left: 0;
  text-shadow: 0px 4px 8px #663afe4c;
  text-align: center;
  letter-spacing: 1.6px;
`;

const Span0 = styled.span`
  ${NanumsquareotfExtraExtraBoldWhite32}
  letter-spacing: 0.51px;
`;

const Span1 = styled.span`
  ${NanumsquareotfRegularNormalWhite32p}
  letter-spacing: 0.51px;
`;

const Rectangle35 = styled.div`
  position: absolute;
  width: 389px;
  height: 2px;
  top: 44px;
  left: 104px;
  background-color: var(--white-2);
  box-shadow: 0px 4px 8px #653afd33;
`;

const View1 = styled.div`
  margin-top: 102px;
  margin-left: 2px;
  display: flex;
  align-items: flex-end;
  min-width: 361px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const OverlapGroup = styled.div`
  width: 359px;
  height: 103px;
  position: relative;
  margin-bottom: 0;
`;

const Shadow = styled.div`
  position: absolute;
  width: 299px;
  height: 93px;
  top: 10px;
  left: 30px;
  background-color: var(--purple-heart);
  border-radius: 90px;
  filter: blur(50px);
  opacity: 0.3;
`;

const Button = styled.div`
  position: absolute;
  width: 359px;
  height: 93px;
  top: 0;
  left: 0;
  background-color: var(--purple-heart-2);
  border-radius: 90px;
`;

const Text12 = styled.div`
  ${RobotoBoldWhite35px}
  position: absolute;
  width: 281px;
  top: 31px;
  left: 39px;
  text-align: center;
  letter-spacing: 0;
`;

const Page3 = styled.div`
  height: 1458px;
  z-index: 3;
  display: flex;
  align-items: flex-start;
  min-width: 704px;
`;

const OverlapGroup7 = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  padding: 15.4px 2.4px;
  align-items: flex-end;
  min-height: 1458px;
  background-color: var(--magnolia);
`;

const Text9 = styled.div`
  ${NotosansSemiBoldEerieBlack37px}
  width: 594px;
  min-height: 104px;
  align-self: center;
  margin-top: 60px;
  margin-left: 1.2px;
  letter-spacing: 0;
`;

const OverlapGroupContainer = styled.div`
  width: 666px;
  height: 1239px;
  position: relative;
  margin-top: 24px;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 615px;
  height: 767px;
  top: 0;
  left: 23px;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 312px;
  height: 622px;
  top: 145px;
  left: 303px;
`;

const Shadow1 = styled.div`
  position: absolute;
  width: 302px;
  height: 616px;
  top: 6px;
  left: 10px;
  background-color: var(--tolopea);
  border-radius: 77px;
  filter: blur(20px);
  opacity: 0.2;
`;

const Mockup3 = styled.img`
  position: absolute;
  width: 311px;
  height: 617px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Text8 = styled.div`
  ${NotosansNormalSonicSilver29px}
  position: absolute;
  width: 592px;
  top: 0;
  left: 0;
  letter-spacing: -1.45px;
  line-height: 40px;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 320px;
  height: 344px;
  top: 105px;
  left: 32px;
`;

const Shadow11 = styled.img`
  position: absolute;
  width: 188px;
  height: 90px;
  top: 254px;
  left: 0;
  mix-blend-mode: multiply;
`;

const Shadow12 = styled.img`
  position: absolute;
  width: 102px;
  height: 154px;
  top: 76px;
  left: 218px;
  mix-blend-mode: multiply;
`;

const Shadow13 = styled.img`
  position: absolute;
  width: 168px;
  height: 90px;
  top: 219px;
  left: 131px;
  mix-blend-mode: multiply;
`;

const MaskGroup = styled.img`
  position: absolute;
  width: 140px;
  height: 271px;
  top: 0;
  left: 145px;
`;

const MaskGroup1 = styled.img`
  position: absolute;
  width: 152px;
  height: 292px;
  top: 14px;
  left: 20px;
`;

const OverlapGroupContainer1 = styled.div`
  position: absolute;
  width: 666px;
  height: 730px;
  top: 509px;
  left: 0;
`;

const OverlapGroup11 = styled.div`
  position: absolute;
  width: 315px;
  height: 623px;
  top: 0;
  left: 0;
`;

const Shadow2 = styled.div`
  position: absolute;
  width: 302px;
  height: 616px;
  top: 6px;
  left: 13px;
  background-color: var(--tolopea);
  border-radius: 77px;
  filter: blur(20px);
  opacity: 0.2;
`;

const Mockup2 = styled.img`
  position: absolute;
  width: 311px;
  height: 618px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const OverlapGroup21 = styled.div`
  position: absolute;
  width: 438px;
  height: 347px;
  top: 382px;
  left: 228px;
`;

const Shadow14 = styled.img`
  position: absolute;
  width: 154px;
  height: 170px;
  top: 14px;
  left: 33px;
  mix-blend-mode: multiply;
`;

const Shadow21 = styled.img`
  position: absolute;
  width: 325px;
  height: 111px;
  top: 228px;
  left: 113px;
  mix-blend-mode: multiply;
`;

const Shadow15 = styled.img`
  position: absolute;
  width: 184px;
  height: 82px;
  top: 219px;
  left: 31px;
  mix-blend-mode: multiply;
`;

const AnimalCrossingNewHorizonsCharacterA = styled.img`
  position: absolute;
  width: 281px;
  height: 282px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Minecraft = styled.img`
  position: absolute;
  width: 239px;
  height: 336px;
  top: 11px;
  left: 152px;
  object-fit: cover;
`;

const Page4 = styled.div`
  height: 1137px;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  min-width: 704px;
`;

const OverlapGroup6 = styled.div`
  width: 700px;
  height: 1154px;
  position: relative;
  margin-bottom: -17.47px;
`;

const BG4 = styled.div`
  position: absolute;
  width: 700px;
  height: 1137px;
  top: 0;
  left: 0;
  background-color: var(--white);
`;

const OverlapGroup5 = styled.div`
  position: absolute;
  width: 331px;
  height: 654px;
  top: 398px;
  left: 77px;
`;

const Shadow3 = styled.div`
  position: absolute;
  width: 318px;
  height: 647px;
  top: 7px;
  left: 13px;
  background-color: var(--tolopea);
  border-radius: 77px;
  filter: blur(20px);
  opacity: 0.2;
`;

const Mockup4 = styled.img`
  position: absolute;
  width: 326px;
  height: 649px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const OverlapGroup13 = styled.div`
  position: absolute;
  width: 332px;
  height: 357px;
  top: 797px;
  left: 336px;
`;

const Shadow16 = styled.img`
  position: absolute;
  width: 253px;
  height: 106px;
  top: 251px;
  left: 78px;
  mix-blend-mode: multiply;
`;

const AnimalCrossingNewHorizonsCharacterA1 = styled.img`
  position: absolute;
  width: 332px;
  height: 333px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const OverlapGroup22 = styled.div`
  position: absolute;
  width: 441px;
  height: 224px;
  top: 609px;
  left: 238px;
`;

const Vector = styled.img`
  position: absolute;
  width: 318px;
  height: 107px;
  top: 117px;
  left: 0;
`;

const Vector1 = styled.img`
  position: absolute;
  width: 402px;
  height: 122px;
  top: 0;
  left: 39px;
`;

const Text4 = styled.p`
  ${NanumsquareotfBoldWhite13px}
  position: absolute;
  width: 229px;
  top: 135px;
  left: 44px;
  letter-spacing: -0.65px;
  line-height: 22px;
`;

const Text5 = styled.p`
  ${NanumsquareotfBoldSonicSilver13px}
  position: absolute;
  width: 314px;
  top: 19px;
  left: 72px;
  letter-spacing: -0.65px;
  line-height: 20px;
`;

const Text6 = styled.div`
  ${NotosansNormalSonicSilver29px}
  position: absolute;
  width: 592px;
  top: 211px;
  left: 54px;
  letter-spacing: -1.45px;
  line-height: 40px;
`;

const Text7 = styled.div`
  ${NotosansSemiBoldEerieBlack37px}
  position: absolute;
  width: 594px;
  top: 83px;
  left: 54px;
  letter-spacing: 0;
`;

const OverlapGroupContainer2 = styled.div`
  width: 702px;
  height: 1516px;
  z-index: 1;
  position: relative;
`;

const OverlapGroup41 = styled.div`
  position: absolute;
  height: 1517px;
  top: 0;
  left: 0;
  display: flex;
  padding: 346.3px 20.9px;
  align-items: flex-start;
  min-width: 700px;
  background-size: 100% 100%;
`;

const OverlapGroup31 = styled.div`
  width: 658px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 62.8px 35.9px;
  align-items: center;
  min-height: 502px;
  background-color: var(--white-4);
  border-radius: 70px;
  box-shadow: 0px 30px 30px #653afd4c;
`;

const SNSCrofful = styled.div`
  ${NotosansNormalSonicSilver30px}
  width: 532px;
  margin-bottom: -28px;
  min-height: 42px;
  margin-right: 0;
  text-align: center;
  letter-spacing: -1.5px;
  line-height: 70px;
  white-space: nowrap;
`;

const Text3 = styled.h1`
  ${NotosansExtraBoldEerieBlack41px}
  width: 586px;
  margin-bottom: -36px;
  min-height: 48px;
  align-self: flex-start;
  margin-top: 11px;
  text-align: center;
  letter-spacing: 0;
  line-height: 84px;
  white-space: nowrap;
`;

const OverlapGroup23 = styled.div`
  height: 73px;
  margin-top: 44px;
  margin-left: 0;
  display: flex;
  padding: 20.3px 22.9px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 540px;
  background-size: 100% 100%;
`;

const BzS6nH = styled.input`
  ${NotosansNormalMountainMist25px}
  width: 494px;
  height: 32px;
  background-color: transparent;
  letter-spacing: 0;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #99999999;
  }
`;

const View2 = styled.div`
  margin-top: 36px;
  margin-left: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 361px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const OverlapGroup8 = styled.div`
  height: 72px;
  display: flex;
  padding: 20.9px 62.8px;
  align-items: flex-start;
  min-width: 359px;
  background-color: var(--electric-violet);
  border-radius: 90px;
  box-shadow: 0px 15px 20px #653afd33;
`;

const Text1 = styled.div`
  ${RobotoBoldWhite27px}
  width: 233px;
  min-height: 24px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup51 = styled.div`
  position: absolute;
  height: 203px;
  top: 1027px;
  left: 0;
  display: flex;
  padding: 60.4px 70px;
  align-items: flex-start;
  min-width: 700px;
  background-color: var(--minsk);
  box-shadow: 0px 15px 20px #653afd33;
`;

const CroffulgmailcomCo = styled.div`
  ${NotosansBoldBlueViolet21px}
  width: 559px;
  min-height: 60px;
  text-align: center;
  letter-spacing: 0;
  line-height: 32px;
`;

export default Mobile;
