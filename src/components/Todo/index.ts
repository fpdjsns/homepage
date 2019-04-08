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
    styleTable: object = {
        borderCollapse: 'collapse',
        padding: '10px',
        border: '2px solid #ddd',
        borderTop: '3px solid #fb7399',
    }

    styleThead: object = {
        color: '#fb7399',
        background: '#f7e6ec',
        textAlign: 'center',
    }

    styleTbody: object = {
        color: '#0094D7'
    }

    styleTh: object = {
        padding: '5px',
    }

}