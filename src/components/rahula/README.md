# IndraRahula

Component: `./src/components/rahula/`

## Welcome
Welcome to getting your new component started.  To get it installed in your application it requires a few manual steps from you.  Sure we could have automated this for you, but over time automating this next step could potentially cause more problems then it solves so adding your new component to your app in your way is your job.

### Getting Started
If you are using the basic structure of indra.design and this is a global component you'll want to install this in the `App.vue` file.  See the steps below to accomplish this.

1. Add the component import in the script block and then insert the variable into the components object of the `App`
```javascript
  // add this import line
  import IndraRahula from './components/rahula/index.vue';

  export default {
    name: 'App',
    components: {
      IndraRahula, // add this
    },
    data() {
      return {};
    },
    computed: {},
    methods: {},
  }
```

2. Adding the store files to the global listing `./src/store/index.js`   
```javascript
  // add this import line
  import {rahula} from '../components/rahula/store.js'

  export default new Vuex.Store({
    modules: {
      global,
      rahula, // add this
    }
  })
```

3. Using your new component.  From here your blank component is ready to use in your app and develop amazing new ideas from.
```html
  <IndraRahula></IndraRahula>
```

### Coding Habits
Enjoy using the component and remember to keep your README updated and your tests checking your code to help develop good coding habits.
