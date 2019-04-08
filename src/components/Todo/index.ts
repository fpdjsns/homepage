import { Vue, Component } from "vue-property-decorator";
import { mapState } from "../../../node_modules/vuex";
import { TodoItem } from "../../store/modules/todo"

@Component({
    template: require('./Todo.html'),
    computed: {
        ...mapState('todo', ['todos'])
    }
})
export default class Todo extends Vue {

    name: string = '';
    todo: string = '';

    created() {
        console.log(process.env.NOW);
        this.$store.dispatch('todo/getTodos');
    }

    addTodo() {
        this.$store.dispatch('todo/addTodo', new TodoItem(this.name, this.todo));
        this.name = ''; this.todo = '';
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