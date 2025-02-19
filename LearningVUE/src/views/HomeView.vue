<template>
  <main>
    <h1>Sass Animation</h1>
    <div class="container">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </main>
</template>
<style lang="scss">
.container {
  width: 400px;
  height: 400px;
  margin: 0 auto;
  margin-top: 80px;
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  transition: 0.3s;
}

.item {
  background-color: black;
  animation: move 2s infinite;
}

@for $i from 0 through 8 {
  .item:nth-child(#{$i + 1}) {
    background-color: hsl(45deg * $i, 100%, 74%);
  }

  .container:has(.item:nth-child(#{$i + 1}):hover) {
    $r: floor($i / 3 + 1);
    $c: $i % 3 + 1;
    $arr: 1fr 1fr 1fr;
    $rows: set-nth($arr, $r, 2fr);
    $colums: set-nth($arr, $c, 2fr);
    grid-template-columns: $colums;
    grid-template-rows: $rows;
  }
}
</style>
