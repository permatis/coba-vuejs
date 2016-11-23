<template>
    <div id="contact">
        <h1>Contact Page</h1>
        <div class="row">
            <div class="col-sm-6">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3>Add New Todos</h3>
                    </div>
                    <div class="panel-body">
                        <div class="form-group">
                            <!-- <input
                                :value="test.name"
                                @input="updateTodo(test, $event.target.value)"
                                v-if="edit"
                            > -->
                            <input class="form-control"
                                v-model.trim="test"
                                @keyup.enter="addTodos"
                                placeholder="Add new todo"
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <ul>
                    <li v-for="test in tests" key="test.id">
                        {{ test.name }}
                        <button @click="EditTodo(test)">edit</button>
                        <button @click="removeTodo(test)">X</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import firebase from 'firebase'
import { fr } from './../helper'

var todosRef = fr(firebase).ref('tests');

export default {
    firebase: {
        tests: todosRef
    },
    ready: {
        edit: false
    },
    methods: {
        addTodos: function () {
            this.$firebaseRefs.tests.push({
                name: this.test
            })
            this.test = ''
        },
        EditTodo: function (todo) {
            this.test = todo
        },
        updateTodo: function (todo, newText) {
            todosRef.child(todo['.key']).child('name').set(newText)
        },
        removeTodo: function (todo) {
            todosRef.child(todo['.key']).remove()
        }
    }
}
</script>