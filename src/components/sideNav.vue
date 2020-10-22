<template>
    <div class="nav">
        <div class="head-nav" :class="{offset: isAlertSideNav}">
            <div class="btn" @click="alertSideNav()">
                <div v-if="!isAlertSideNav">
                    <span 
                        class="line"
                        v-for="line in 3"
                        :key="line"
                    ></span>
                </div>
                <div class="close-btn" v-else>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <h1>陈森林的博客</h1>
            <img src="../assets/img/avatar.jpg" alt="handsome boy">
        </div>
        <div class="side-nav" :class="{show: isAlertSideNav}">
            <div class="me">
                <img src="../assets/img/avatar.jpg" alt="handsome boy">
                <p class="name">陈森林的博客</p>
                <p class="tip">热爱技术</p>
            </div>
            <!-- 服务器搭好后用v-for -->
            <ul class="menu">
                <li class="menu-item" :class="{active: 0 === activeIndex}" @click="changeActive(0), alertSideNav(true)"><i class="iconfont icon-shouye"></i>首页</li>
                <li class="menu-item" :class="{active: 1 === activeIndex}" @click="changeActive(1), alertSideNav(true)"><i class="iconfont icon-diannao"></i>前端</li>
                <li class="menu-item" :class="{active: 2 === activeIndex}" @click="changeActive(2), alertSideNav(true)"><i class="iconfont icon-wangluo"></i>网络</li>
                <li class="menu-item" :class="{active: 3 === activeIndex}" @click="changeActive(3), alertSideNav(true)"><i class="iconfont icon-zhinengsuanfa"></i>算法</li>
            </ul>
        </div>
    </div>
    
</template>

<script>
export default {
    data () {
        return {
            // 侧边栏菜单选中
            activeIndex: 0,
            // 顶部菜单点击弹出侧边栏
            isAlertSideNav: false
        }
    },
    methods: {
        changeActive (index) {
            this.activeIndex = index;
        },
        alertSideNav (flag = false) {
            if (flag) {
                return;
            }
            this.isAlertSideNav = !this.isAlertSideNav;
        }
    }
}
</script>

<style lang="scss" scoped>
.nav {
    .head-nav {
        position: fixed;
        left: 0;
        right: 0;
        display: flex;
        height: 50px;
        justify-content: space-between;
        align-items: center;
        background-color: $headNavBg;
        padding: 0 20px;
        transition: all .2s ease-in;
        &.offset {
            transform: translateX(250px);
        }
        @media screen and (min-width: 765px) {
            display: none;
        }
        .btn {
            cursor: pointer;
            span {
                width: 26px;
                height: 4px;
                border-radius: 2px;
                background-color: $headFontColor;
            }
            .line {
                display: block;
                margin: 5px 0;
            }
            .close-btn {
                span {
                    display: inline-block;
                }
                span:nth-of-type(1) {
                    transform: rotate(45deg);
                }
                span:nth-of-type(2) {
                    transform: translateX(-26px) rotate(-45deg);
                }
            }
        }
        h1 {
            color: $headFontColor;
            font-weight: bold;
        }
        img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
    }
    .side-nav {
        position: fixed;
        top: 0;
        bottom: 0;
        width: 250px;
        background-color: $sideNavBg;
        text-align: center;
        overflow-y: auto;
        transition: all .2s ease-in;
        @media screen and (max-width: 765px) {
            transform: translateX(-250px);
        }
        &.show {
            @media screen and (max-width: 765px) {
                transform: translateX(0px);
            }
        }
        .me {
            img {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                margin-top: 40px;
            }
            .name {
                font-size: 18px;
                color: $nameColor;
                padding: 12px 0 22px;
            }
            .tip {
                font-size: 15px;
                color: $tipColor;
                padding-bottom: 18px;
            }
        }
        .menu {
            text-align: left;
            .menu-item {
                cursor: pointer;
                font-size: 16px;
                color: $menuFontColor;
                transition: all .2s;
                padding: 0 40px;
                height: 40px;
                line-height: 45px;
                .iconfont {
                    display: inline-block;
                    margin-right: 28px;
                }
                &:hover {
                    color: $menuFontHover;
                }
                &.active {
                    background-color: $menuBg;
                    color: $menuFontHover;
                }
            }
        }
    }
}
</style>
