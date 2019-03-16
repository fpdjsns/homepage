import { ActionTree, Dispatch, Commit } from 'vuex';
import { googleSpreadSheetApi } from '../../api';

export const namespaced = true;

export class TodoItem {
    name: string = '';
    todo: string = '';

    constructor(name: string, todo: string) {
        this.name = name;
        this.todo = todo;
    }
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
            state.todos.push(new TodoItem(todo[0], todo[1]));
        });
    }
};

export const actions: ActionTree<State, any> = {
    getTodos({ commit }): void {
        console.log('getTodo');
        googleSpreadSheetApi.fetchTodos()
            .then(response => {
                commit('SET_TODO', response.data.values)
            })
    }
}