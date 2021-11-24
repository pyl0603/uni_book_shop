const install = (Vue,vm) =>{
	const isLogin = () =>{
		const token = vm.vuex_token
		if(!token) {
			vm.$u.toast('请登录')
			setTimeout(()=>{
				vm.$u.route({
					url:'/pages/auth/login',
					type:'redirect'
				});
			},1500)
		}
	}
	vm.$u.utils = {
		isLogin
	}
}

export default {
	install
}