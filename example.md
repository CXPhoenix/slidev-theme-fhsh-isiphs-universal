---
theme: ./
skipPageNumberLayouts:
  - cover
  - section
---

# Real Title with All slides

## This is a subtitle for slides

---

# ToC

<ToC />

---
layout: section
---

# Section Title here...

## Section Subtitle here...

---
layout: section
sectionImg: /assets/isip.hs/section-img.png
---

# 自訂 Section 圖片測試

## 使用 isip.hs 的圖片

---

# Hello World

# Can't see h1 in content area

## h2

### h3

Presentation slides for developers

[Hyper link](#)

* hello
  * world
    * there

---
layout: image
---

# Image Page

![example img](/assets/fhsh/section-img.png) {.transform-scale-130}

---
layout: section
---

# 使用 Edukai 顯示繁體中文

## 僅有中文是使用到 Edukai

---

# 中文字 h1

# 第二行 H1 無法被看見

## 這是 h2

### 這是 h3

這是一般內文

[這是超連結](#)


* 這是第一層
  * 這是第二層
    * 這是第三層


---

# 程式碼 Code

```python {monaco}
print("hello world")
print("hi")
```

---

# 程式碼 CodeRunner

```js {monaco-run} {autorun: false}
console.log("console 輸出")
```

---
layout: quiz
isOffline: true
ans: 1
---

# Question

測試用的 question

- Option
- 挑選
- 選擇
- others