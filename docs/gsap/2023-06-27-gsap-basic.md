---
title: "[범쌤] 웹 애니메이션을 위한 GSAP 가이드 Part.01"
---

# Part.01: GSAP Basic

[강의보러가기](https://www.inflearn.com/course/%EC%9B%B9-%EC%95%A0%EB%8B%88%EB%A7%A4%EC%9D%B4%EC%85%98-gsap-1/dashboard)


## Tweening Basic

### GSAP Object

GSAP 엔진을 이용해 제어할 수 있는 속성들

* Create animations
  * Create animations 파트에서는 크게 Tweens 과 Timelines 두가지의 오브젝트를 가지고 있다.
* Configure settings
* Register plugins, eases, and effects
* Global control over all animations

#### 1. Tweens

##### 👉 실습 예제 : <https://codepen.io/byahram/pen/OJamZoE>

Tweens는 모든 애니메이션이 작동하는 역할을 말하며,  ( **high-performance property setter**  )

대상 ( 애니메이션을 적용할 객체) 에게 duration, animation-properties 정보를 입력하는 하나의 단위로 해석한다.

Tween은 3가지의 methods를 가지고 애니메이션을 만들 수 있으며 각각의 트윈엔 기본 규칙으로 target과 vars object 옵션을 가진다.

```javascript
// gsap.to()
gsap.to('.elem',{duration:1,x:100,y:100,rotation:45});
```

```javascript
// gsap.from()
gsap.from('.elem',{duration:1,x:100,y:100,rotation:45});
```

```javascript
// gsap.fromTo()
gsap.fromTo('.elem',
{duration:1,x:-100,y:-100,rotation:-45},
{duration:1,x:100,y:100,rotation:45});
```

#### 2. Staggers

##### 👉 실습 예제 : <https://codepen.io/byahram/pen/XWyRqxb>

```javascript
// stagger 기능을 사용하면 각 개체의 애니메이션의 시작 사이에 약간의 지연시간을 넣어 보다 쉽게 제어할 수 있다.
gsap.from(".box", {duration: 2, scale: 0.5, opacity: 0, delay: 0.5, stagger: 0.2, ease: "elastic", force3D: true});
```

#### 3. Timeline

타임라인을 사용하면 복잡한 시퀀스의 애니메이션을 아주 간단하게 만들 수 있다.

```javascript
var tl = gsap.timeline();

tl.to(".green", {duration: 1, x: 200});
tl.to(".orange", {duration: 1, x: 200, scale: 0.2});
tl.to(".grey", {duration: 1, x: 200, scale: 2, y: 20});
```

#### 4. Controlling Animations

##### 👉 실습 예제 : <https://codepen.io/byahram/pen/oNQWyxo>

tween을 컨트롤 할 수 있는 method를 제공한다.

### 기초 트윈

#### 👉 참고 문서 : <https://gsap.com/docs/v3/GSAP/gsap.to()/?ref=6234>
#### 👉 참고 문서 : <https://gsap.com/docs/v3/GSAP/gsap.defaults()/?ref=6234>
#### 👉 실습 예제 : <https://codepen.io/byahram/pen/MWzmGdW>

```javascript
// to() 트윈의 기본구문
// 재생속도를 정하지 않았다면 gsap은 기본값인 0.5s(500ms)를 사용한다.
gsap.to(’elem’,{x:400})

// 해당 명령어를 통해 기본 지속 시간을 변경할 수 있다.
gsap.defaults({duration:1});
```

#### Short Codes Properties

| GSPA | CSS |
|--|--|
| x: 100 | transform: translateX(100px) |
| y: 100 | transform: translateY(100px) |
| rotation: 360 | transform: rotate(360deg) |
| rotationX: 360 | transform: rotateX(360deg) |
| rotationY: 360 | transform: rotateY(360deg) |
| skewX: 45 | transform: skewX(45deg) |
| skewY: 45 | transform: skewY(45deg) |
| scale: 2 | transform: scale(2, 2) |
| scaleX: 2 | transform: scaleX(2) |
| scaleY: 2 | transform: scaleY(2) |
| xPercent: -50 | transform: translateX(-50%) |
| yPercent: -50 | transform: translateY(-50%) |
| x: “50%” |  |

#### GSAP은 사용자가 던진 모든 숫자 속성에 대해 애니메이션을 적용할 수 있다.
1. width and height
2. backgroundColor ***hyphenated values need to be camelCase**
3. color
4. padding
5. left and top (must set position to relative, absolute, or fixed)
6. vh and vw

### from()과 fromTo()

#### 👉 실습 예제 : <https://codepen.io/byahram/pen/MWzmGdW>

```javascript
// gsap.from() 메서드는 지정한 값(위치)에서 부터 원래의 값(위치)으로 애니메이션 된다.
gsap.from('.orange',{x:400, y:400});
```

```javascript
// gsap.fromTo()는 지정한 값에서 지정한 값으로 애니메이션을 적용한다.
// 아래 코드에 사용된 2개의 객체는 from vars와 to vars로 작동된다.

gsap.fromTo('.orange', {x:400, y:400}, {x:200, y:200});
```

### 지연과 반복

#### 👉 실습 예제 : <https://codepen.io/byahram/pen/LYXyrVj>

스페셜 속성은 애니메이션이 실행되는 방식과 수행해야 하는 작업을 정의한다.

특수 속성은 애니메이션 되지 않는다.

- delay : 애니메이션이 시작되기 전에 지연시간을 지정합니다.
- repeat : 애니메이션이 몇번 반복되어야 하는지를 지정합니다.
  * 무한 반복은 repeat: -1 을 설정하면 애니메이션이 무기한 반복됩니다.
- yoyo : `true` 로 설정하면 애니메이션이 앞뒤로 재생됩니다.
  * yoyo 속성은 repeat 설정이 들어있어야 사용가능합니다.
- repeatDelay : 각 반복 사이에 발생하는 지연시간을 지정합니다.

### 가속도

#### 👉 참고 문서 : <https://gsap.com/docs/v3/Eases/?ref=6234>
#### 👉 실습 예제 : <https://codepen.io/byahram/pen/WNYjyQB>

ease는 애니메이션이 재생될 때의 변경 속도를 제어한다.

간단한 사용에서 ease는 애니메이션이 느려지거나 빨라지는지에 대한 여부를 제어한다.

가속도 제어는 ease를 기본값(default)로 가지며, 커브가 가파를수록 더 급격한 변화를 만들 수 있다.

- **`ease:”bounce”`** 애니메이션이 빠질 때 바운스 됩니다.
- **`ease:”bounce.in”`** 애니메이션이 들어올 때 바운스 됩니다.
- **`ease:”bounce.inOut”`** 애니메이션이 들어오고 빠질 때 바운스 됩니다.

```
💡 곡선 규칙 
Steep curve = fast rate of change
Flat curve = slow rate of change
```

### 다중 요소 제어하기

#### 👉 실습 예제 : <https://codepen.io/byahram/pen/VwVbdeQ>

stagger속성을 사용하면 단일 트윈에서 여러 대상의 시작 시간을 오프셋 설정할 수 있다.

GSAP3에서는 GSAP2의 staggerTo(), staggerFrom(), stagger-FromTo() 메서드가 더 이상 필요하지 않다.

```javascript
// 각 이미지는 이전 이미지가 시작된 후 0.2초 후에 시작된다.
gsap.to(".stage .box", {y:-100, stagger:0.2});
```

```javascript
/**
 * stagger 객체를 사용하면 stagger가 시작되는 위치와 타이밍이 분산되는 방식을 더 잘 제어할 수 있다.
 */
gsap.to(".stage .box", {y:-50, stagger:{
  each:0.2,
  from:"end"
  }
});

/**
 * 1. each :0.2 는 각 애니메이션의 시작 사이에 0.2초가 있음을 의미합니다.
 * 2. amount:0.2 는 모든 애니메이션이 0.2초 이내에 시작됩니다.
 */
```

```
💡 from 으로 받을 수 있는 값
: first, end, center, edges
```

### 트윈 컨트롤

#### 👉 참고 문서 1 : <https://greensock.com/docs/v3/GSAP/Tween/play()>
#### 👉 참고 문서 2 : <https://greensock.com/docs/v3/GSAP/Tween/pause()>
#### 👉 참고 문서 3 : <https://greensock.com/docs/v3/GSAP/Tween/resume()>
#### 👉 참고 문서 4 : <https://greensock.com/docs/v3/GSAP/Tween/reverse()>
#### 👉 참고 문서 5 : <https://greensock.com/docs/v3/GSAP/Tween/restart()>
#### 👉 실습 예제 : <https://codepen.io/byahram/pen/RwqVJRJ?editors=1111>

```javascript
/**
 * Tween에는 재생을 제어하는 여러 가지 방법들이 있다.
 * 트윈을 제어하려면 이를 참조할 방법이 필요한데
 * 아래의 코드처럼 트윈을 참조하는 변수를 설정한다.
 */
let tween = gsap.to(".box", {x:600});
```

```javascript
/**
 * 트윈치 자동으로 재생되지 않도록 하려면 paused 속성을 true로 설정하여 처음 자동재생을 막을 수 있다.
 */
let tween = gsap.to(".box", {x:600, paused:true});
```

```javascript
/**
 * 해당 트윈을 재생하려면 나중에 다음을 호출할 수 있다.
 */
tween.play();
tween.pause();
tween.resume();
tween.reverse();
tween.restart();
```

### from() 트윔의 버그(?)

#### 👉 참고 문서 : <https://gsap.com/docs/v3/GSAP/gsap.getProperty()/>
#### 👉 실습 예제 : <https://codepen.io/byahram/pen/jOQmKMN?editors=1111>

```javascript
// 에러의 원인을 확인하기 위해 gsap의 getProperty 메서드를 이용해 확인한다.
gsap.getProperty(bg,'scale')

let getter = gsap.getProperty(bg);
var x = getter("width"),
    y = getter("height", "vw"); //in vw units
```

### GSAP 공식 문서

#### 👉 참고 문서 : <https://gsap.com/docs/v3/>

<br>

## Timelines

### 타임라인이 중요한 이유

#### 👉 실습 예제 : <https://codepen.io/kindtigerr/pen/JjpgWGE>

### 기초 타임라인

#### 👉 실습 예제 : <https://codepen.io/byahram/pen/LYXyrbO>

타임라인은 gsap.timeline()으로 생성된다.

타임라인은 모든 트윈을 자연스럽게 순서대로 재생처리한다.

```
💡 대상의 크기만큼 이동할 경우

px 값을 입력하기 보다는 퍼센트 단위를 입력하는게 좋다.

x: “100%”
`xPercent(100)   =  transform:translateX(100%)`
`yPercent(100)   =  transform:translateY(100%)`
```

```javascript
gsap.timeline()
  .from('.sun',{duration:1,opacity:0,x:50,y:50})
  .from('.gress',{duration:1,opacity:0,y:100,stagger:0.2})
  .from('.bird',{duration:1,opacity:0,y:100})
  .from('.music',{duration:1,opacity:0,x:100,y:100})
```

### Position Parameter 시각적 효과

#### 👉 참고 문서 : <https://gsap.com/docs/v3/GSAP/gsap.timeline()/>
#### 👉 실습 예제 : <https://codepen.io/byahram/pen/XWyRYpN?editors=0010>

타임라인 위치 매개변수 설정

위치 매개변수를 사용하면 타임라인에서 트윈의 시작 시간을 오프셋 할 수 있다.

```javascript
const tl = gsap.timeline();
  tl.to(object, {y:300}, "+=1")  // 이전 트윈 종료 후 1초 뒤에 시작
  tl.to(object, {x:300}, "-=1")  // 이전 트윈 종료 1초 전에 시작
  tl.to(object, {rotation:90}, "<")  // 이전 트윈 시작될 때 동시에 실행
  tl.to(object, {opacity:0.5}, "<1") // 이전 트윈 시작 된 후 1초 뒤에 실행
  tl.to(object2, {x:200}, 1) // 타임라인 1초에 실행 
```

### 기초 타임라인 포지션

#### 👉 실습 예제 : <https://codepen.io/byahram/pen/LYXyrbO>

이전에 만들었던 Basic Timeline 예제로 돌아가 몇가지 위치 매개변수를 추가하고 작동 방식을 확인한다.

* .sun 이 등장후 1초 뒤에 .gress가 등장하도록 하기
* .bird가 애니메이션을 시작할 때 .music 요소가 동시에 시작되도록 하기

### 타임라인의 컨트롤과 라벨링

#### 👉 실습 예제 : <https://codepen.io/byahram/pen/mdQmKRG?editors=0110>

GSAP은 타임라인에도 트윈과 동일하게 애니메이션을 제어할 수 있는 방법을 제공한다. 

ex) `play()`

