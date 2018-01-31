<!--  -->
<template>
    <div>
        <nav-header></nav-header>
        <nav-bread>
            <span slot="Bread">1</span>
            <span slot="c">2</span>
        </nav-bread>
        <div class="container">
            <div class="filter-nav">
                <span class="sortby">Sort by:</span>
                <a href="javascript:void(0)" class="default cur">Default</a>
                <a href="javascript:void(0)" class="price">Price
                    <svg class="icon icon-arrow-short">
                        <use xlink:href="#icon-arrow-short"></use>
                    </svg>
                </a>
                <a href="javascript:void(0)" class="filterby stopPop" @click="filtershow">Filter by</a>
            </div>
            <div class="accessory-result">
                <!-- filter -->
                <div class="filter stopPop" id="filter" :class="{'filterby-show':filtertoggle}">
                    <dl class="filter-price">
                        <dt>Price:</dt>
                        <dd>
                            <a href="javascript:void(0)" :class="{'cur':priceChecked=='all'}" @click="priceChecked='all'">All</a>
                        </dd>
                        <dd v-for=" (price,index) in priceFilter">
                            <a href="javascript:void(0)" :class="{'cur':priceChecked==index}" @click="setpriceChecked(index)">{{price.startPrice | money}} - {{price.endPrice | money}}</a>
                        </dd>
                    </dl>
                </div>
                <!-- search result accessories list -->
                <div class="accessory-list-wrap">s
                    <div class="accessory-list col-4">
                        <ul>
                            <li v-for="item in goodList">
                                <div class="pic">
                                    <a href="#"><img v-lazy="'static/' + item.prodcutImg" alt=""></a>
                                </div>
                                <div class="main">
                                    <div class="name">{{item.productName}}</div>
                                    <div class="price">{{item.prodcutPrice | money}}</div>
                                    <div class="btn-area">
                                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div :class="{'md-overlay':overLayFlag}" @click="closePop"></div>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import "./../assets/css/base.css";
import "./../assets/css/product.css";
import NavHeader from "@/components/Header";
import NavFooter from "./../components/footer";
import NavBread from "./../components/solt";
import axios from "axios";
export default {
  data() {
    return {
      goodList: [],
      priceChecked: "all",
      flg: false,
      filtertoggle: false,
      overLayFlag: false,
      priceFilter: [
        {
          startPrice: "0",
          endPrice: "100"
        },
        {
          startPrice: "100",
          endPrice: "500"
        },
        {
          startPrice: "500",
          endPrice: "100"
        },
        {
          startPrice: "1000",
          endPrice: "2000"
        }
      ]
    };
  },
  filters: {
    money(value) {
      return "￥" + parseFloat(value).toFixed(2);
    }
  },
  components: {
    NavHeader,
    NavFooter,
    NavBread
  },
  mounted() {
    this.getGoodlist();
  },
  computed: {},

  methods: {
    getGoodlist() {
      axios.get("/goods").then(res => {
        this.goodList = res.data.result;
      });
    },
    toggleflg(price) {
      price.flg = true;
      console.log(JSON.stringify(price));
    },
    // 价格表显示
    filtershow() {
      this.filtertoggle = true;
      this.overLayFlag = true;
    },
    closePop() {
      this.filtertoggle = false;
      this.overLayFlag = false;
    },
    setpriceChecked(index) {
      this.filtertoggle = false;
      this.overLayFlag = false;
      this.priceChecked = index;
      console.log(index)
    }
  }
};
</script>
<style lang='scss' scoped>

</style>