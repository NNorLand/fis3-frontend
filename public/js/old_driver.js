$(document).ready(function() {
	var vm = new Vue({
		el: '#old-driver-container',
		data: {
			nickName: getUrlParam("nickName") || "老司机",
			series: [],
			models: [],
			selectedSerie: '',
			selectedModel: []
		},
		methods: {
			getSeries: () => {
				axios.get('http://m.30sche.com/drivercar/', {
					withCredentials:true,
				}).then(function (response) {
					console.info(response)
				})
				.catch(function (error) {
					console.log(error);
				});
			}
		},
		watch: {
			selectedSerie: (val) => {
				axios.get('http://m.30sche.com/series/', {
					manu_id: val
				}).then(function (response) {
					console.info(response)
				})
				.catch(function (error) {
					console.log(error);
				});
			}
		}
	})

	function getUrlParam(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) {
			return decodeURI(r[2]);
		}
		return null;
	}
	vm.getSeries();
})