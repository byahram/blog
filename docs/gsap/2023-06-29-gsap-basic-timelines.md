---
title: "[GSAP] GSAP Basic - Timelines"
categories: [Web Programming, GSAP]
tags: [js, gsap, animation]
comments : true
---


---
![gsap thumbnail](/assets/img/thumbnail/gsap.png)
---


## 타임라인이 중요한 이유

#### 👉 실습 예제 : <https://codepen.io/kindtigerr/pen/JjpgWGE>

<br>

## 기초 타임라인
타임라인은 gsap.timeline()으로 생성된다.

타임라인은 모든 트윈을 자연스럽게 순서대로 재생처리한다.

```
💡 대상의 크기만큼 이동할 경우

px 값을 입력하기 보다는 퍼센트 단위를 입력하는게 좋다.

x: “100%”
`xPercent(100)   =  transform:translateX(100%)`
`yPercent(100)   =  transform:translateY(100%)`
```

#### 👉 실습 예제 : <https://codepen.io/byahram/pen/LYXyrbO>

<br>

## Position Parameter 시각적 효과
타임라인 위치 매개변수 설정

위치 매개변수를 사용하면 타임라인에서 트윈의 시작 시간을 오프셋 할 수 있다.

#### 👉 실습 예제 : <https://codepen.io/byahram/pen/XWyRYpN?editors=0010>

```javascript
const tl = gsap.timeline();
  tl.to(object, {y:300}, "+=1")  // 이전 트윈 종료 후 1초 뒤에 시작
  tl.to(object, {x:300}, "-=1")  // 이전 트윈 종료 1초 전에 시작
  tl.to(object, {rotation:90}, "<")  // 이전 트윈 시작될 때 동시에 실행
  tl.to(object, {opacity:0.5}, "<1") // 이전 트윈 시작 된 후 1초 뒤에 실행
  tl.to(object2, {x:200}, 1) // 타임라인 1초에 실행 
```

* <https://greensock.com/docs/v3/GSAP/gsap.timeline()>

<br>

## 기초 타임라인 포지션
이전에 만들었던 Basic Timeline 예제로 돌아가 몇가지 위치 매개변수를 추가하고 작동 방식을 확인한다.

#### 👉 실습 예제 : <https://codepen.io/byahram/pen/LYXyrbO>
* .sun 이 등장후 1초 뒤에 .gress가 등장하도록 하기
* .bird가 애니메이션을 시작할 때 .music 요소가 동시에 시작되도록 하기

<br>

## 타임라인의 컨트롤과 라벨링
GSAP은 타임라인에도 트윈과 동일하게 애니메이션을 제어할 수 있는 방법을 제공한다. 

ex) `play()`

Label을 사용하면 타임라인에서 특정 지점으로 이동할 수 있다.

`add()` 메서드를 사용하여 타임라인에 Label을 추가할 수 있다.

#### 👉 실습 예제 : <https://codepen.io/byahram/pen/mdQmKRG?editors=0110>

<br>
