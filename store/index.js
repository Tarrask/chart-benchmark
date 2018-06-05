

export const state = () => {
  return {
    samples: [10, 100, 1000, 10000, 100000, 500000, 1000000],
    libraries: []
  }
};

export const mutations = {
  setLibraries(state, libraries) {
    state.libraries = libraries;
  }
};

export const actions = {
  nuxtServerInit({ commit }, { app }) {
    const testRoutes = app.router.options.routes.find(el => el.path === '/test');
    const libraries = testRoutes.children.reduce((acc, route) => {
      if(route.path !== '' && route.path !== 'results') {
        acc.push({ name: route.path, url: '/test/' + route.path });
      }
      return acc;
    }, []);

    commit('setLibraries', libraries);
  }
}