Label을 사용하면 타임라인에서 특정 지점으로 이동할 수 있다.

`add()` 메서드를 사용하여 타임라인에 Label을 추가할 수 있다.

<br>

## Buttons Animation Effects

### 단일 메뉴 효과

#### 👉 참고 문서 : <https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector>
#### 👉 참고 문서 : <https://developer.mozilla.org/ko/docs/Web/API/MouseEvent>
#### 👉 실습 예제 : <https://codepen.io/byahram/pen/LYXjqVN>

GSAP을 사용하여 paused된 애니메이션 객체(Tween or Timeline)를 생성합니다. 

Javascript의 Mouse Event를 사용해 (mouseenter, mouseleave) 애니메이션 객체에 `play()` 또는 `reverse()`를 적용합니다.

단일 대상의 색상이나 크기를 변경하는것과 같이 간단한 애니메이션을 적용하려면 CSS만 있어도 충분히 원하는 결과를 얻을 수 있습니다.

그러나 정확한 타이밍이 필요한 여러 객체들을 컨트롤 하거나 재생,되돌아가기,속도,가속도 설정과 같은 작업을 수행하기 위해선 GSAP의 애니메이션 코드가 훨씬 더 많은 유연성을 제공합니다.

### 다중 메뉴 효과

#### 👉 참고 문서 : <https://developer.mozilla.org/ko/docs/Web/API/NodeList>
#### 👉 참고 문서 : <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach>
#### 👉 실습 예제 : <https://codepen.io/byahram/pen/PoxKVzE>

