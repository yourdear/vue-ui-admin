
class Test {
    static runRouter(router) {
        router.beforeEach((to, from, next)=> {
            console.log(to)
            console.log(from)
            next()
        })
    }
    static getStore() {
        const state = {
            pageTest: 0
        }

        const mutations = {
            CHANGETEST: (state)=> {
                state.pageTest += 1
            }
        }
        const actions = {
            AYSNCCHANGETEST: ({commit})=> {
                commit('CHANGETEST')
            }
        }
        return {
            test: {
                namespaced: true,
                state,
                mutations,
                actions
            }
        }
    }
}

export default Test
