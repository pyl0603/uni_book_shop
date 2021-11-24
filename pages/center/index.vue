<template>
	<view>
个人中心
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			this.$u.utils.isLogin()
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>

</style>