forEach() 루프를 만들어 반복문 안에 있는 동안 각각의 타임라인에 play()와 reverse() 메서드를 마우스 이벤트를 통해 바인딩 한다.

### Hover Pulse Animation

#### 👉 실습 예제 : <https://codepen.io/byahram/pen/YzRxBNV>

부드럽게 멈추거나 다시 반복되는 애니메이션의 대한 이슈는 GreenSock 포럼과 Stackoverflow에 자주 등장하는 주제이다.

이러한 문제를 해결하기 위해 아래의 다양한 방법들이 있다. 이러한 방법들을 이용하면 보다 쉽게 애니메이션 이슈 처리가 가능하다. (추후에 Advanced 과정)
* Callback with custom logic
* tweening progress() or totalProgress()
* overwrite modes

<br>

## Final Project

### 👉 Final Project 실습 예제 : <https://codepen.io/byahram/pen/KKroVOg>

### 프로젝트 리뷰

* HTML Structure
* Basic Animation
* Timeline Defaults
* GSDevTools
* Fine-turning
* Un-styled Content

### 기초 애니메이션

```javascript
// 애니메이션 시퀀스를 설정
const tl = gsap.timeline()

tl.from('.stage',{opacity:0})
  .from('h1',{x:-50,opacity:0})
  .from('h2',{x:50,opacity:0})
  .from('p',{x:-50,opacity:0})
  .from('button',{y:30,opacity:0})
  .from('.planet > img',{scale:0,stagger:0.1,opacity:0})
```

