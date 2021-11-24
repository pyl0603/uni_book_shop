<template>
	<view>
		<u-swiper  :list="slides" name="img_url" height="320"></u-swiper>
		<view class="tabs">
			<u-tabs  :list="SortList" bar-width="100" inactive-color="" item-width="160" :current="currenSort"
				@change="changeSort"></u-tabs>
		</view>
		<u-row gutter="2"  class="u-skeleton">
			<u-col span="6" v-for="item in goods.length !==0 ? goods:4">
				<GoodsCard :item="item"></GoodsCard>
			</u-col>
		</u-row>
		<u-skeleton :loading="loading" :animation="true"></u-skeleton>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				SortList: [{
						name: '默认'
					},
					{
						name: '销量'
					},
					{
						name: '推荐'
					},
					{
						name: '最新'
					}
				],
				currenSort: 0,
				slides: [],
				goods: '',
				page: 1,
				loading:false
			}
		},
		onLoad() {
			this.GetData()
		},
		methods: {
			changeSort(index) {
				this.currenSort = index;
				this.goods = []
				this.page = 1
				this.GetData()
			},
			async GetData() {
				this.loading = true;
				const params = {
					page: this.page
				}
				
				if(this.currenSort == 1) params.sales = 1;
				if(this.currenSort == 2) params.recommend = 1;
				if(this.currenSort == 3) params.new = 1;
				
				
				const {
					goods,
					slides,
					categories
				} = await this.$u.api.index(params)
				this.slides = slides
				this.goods = [...this.goods, ...goods.data]
				this.loading = false
			}
		},
		onReachBottom() {
			this.page = this.page + 1;
			this.GetData()

		}
	}
</script>

<style lang="scss" scoped>
	.tabs {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 30rpx;
	}

</style>
