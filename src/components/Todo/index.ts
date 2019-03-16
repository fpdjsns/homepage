import { Vue, Component, Prop } from "vue-property-decorator";
import { mapState, mapActions } from "../../../node_modules/vuex";

// class TodoItem {
//     name: string = '';
//     todo: string = '';

//     constructor(name: string, todo: string) {
//         this.name = name;
//         this.todo = todo;
//     }
// }

@Component({
    template: require('./Todo.html'),
    computed: {
        ...mapState('todo', ['todos'])
    },
    // methods: {
    //     ...mapActions('todo', ['getTodos'])
    // }
})
export default class Todo extends Vue {
    // todos: TodoItem[] = [
    //     new TodoItem("아침","늦잠자라"),
    //     new TodoItem("점심","낮잠자라"),
    //     new TodoItem("아침","이제자라")
    // ];
    created() {
        this.$store.dispatch('todo/getTodos');
    }

}