import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		restaurantName: "Boulangerie",
		shoppingCart: 0,
		simpleMenu: [
			{
				name: "Croissant",
				image: {
					source: "/img/icons/Croissant.PNG",
					alt: "Un croissant"
				},
				inStock: true,
				quantity: 1,
				price: 1.00
			},
			{
				name: "Pain au chocolat",
				image: {
					source: "/img/icons/PainChoco.png",
					alt: "Pain au chocolat"
				},
				inStock: true,
				quantity: 1,
				price: 1.05
			},
			{
				name: "Pain au raisin",
				image: {
					source: "/img/icons/PainRaisin.png",
					alt: "PainRaisin"
				},
				inStock: false,
				quantity: 1,
				price: 1.25
			}
		]
	},
	getters: {
		copyright: (state) => {
			const currentYear = new Date().getFullYear()

			return `Copyright ${state.restaurantName} ${currentYear}`
		}
	},
	mutations: {
		ADD_ITEMS_TO_SHOPPING_CART(state, amount) {
			state.shoppingCart += amount
		}
	},
	actions: {
		updateShoppingCart({ commit }, amount) {
			commit("ADD_ITEMS_TO_SHOPPING_CART", amount)
		}
	},
	modules: {}
})