### 타임라인 기본값 설정

#### 👉 참고 문서 : <https://greensock.com/docs/v3/GSAP/gsap.defaults()>
#### 👉 참고 문서 : <https://greensock.com/docs/v3/GSAP/gsap.config()>

```javascript
// 타임라인 기본값을 사용하면 타임라인의 모든 트윈에 동일한 속성 값을 적용할 수 있다.
const tl = gsap.timeline({defaults:{opacity:0, ease:'back'}})

tl.from('.stage',{ease:'linear'})
  .from('h1',{x:-50})
  .from('h2',{x:50})
  .from('p',{x:-50})
  .from('button',{y:30})
  .from('.planet > img',{scale:0,stagger:0.1})
```

### GSDevTools

#### 👉 참고 문서 : <https://greensock.com/gsdevtools?ref=6234>

GSDevTools은 애니메이션을 scrub하고 속도를 변경해볼 수 있으며, 특정 구간 반복등 애니메이션 작업에 있어 굉장히 편리한 컨트롤러를 제공한다.

CodePen에서는 무료로 사용할 수 있다.

```javascript
GSDevTools.create();
```

### FOUC

#### 👉 참고 문서 : <https://ko.wikipedia.org/wiki/FOUC>
#### 👉 참고 문서 : <https://developer.mozilla.org/ko/docs/Web/CSS/visibility>

