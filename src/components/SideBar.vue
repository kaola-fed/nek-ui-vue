<template>
    <div class="kl-sidebar" >
        <div class="kl-menu-list">
            <ul class="kl-menu-list__root">
                <li v-for="item in menuItem.itemTop" class="kl-menu-list__top" >
                    <div class="kl-menu-list__title-zh">
                        <!-- <a href=""  class="current">{{item.title}}</a> -->
                        <router-link :to="{ name: `${item.titleEn}`}" class="kl-submenu__item current"> 
                            {{item.title}}
                        </router-link>
                    </div>
                </li>
                <li >
                    <div class="kl-menu-list__title-zh">
                        组件
                    </div>
                </li>
                <li v-for="item in menuItem.componentItem">
                    <div class="kl-menu-list__title-zh">
                        <!-- <i class="kl-icon--arrow-down" /> -->
                        <span class="kl-u-icon', 'kl-u-icon-angle-down"></span>
                        {{item.title}}
                    </div>
                    <ul class="kl-submenu">
                        <li v-for="subItem in item.children">
                            <router-link :to="{ name: `${subItem.titleEn}`}" class="kl-submenu__item"> 
                                {{subItem.title}} <span class="kl-menu-list__title-en">{{subItem.titleEn}}</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import menuItem from './menuItem';
export default {
    data() {
        return {
            menuItem
        };
    },
    methods: {

    },
    watch: {
        
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@component-namespace kl {
    @b sidebar {
        @media (max-width: 900px) { 
            display: none;
        }
        position: fixed;
        z-index: 10;
        top: 62px;
        left: 0;
        bottom: 0;
        width: 250px;
        margin-right: 20px;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        border-right: 1px #e3e8ed solid;
        .kl-u-icon {
            margin-left: -14px;
            margin-right: 8px;
            font-size: 14px;
        }
    }
    @b menu-list {
        border-bottom: 1px solid #dfeaf3;
        user-select: none;
        @e root {
            padding-left: 0;
            margin-left: 0;
        }
        @e title-zh {
            font-weight: 700;
            padding: 12px 0 11px 40px;
            font-size: 14px;
            color: #34495e;
        }
        @e title-en {
            color: #999;
            &:hover {
                color: #00c4c0;
            }
        }
        ul {
            list-style-type: none;
            margin: 0;
            line-height: 1.8em;
        }
        li {
            box-sizing: border-box;
            border-bottom: 1px #e3e8ed solid;
            background-color: #fff;
            text-align: left;
        }
        .kl-menu-list__top {
            border: none;
            a {
                /*&:before {
                    content: ' ';
                    display: inline-block;
                    width: 2px;
                    height: 10px;
                    background-color: transparent;
                };*/
                &:hover {
                    color: #00c4c0;
                    text-decoration: none;
                    display: inline-block;
                    /*&:before {
                        background-color: #00c4c0
                    }*/
                };
            }
        }
    }
    @b submenu {
        li {
            border-bottom: 0px #e3e8ed solid;
            margin-bottom: 15px;
            padding: 0 0 0 40px;
        }
        @e item {
            font-size: 12px;
            color: #34495e;
            &&:before {
                content: ' ';
                display: inline-block;
                width: 2px;
                height: 10px;
                background-color: transparent;
            };
            &&:hover {
                color: #00c4c0;
                outline: 0;
                cursor: pointer;
                text-decoration: none;
                &&::before {
                    background-color: #00c4c0
                }
            };
        }
    }
    @b u-icon {
        display: inline-block;
        font: normal normal normal 14px/1 icomoon;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: inherit;
        width: 1em;
        text-align: center;

    }
    @b u-icon-angle-down {
        &::before {
            content: " ＞";
            display: inline-block;
            transform: rotateZ(90deg);
        }
    }
}
</style>
