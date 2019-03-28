import { Vue, Component, Prop } from "vue-property-decorator";
import { mapState, mapActions } from "../../../node_modules/vuex";

@Component({
    template: require('./Todo.html'),
    computed: {
        ...mapState('todo', ['todos'])
    },
})
export default class Todo extends Vue {
    created() {
        console.log(process.env.NOW);
        this.$store.dispatch('todo/getTodos');
    }

    // Style
    styleThead: object = {
        color: 'red'
    }

    styleTbody: object = {
        color: 'blue'
    }

}