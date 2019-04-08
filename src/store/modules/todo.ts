import { ActionTree, Dispatch, Commit } from 'vuex';
import { googleSpreadSheetApi } from '../../api';

export const namespaced = true;

export class TodoItem {
    id: number = 0;
    name: string = '';
    todo: string = '';

    constructor(name: string, todo: string, id: number = 0) {
        this.id = id;
        this.name = name;
        this.todo = todo;
    };

}

export interface TodoResponse {
    values: string[]
}

interface State {
    todos: TodoItem[]
}

export const state: State = {
    todos: []
}

export const getters = {};

export const mutations = {
    SET_TODO(state: State, todos: string[]) {
        todos.forEach((todo, index) => {
            if (index == 0) return;
            state.todos.push(new TodoItem(todo[1], todo[2], Number(todo[0])));
        });
    },

    ADD_TODO(state: State, todo: TodoItem) {
        todo.id = state.todos.length + 1;
        state.todos.push(todo);
    }

};

export const actions: ActionTree<State, any> = {
    getTodos({ commit }): void {
        googleSpreadSheetApi.fetchTodos()
            .then(response => {
                commit('SET_TODO', response.data.values)
            })
    },

    addTodo({ commit }, todo: TodoItem): void {
        commit('ADD_TODO', todo);
    }
}