Flash of Un-styled Content (FOUC) 는 스타일이 지정되어 있지 않은 요소들이 화면에 랜더링 될 경우 콘텐츠의 깜빡이는 플래시 효과를 나타내는 용어이다.

예를 들어 웹폰트가 로드되기 전에 페이지 렌더링 상태에서 기본 글꼴이 나오고 적용된 웹폰트로 변경되는 것이다.

사용자에게 가장 빠른 로딩 경험을 제공 하기 위해 \<body> 태그 끝나기 전에 사용자 정의 스크립트를 로드하는 것이 좋고 또는 defer 명령어를 사용하는 것도 좋은 방법중 하나이다. 

또한, GSAP과 Javascript를 사용하여 FOUC를 제거할 수 있다.

**FOUC를 피하기 위한 단계별 수행 항목**
1. 보이지 않아야 할 요소를 감싸고 있는 전체 부모 요소에게 CSS visibility: hidden 속성 부여하기
2. GSAP의 Special 속성인 autoAlpha : 0 설정
3. 애니메이션 코드를 init() 함수로 래핑
4. 로드 이벤트 리스너를 사용하여 페이지가 로드 된 후 init() 함수를 호출

<br>

## Keyframes 

### 키프레임 파헤치기 chapter 1

#### 👉 참고 문서 : <https://codepen.io/GreenSock/pen/kQPqJo>
#### 👉 참고 문서 : <https://greensock.com/css-workflow/>
#### 👉 실습 예제 : <https://codepen.io/byahram/pen/yLQEbVe>

```javascript
const tl = gsap.timeline();

tl.to('.among',{
    keyframes:{
      "0%":{y:0},
      "25%":{y:0},
      "50%":{rotation:360,y:-100,ease:'sine.out'},
      "75%":{y:0,ease:'sine.in'},
      "100%":{x:500}
    },
  duration:2,
  stagger:0.2,
})
```

#### 👉 CSS Animation VS Javascript Animation
* <https://codepen.io/GreenSock/pen/DmgOQx>
* <https://css-tricks.com/myth-busting-css-animations-vs-javascript/>
* easeEach 를 사용하면 각 프레임 구간 마다 가속도를 재설정 할 수 있다.
  * CSS keyframes의 default ease값은 “power1.inOut” 이고 GSAP keyframes의 default ease값은 “power1.out”이다.
  * <https://codepen.io/GreenSock/pen/GRvLaQe/941b82d684b7fbf5303304d671e15ce2>
  * <https://www.figma.com/file/ajcEcCYdIHOVxB1Bj9PULZ/GSAP-keyfames?type=design&node-id=0-1&mode=design>

### 키프레임 파헤치기 chapter 2

GSAP의 키프레임을 사용하면 단일 트윈을 이용하므로 여러 속성에 애니메이션을 한번에 적용 할 수 있으며, 중첩된 타임라인 없이 복잡한 애니메이션을 보다 빠르고 쉽게 정의할 수 있다.

#### 👉 실습 예제 Challenges 1 (scale and rotation) : <https://codepen.io/byahram/pen/JjeZNWO>

```javascript
console.log(gsap.version) // 3.9 +

const tl = gsap.timeline();
tl.to('.among',{
  keyframes:{
    '0%':{scale:1},
    '10%':{scale:0.5},
    '70%':{scale:3,rotation:360},
    '100%':{scale:1},
  },
  duration:1.5
})

GSDevTools.create();
```

#### 👉 실습 예제 Challenges 2 (Wrap Around) : <https://codepen.io/byahram/pen/oNQyWyM>

```javascript
console.log(gsap.version) // need 3.9+

const tl = gsap.timeline()
//add keyframe animation here
tl.to(".among", {
	keyframes:{
    "30%":{x:420},
    "50%":{scale:2},
    "60%":{x:0},
    "70%":{scale:1},
    "100%":{x:420},
	},
	duration: 3
})

GSDevTools.create();
```

<br>
