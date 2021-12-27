import React from "react";
import FixedBar from "../FixedBar";
import Page2 from "../Page2";
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
import "./Extract.css";

function Extract(props) {
  const {
    overlapGroup9,
    crofful2,
    spanText,
    spanText2,
    spanText3,
    text12,
    text9,
    character,
    text8,
    shadow13,
    butterfly,
    shadow12,
    maskGroup,
    crofful,
    mockup3,
    maskGroup2,
    shadow1,
    shadow2,
    line,
    shadow14,
    mockup1,
    shadow15,
    grad,
    shadow16,
    mockup2,
    text4,
    text5,
    sns,
    text10,
    overlapGroup3,
    text11,
    text6,
    view,
    inputType,
    inputPlaceholder,
    text7,
    spanText4,
    spanText5,
    fixedBarProps,
    page2Props,
    viewProps,
  } = props;

  return (
    <form className="extract screen" name="form2" action="form2" method="post">
      <FixedBar crofful={fixedBarProps.crofful} className={fixedBarProps.className} />
      <Page1>
        <OverlapGroup9 style={{ backgroundImage: `url(${overlapGroup9})` }}>
          <Crofful src={crofful2} />
          <OverlapGroup1>
            <SNS>
              <Span02>{spanText}</Span02>
              <Span12>{spanText2}</Span12>
              <Span02>{spanText3}</Span02>
            </SNS>
            <Rectangle35></Rectangle35>
          </OverlapGroup1>
          <View1>
            <OverlapGroup>
              <Shadow></Shadow>
              <Button></Button>
              <Text24>{text12}</Text24>
            </OverlapGroup>
          </View1>
        </OverlapGroup9>
      </Page1>
      <Page2
        mockup1={page2Props.mockup1}
        shadow1={page2Props.shadow1}
        shadow12={page2Props.shadow12}
        character={page2Props.character}
        butterfly={page2Props.butterfly}
        className={page2Props.className}
      />
      <Page3>
        <OverlapGroup6>
          <Text21>{text9}</Text21>
          <OverlapGroupContainer>
            <OverlapGroup5>
              <OverlapGroup2>
                <Shadow1></Shadow1>
                <Mockup3 src={character} />
              </OverlapGroup2>
              <Text20>{text8}</Text20>
              <OverlapGroup3>
                <Shadow11 src={shadow13} />
                <Shadow12 src={butterfly} />
                <Shadow13 src={shadow12} />
                <MaskGroup src={maskGroup} />
                <MaskGroup1 src={crofful} />
              </OverlapGroup3>
            </OverlapGroup5>
            <OverlapGroupContainer1>
              <OverlapGroup11>
                <Shadow2></Shadow2>
                <Mockup3 src={mockup3} />
              </OverlapGroup11>
              <OverlapGroup21>
                <Shadow14 src={maskGroup2} />
                <Shadow21 src={shadow1} />
                <Shadow15 src={shadow2} />
                <AnimalCrossingNewHorizonsCharacterA src={line} />
                <Minecraft src={shadow14} />
              </OverlapGroup21>
            </OverlapGroupContainer1>
          </OverlapGroupContainer>
        </OverlapGroup6>
      </Page3>
      <Page4>
        <OverlapGroup51>
          <BG4></BG4>
          <OverlapGroup4>
            <Shadow3></Shadow3>
            <Mockup4 src={mockup1} />
          </OverlapGroup4>
          <OverlapGroup12>
            <Shadow16 src={shadow15} />
            <AnimalCrossingNewHorizonsCharacterA1 src={grad} />
          </OverlapGroup12>
          <OverlapGroup22>
            <Vector src={shadow16} />
            <Vector1 src={mockup2} />
            <Text16>{text4}</Text16>
            <Text17>{text5}</Text17>
          </OverlapGroup22>
          <Text18>{sns}</Text18>
          <Text19>{text10}</Text19>
        </OverlapGroup51>
      </Page4>
      <SubmitPage>
        <OverlapGroup31 style={{ backgroundImage: `url(${overlapGroup3})` }}>
          <OverlapGroup23>
            <SNSCrofful>{text11}</SNSCrofful>
            <Text15>{text6}</Text15>
            <View2 style={{ backgroundImage: `url(${view})` }}>
              <ZBhiME name="이메일을입력해주세요" placeholder={inputPlaceholder} type={inputType} />
            </View2>
            <View check={viewProps.check} chack={viewProps.chack} className={viewProps.className} />
            <a href="javascript:SubmitForm('form2')">
              <View3>
                <OverlapGroup7>
                  <Text13>{text7}</Text13>
                </OverlapGroup7>
              </View3>
            </a>
          </OverlapGroup23>
        </OverlapGroup31>
      </SubmitPage>
      <CopyrightPage>
        <OverlapGroup41>
          <CroffulgmailcomCo>
            <span className="notosans-bold-blue-violet-21px">{spanText4}</span>
            <span className="notosans-normal-blue-violet-21px">{spanText5}</span>
          </CroffulgmailcomCo>
        </OverlapGroup41>
      </CopyrightPage>
    </form>
  );
}

const Page1 = styled.div`
  z-index: 6;
  margin-left: 2px;
  height: 1635.7259521484375px;
  align-self: center;
  margin-top: 130px;
  display: flex;
  padding: 0 0px;
  align-items: flex-start;
  min-width: 702.000244140625px;
`;

