import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
const store = new Vuex.Store({
  state: {
    policies: [
      { enrollee: { firstname: 'John', lastname: 'Doe' }, HealthPlan: { name: 'Plan A' }, Status: { name: 'Success' }, policyType: 'Health' },
      { enrollee: { firstname: 'Jane', lastname: 'Smith' }, HealthPlan: { name: 'Plan B' }, Status: { name: 'Active' }, policyType: 'Vehicle' },
      { enrollee: { firstname: 'Michael', lastname: 'Johnson' }, HealthPlan: { name: 'Plan C' }, Status: { name: 'Suspended' }, policyType: 'Home-content' },
      { enrollee: { firstname: 'Emily', lastname: 'Williams' }, HealthPlan: { name: 'Plan D' }, Status: { name: 'Expired' }, policyType: 'Gadget' },
    ],
  },
  getters: {
    filteredPolicies: (state) => (policyType, searchKeyword) => {
      return state.policies.filter((policy) => {
        const matchesPolicyType = !policyType || policy.policyType === policyType;
        const matchesSearchKeyword =
          policy.enrollee.firstname.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          policy.enrollee.lastname.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          policy.HealthPlan.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          policy.Status.name.toLowerCase().includes(searchKeyword.toLowerCase());
        return matchesPolicyType && matchesSearchKeyword;
      });
    },
  },
});

