---
title: "[GSAP] GSAP Basic - Tweening Basic"
categories: [Web Programming, GSAP]
tags: [js, gsap, animation]
comments : true
---


---
![gsap thumbnail](/assets/img/thumbnail/gsap.png)
---


## GSAP Object
GSAP 엔진을 이용해 제어할 수 있는 속성은 다음과 같다.
* Create animations
* Configure settings
* Register plugins, eases, and effects
* Global control over all animations


### 1. Tweens
Tweens는 모든 애니메이션이 작동하는 역할을 말하며,  ( **high-performance property setter**  )

대상 ( 애니메이션을 적용할 객체) 에게 duration, animation-properties 정보를 입력하는 하나의 단위로 해석한다.

Tween은 3가지의 methods를 가지고 애니메이션을 만들 수 있으며 각각의 트윈엔 기본 규칙으로 target과 vars object 옵션을 가진다.

* gsap.to()
```javascript
gsap.to('.elem',{duration:1,x:100,y:100,rotation:45});
```
* gsap.from()
```javascript
gsap.from('.elem',{duration:1,x:100,y:100,rotation:45});
```
* gsap.fromTo()
```javascript
gsap.fromTo('.elem',
{duration:1,x:-100,y:-100,rotation:-45},
{duration:1,x:100,y:100,rotation:45});
```
#### 👉 실습 예제 : <https://codepen.io/byahram/pen/OJamZoE>

### 2. Staggers
stagger 기능을 사용하면 각 개체의 애니메이션의 시작 사이에 약간의 지연시간을 넣어 보다 쉽게 제어할 수 있다.
```javascript
gsap.from(".box", {duration: 2, scale: 0.5, opacity: 0, delay: 0.5, stagger: 0.2, ease: "elastic", force3D: true});
```
#### 👉 실습 예제 : <https://codepen.io/byahram/pen/XWyRqxb>

### 3. Timeline
타임라인을 사용하면 복잡한 시퀀스의 애니메이션을 아주 간단하게 만들 수 있다.
```javascript
var tl = gsap.timeline();

tl.to(".green", {duration: 1, x: 200});
tl.to(".orange", {duration: 1, x: 200, scale: 0.2});
tl.to(".grey", {duration: 1, x: 200, scale: 2, y: 20});
```

### 4. Controlling Animations
tween을 컨트롤 할 수 있는 method를 제공한다.

#### 👉 실습 예제 : <https://codepen.io/byahram/pen/oNQWyxo>

<br>

## 기초 트윈

```javascript
// to() 트윈의 기본구문
// 재생속도를 정하지 않았다면 gsap은 기본값인 0.5s(500ms)를 사용한다.
gsap.to(’elem’,{x:400})

// 해당 명령어를 통해 기본 지속 시간을 변경할 수 있다.
gsap.defaults({duration:1});
```

* <https://greensock.com/docs/v3/GSAP/gsap.to()?ref=6234>
* <https://greensock.com/docs/v3/GSAP/gsap.defaults()?ref=6234>

### Short Codes Properties

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

GSAP은 사용자가 던진 모든 숫자 속성에 대해 애니메이션을 적용할 수 있다.
1. width and height
2. backgroundColor ***hyphenated values need to be camelCase**
3. color
4. padding
5. left and top (must set position to relative, absolute, or fixed)
6. vh and vw

#### 👉 실습 예제 : <https://codepen.io/byahram/pen/MWzmGdW>

<br>

## from()과 fromTo()
```javascript
// gsap.from() 메서드는 지정한 값(위치)에서 부터 원래의 값(위치)으로 애니메이션 된다.
gsap.from('.orange',{x:400, y:400});
```

```javascript
// gsap.fromTo()는 지정한 값에서 지정한 값으로 애니메이션을 적용한다.
// 아래 코드에 사용된 2개의 객체는 from vars와 to vars로 작동된다.

gsap.fromTo('.orange', {x:400, y:400}, {x:200, y:200});
```

#### 👉 실습 예제 : <https://codepen.io/byahram/pen/MWzmGdW>

<br>

## 지연과 반복
스페셜 속성은 애니메이션이 실행되는 방식과 수행해야 하는 작업을 정의한다.

특수 속성은 애니메이션 되지 않는다.

- delay : 애니메이션이 시작되기 전에 지연시간을 지정합니다.
- repeat : 애니메이션이 몇번 반복되어야 하는지를 지정합니다.
  * 무한 반복은 repeat: -1 을 설정하면 애니메이션이 무기한 반복됩니다.