const OverlapGroup9 = styled.div`
  width: 700px;
  margin-top: -0.14px;
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

const Span02 = styled.span`
  ${NanumsquareotfExtraExtraBoldWhite32}
  letter-spacing: 0.51px;
`;

const Span12 = styled.span`
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

const Text24 = styled.div`
  ${RobotoBoldWhite35px}
  position: absolute;
  width: 281px;
  top: 31px;
  left: 39px;
  text-align: center;
  letter-spacing: 0;
`;

const Page3 = styled.div`
  z-index: 4;
  margin-right: -4px;
  flex: 1;
  max-height: 1458.033447265625px;
  display: flex;
  align-items: flex-start;
  min-width: calc(100% + 4px);
`;

const OverlapGroup6 = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  padding: 15.4px 2.4px;
  align-items: flex-end;
  min-height: 1458px;
  background-color: var(--magnolia);
`;

const Text21 = styled.div`
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

const OverlapGroup5 = styled.div`
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

const Text20 = styled.div`
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
  height: 272px;
  top: 0;
  left: 145px;
`;

const MaskGroup1 = styled.img`
  position: absolute;
  width: 152px;
  height: 293px;
  top: 14px;
  left: 20px;
`;

const OverlapGroupContainer1 = styled.div`
  position: absolute;
  width: 666px;
  height: 729px;
  top: 510px;
  left: 0;
`;

const OverlapGroup11 = styled.div`
  position: absolute;
  width: 315px;
  height: 622px;
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
  height: 112px;
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
  z-index: 3;
  margin-left: 4px;
  height: 1136.751708984375px;
  align-self: center;
  display: flex;
  align-items: flex-end;
  min-width: 703.999755859375px;
`;

const OverlapGroup51 = styled.div`
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

const OverlapGroup4 = styled.div`
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

const OverlapGroup12 = styled.div`
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
  height: 332px;
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
  height: 108px;
  top: 116px;
  left: 0;
`;

const Vector1 = styled.img`
  position: absolute;
  width: 402px;
  height: 122px;
  top: 0;
  left: 39px;
`;

const Text16 = styled.p`
  ${NanumsquareotfBoldWhite13px}
  position: absolute;
  width: 229px;
  top: 135px;
  left: 44px;
  letter-spacing: -0.65px;
  line-height: 22px;
`;

const Text17 = styled.p`
  ${NanumsquareotfBoldSonicSilver13px}
  position: absolute;
  width: 314px;
  top: 19px;
  left: 72px;
  letter-spacing: -0.65px;
  line-height: 20px;
`;

const Text18 = styled.div`
  ${NotosansNormalSonicSilver29px}
  position: absolute;
  width: 592px;
  top: 211px;
  left: 54px;
  letter-spacing: -1.45px;
  line-height: 40px;
`;

const Text19 = styled.div`
  ${NotosansSemiBoldEerieBlack37px}
  position: absolute;
  width: 594px;
  top: 83px;
  left: 54px;
  letter-spacing: 0;
`;

const SubmitPage = styled.div`
  z-index: 1;
  height: 1516.0679931640625px;
  margin-top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 699.9998779296875px;
`;

const OverlapGroup31 = styled.div`
  height: 1517px;
  margin-top: -0.47px;
  display: flex;
  padding: 346.3px 20.9px;
  align-items: flex-start;
  min-width: 700px;
  background-size: 100% 100%;
`;

const OverlapGroup23 = styled.div`
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

const Text15 = styled.div`
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

const View2 = styled.div`
  width: 540px;
  height: 72px;
  margin-top: 45px;
  margin-left: 0;
  display: flex;
  justify-content: center;
  background-size: 100% 100%;
`;

const ZBhiME = styled.input`
  ${NotosansNormalMountainMist25px}
  margin-top: 19.7px;
  width: 494.1878662109375px;
  height: 32.307682037353516px;
  margin-left: -2px;
  background-color: transparent;
  letter-spacing: 0;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #99999999;
  }
`;

const View3 = styled.div`
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

const OverlapGroup7 = styled.div`
  height: 72px;
  display: flex;
  padding: 20.9px 62.8px;
  align-items: flex-start;
  min-width: 359px;
  background-color: var(--electric-violet);
  border-radius: 90px;
  box-shadow: 0px 15px 20px #653afd33;
`;

const Text13 = styled.div`
  ${RobotoBoldWhite27px}
  width: 233px;
  min-height: 24px;
  text-align: center;
  letter-spacing: 0;
`;

const CopyrightPage = styled.div`
  z-index: 2;
  margin-right: -2px;
  flex: 1;
  max-height: 203.044921875px;
  margin-top: 168.2px;
  display: flex;
  align-items: flex-start;
  min-width: calc(100% + 2px);
`;

const OverlapGroup41 = styled.div`
  height: 203px;
  display: flex;
  padding: 51px 70px;
  align-items: flex-start;
  min-width: 700px;
  background-color: var(--minsk);
  box-shadow: 0px 15px 20px #653afd33;
`;

const CroffulgmailcomCo = styled.div`
  ${NotosansBoldBlueViolet21px}
  width: 559px;
  min-height: 25px;
  text-align: center;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

export default Extract;
