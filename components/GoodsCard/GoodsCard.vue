<template>
				<navigator url="" class="GoodsItem">
					<u-image width="100%" height="300rpx" :src="item.cover_url" class="u-skeleton-fillet">
					</u-image>
					<view class="title u-line-1 u-skeleton-fillet">{{item.title?item.title:'商品名称'}}</view>
					<view class="u-flex u-row-between ">
						<view class="price u-skeleton-fillet">￥{{item.price}}</view>
						<view class="sales u-skeleton-fillet">销量:{{item.sales}}</view>
					</view>
				</navigator>
</template>

<script>
	export default {
		name:"GoodsCard",
		props:{
			item:{
				type:Object,
				default:()=>({})
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.GoodsItem {
		margin-top: 30rpx;
		padding: 40rpx;
		box-shadow: 0 12rpx 20rpx 0 rgba(0, 0, 0, .1);

		.title {
			margin: 10rpx 0;
			font-size: 32rpx;
			font-weight: 500;
		}

		.price {
			color: red;
			width: 40%;
		}

		.sales {
			color: #888;
			width: 40%;
		}
	}
</style>
