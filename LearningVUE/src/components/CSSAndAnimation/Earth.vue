<template>
  <div class="container">
    <div class="sun"></div>
    <div class="orbit earth">
      <div class="globe earth">
        <div class="orbit moon">
          <div class="globe moon"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.container {
  position: relative;
  width: 400px;
  height: 400px;
}

.sun {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background: yellow;
  border-radius: 50%;
  box-shadow: 0 0 30px white;
  top: 150px;
  left: 150px;
}

.globe {
  border-radius: 50%;
  position: absolute;
}

.globe.earth {
  background: aqua;
  width: 30px;
  height: 30px;
  right: 28px;
  top: 28px;
}

.globe.moon {
  background: #d6d6d6;
  width: 12px;
  height: 12px;
  right: 8px;
  top: 8px;
}

.orbit {
  position: absolute;
  border: solid;
  border-color: white transparent transparent transparent;
  border-radius: 50%;
  border-width: 1px 1px 0 0;
  box-sizing: border-box;
  transform: rotate(0deg);
  transform-origin: center;
}

.orbit.earth {
  position: relative;
  animation: orbit 36.5s linear infinite;
  width: 300px;
  height: 300px;
  left: 50px;
  top: 50px;
}

.orbit.moon {
  width: 80px;
  height: 80px;
  left: -25px;
  top: -25px;
  animation: orbit 2.7s linear infinite;
}

@keyframes orbit {
  to {
    transform: rotate(360deg);
  }
}
</style>