- yoyo : `true` 로 설정하면 애니메이션이 앞뒤로 재생됩니다.
  * yoyo 속성은 repeat 설정이 들어있어야 사용가능합니다.
- repeatDelay : 각 반복 사이에 발생하는 지연시간을 지정합니다.

#### 👉 실습 예제 : <https://codepen.io/byahram/pen/LYXyrVj>

<br>

## 가속도
ease는 애니메이션이 재생될 때의 변경 속도를 제어한다.

간단한 사용에서 ease는 애니메이션이 느려지거나 빨라지는지에 대한 여부를 제어한다.

가속도 제어는 ease를 기본값(default)로 가지며, 커브가 가파를수록 더 급격한 변화를 만들 수 있다.

- **`ease:”bounce”`** 애니메이션이 빠질 때 바운스 됩니다.
- **`ease:”bounce.in”`** 애니메이션이 들어올 때 바운스 됩니다.
- **`ease:”bounce.inOut”`** 애니메이션이 들어오고 빠질 때 바운스 됩니다.
- <https://greensock.com/docs/v3/Eases?ref=6234>

```
💡 곡선 규칙 
Steep curve = fast rate of change
Flat curve = slow rate of change
```

#### 👉 실습 예제 : <https://codepen.io/byahram/pen/WNYjyQB>

<br>

## 다중 요소 제어하기
stagger속성을 사용하면 단일 트윈에서 여러 대상의 시작 시간을 오프셋 설정할 수 있다.

GSAP3에서는 GSAP2의 staggerTo(), staggerFrom(), stagger-FromTo() 메서드가 더 이상 필요하지 않다.

```javascript
// 각 이미지는 이전 이미지가 시작된 후 0.2초 후에 시작된다.
gsap.to(".stage .box", {y:-100, stagger:0.2});
```

stagger 객체를 사용하면 stagger가 시작되는 위치와 타이밍이 분산되는 방식을 더 잘 제어할 수 있습니다.

```javascript
gsap.to(".stage .box", {y:-50, stagger:{
  each:0.2,
  from:"end"
  }
});

// 1. each :0.2 는 각 애니메이션의 시작 사이에 0.2초가 있음을 의미합니다.
// 2. amount:0.2 는 모든 애니메이션이 0.2초 이내에 시작됩니다.
```

```
💡 from 으로 받을 수 있는 값
: first, end, center, edges
```

#### 👉 실습 예제 : <https://codepen.io/byahram/pen/VwVbdeQ>

<br>

## 트윈 컨트롤
Tween에는 재생을 제어하는 여러 가지 방법들이 있다.

트윈을 제어하려면 이를 참조할 방법이 필요합니다. 아래의 코드처럼 트윈을 참조하는 변수를 설정한다.

```javascript
let tween = gsap.to(".box", {x:600});
```

트윈치 자동으로 재생되지 않도록 하려면 paused 속성을 true로 설정하여 처음 자동재생을 막을 수 있다.

```javascript
let tween = gsap.to(".box", {x:600, paused:true});
```

해당 트윈을 재생하려면 나중에 다음을 호출할 수 있다.

```javascript
tween.play();
tween.pause();
tween.resume();
tween.reverse();
tween.restart();
```

#### 👉 실습 예제 : <https://codepen.io/byahram/pen/RwqVJRJ?editors=1111>
* <https://greensock.com/docs/v3/GSAP/Tween/play()>
* <https://greensock.com/docs/v3/GSAP/Tween/pause()>
* <https://greensock.com/docs/v3/GSAP/Tween/resume()>
* <https://greensock.com/docs/v3/GSAP/Tween/reverse()>
* <https://greensock.com/docs/v3/GSAP/Tween/restart()>

<br>

## from() 트윈의 버그
```javascript
// 에러의 원인을 확인하기 위해 gsap의 getProperty 메서드를 이용해 확인한다.
gsap.getProperty(bg,'scale')

let getter = gsap.getProperty(bg);
var x = getter("width"),
    y = getter("height", "vw"); //in vw units
```

#### 👉 실습 예제 : <https://codepen.io/byahram/pen/jOQmKMN?editors=1111>
* https://greensock.com/docs/v3/GSAP/gsap.getProperty()

<br>

## GSAP 공식 문서
* <https://greensock.com/docs/v3>

<br>
