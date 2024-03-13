---
title: "[코딩애플] 인스타그램을 만들며 배워보는 Vue.js3 완벽 가이드"
---

# Vue.js 3 완벽 가이드

<https://codingapple.com/course/vue-js/>


## Part 1 : 부동산 쇼핑몰

### 1. 데이터 바인딩

```javascript
// JavaScript에서 자바스크립트 변수나 데이터를 HTML에 꽂아 넣는 데이터 바인딩
document.getElementById(어쩌구).innerHTML = 데이터;
```

```html
<!-- 
    Vue에서는 
    1. 데이터 보관하고
    2. {{ 데이터 }} 문법으로 HTML 중간에 꽂아 넣으면 된다
  -->

<template>
  <div>
    <h4 :style="스타일">XX 원룸</h4>
    <p>{{ price1 }} 만원</p>
  </div>
</template>

<script>
export default {
  name : 'App',
  data(){
    return {
      price1 : 60,
      스타일 : 'color:red'
    }
  }
}
</script>
```

### 2. 반복문 v-for

```html
<div class="menu">
  <a v-for="작명 in 3" :key="작명">Home</a>
</div>

<div class="menu">
  <a v-for="(작명,i) in 메뉴들" :key="i"> {{ 작명 }}</a>
</div>
```

### 3. Vue 이벤트 핸들러

```html
<div>
  <h4>{{products[0]}}</h4>
  <p>50만원</p>
  <button @click="신고수++">허위매물신고</button>
  <button @click="increase()">허위매물신고</button>
  <span>신고수 : {신고수}</span>
</div>
```

```javascript
data(){
  return {
    신고수 : 0,
  },
}

methods : { 
  increase(){ 
    this.신고수 += 1 
  } 
}
```

### 4. v-if와 모달창 만들기

### 5. 

### 

### 

<br>

## Part 2 : 부동산 쇼핑몰

<br>

## Part 3 : 부동산 쇼핑몰