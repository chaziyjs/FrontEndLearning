<template>
    <div class="title">
        <span>
            Lorem ipsum dolor sit amet, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
        </span>
    </div>
</template>
<style lang="css">
.title {
    color: #333;
    line-height: 2;
}

.title span {
    background: linear-gradient(to right, #7e2f2b, #146420) no-repeat right bottom;
    background-size: 0% 2px;
    transition: background-size 0.5s;
}

.title span:hover {
    background-position: left bottom;
    background-size: 100% 2px;
}
</style>
