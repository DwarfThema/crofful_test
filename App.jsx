
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Mobile from "./components/Mobile";
import Extract from "./components/Extract";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/mobile">
          <Mobile {...mobileData} />
        </Route>
        <Route path="/:path(|extract)">
          <Extract {...extractData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const page2Data = {
    mockup1: "/img/mockup1-1@1x.png",
    shadow1: "/img/shadow1-14@2x.png",
    shadow12: "/img/shadow1-15@2x.png",
    character: "/img/character-1@2x.png",
    butterfly: "/img/butterfly-1@2x.png",
};

const fixedBarData = {
    crofful: "/img/crofful-3@2x.png",
};

const viewData = {
    check: "/img/check-1@2x.png",
    chack: "/img/chack-1@2x.png",
};

const mobileData = {
    overlapGroup9: "/img/bg1@1x.png",
    crofful: "/img/crofful-2@1x.png",
    spanText: "게임",
    spanText2: " 속 부캐들을 위한 ",
    spanText3: "SNS",
    text12: "오픈 알림 신청하기",
    text9: <>내 피드를 공유하고<br />다양한 유저들의 게시물을 확인하세요</>,
    mockup3: "/img/mockup3-1@1x.png",
    text8: "피드를 둘러보며 보며 자연스럽게 나와 취향이 비슷한 유저들과 만나 함께 이야기 나눌 수 있어요.",
    shadow1: "/img/shadow1-11@2x.png",
    shadow12: "/img/shadow1-12@2x.png",
    shadow13: "/img/shadow1-13@2x.png",
    maskGroup: "/img/mask-group-2@2x.png",
    maskGroup2: "/img/mask-group-3@2x.png",
    mockup2: "/img/mockup2-1@1x.png",
    shadow14: "/img/shadow1-9@2x.png",
    shadow2: "/img/shadow2-1@2x.png",
    shadow15: "/img/shadow1-10@2x.png",
    animal_Crossing_New_Horizons__Chara: "/img/animal-crossing-new-horizons---character-artwork-02-2-1@2x.png",
    minecraft: "/img/minecraft-1@2x.png",
    mockup4: "/img/mockup4-1@1x.png",
    shadow16: "/img/shadow1-8@2x.png",
    animal_Crossing_New_Horizons__Chara2: "/img/animal-crossing-new-horizons---character-artwork-08-1-1@2x.png",
    vector2: "/img/vector-3@2x.png",
    text4: <>항상 응원해주셔서 감사해요❣😊<br />제 디자인을 좋아해주셔서 기분이  좋네요ㅎㅎ</>,
    text5: <>이번에 크리스마스 섬 꾸미신거 진짜 예뻐요!!!👍👍<br />마이디자인도 올려주시는 것마다 취향저격 당하고 있습니당 💕<br />완전 팬이에요ㅎㅎ</>,
    text6: "내가 만든 창작물을 팔로워들과 공유해요. 다운 받은 창작물을 적용하고 리뷰와 감사인사를 남겨요. 내가 좋아하는 크리에이터와 소통하고 응원할 수 있어요.",
    text7: <>내가 만든 창작물을 공유하고<br />크리에이터와 소통해요</>,
    overlapGroup4: "/img/bg5-1@1x.png",
    snsCrofful: "게임 속 부캐들의 SNS, Crofful",
    text3: "오픈 소식을 가장 먼저 받아보세요!",
    overlapGroup2: "/img/inputbox-1@1x.png",
    inputType: "email",
    inputPlaceholder: "이메일을 입력해주세요.",
    text1: "오픈 알림 신청하기",
    spanText4: <>Crofful@gmail.com<br /></>,
    spanText5: "Copyright ⓒ 2021 Crofful. All Right Reserved.",
    page2Props: page2Data,
    fixedBarProps: fixedBarData,
    viewProps: viewData,
};

const fixedBar2Data = {
    crofful: "/img/crofful-1@2x.png",
    className: "fixed-bar-1",
};

const page22Data = {
    mockup1: "/img/mockup1@1x.png",
    shadow1: "/img/shadow1-6@2x.png",
    shadow12: "/img/shadow1-7@2x.png",
    character: "/img/character@2x.png",
    butterfly: "/img/butterfly@2x.png",
    className: "page2-1",
};

const view2Data = {
    check: "/img/check@2x.png",
    chack: "/img/chack@2x.png",
    className: "view-3",
};

const extractData = {
    overlapGroup9: "/img/bg1@1x.png",
    crofful2: "/img/crofful@1x.png",
    spanText: "게임",
    spanText2: " 속 부캐들을 위한 ",
    spanText3: "SNS",
    text12: "오픈 알림 신청하기",
    text9: <>내 피드를 공유하고<br />다양한 유저들의 게시물을 확인하세요</>,
    character: "/img/mockup3@1x.png",
    text8: "피드를 둘러보며 보며 자연스럽게 나와 취향이 비슷한 유저들과 만나 함께 이야기 나눌 수 있어요.",
    shadow13: "/img/shadow1-3@2x.png",
    butterfly: "/img/shadow1-4@2x.png",
    shadow12: "/img/shadow1-5@2x.png",
    maskGroup: "/img/mask-group@2x.png",
    crofful: "/img/mask-group-1@2x.png",
    mockup3: "/img/mockup2@1x.png",
    maskGroup2: "/img/shadow1-1@2x.png",
    shadow1: "/img/shadow2@2x.png",
    shadow2: "/img/shadow1-2@2x.png",
    line: "/img/animal-crossing-new-horizons---character-artwork-02-2@2x.png",
    shadow14: "/img/minecraft@2x.png",
    mockup1: "/img/mockup4@1x.png",
    shadow15: "/img/shadow1@2x.png",
    grad: "/img/animal-crossing-new-horizons---character-artwork-08-1@2x.png",
    shadow16: "/img/vector@2x.png",
    mockup2: "/img/vector-1@2x.png",
    text4: <>항상 응원해주셔서 감사해요❣😊<br />제 디자인을 좋아해주셔서 기분이  좋네요ㅎㅎ</>,
    text5: <>이번에 크리스마스 섬 꾸미신거 진짜 예뻐요!!!👍👍<br />마이디자인도 올려주시는 것마다 취향저격 당하고 있습니당 💕<br />완전 팬이에요ㅎㅎ</>,
    sns: "내가 만든 창작물을 팔로워들과 공유해요. 다운 받은 창작물을 적용하고 리뷰와 감사인사를 남겨요. 내가 좋아하는 크리에이터와 소통하고 응원할 수 있어요.",
    text10: <>내가 만든 창작물을 공유하고<br />크리에이터와 소통해요</>,
    overlapGroup3: "/img/bg5@1x.png",
    text11: "게임 속 부캐들의 SNS, Crofful",
    text6: "오픈 소식을 가장 먼저 받아보세요!",
    view: "/img/inputbox@1x.png",
    inputType: "email",
    inputPlaceholder: "이메일을 입력해주세요.",
    text7: "오픈 알림 신청하기",
    spanText4: <>Crofful@gmail.com<br /></>,
    spanText5: "Copyright ⓒ 2021 Crofful. All Right Reserved.",
    fixedBarProps: fixedBar2Data,
    page2Props: page22Data,
    viewProps: view2Data,
};

