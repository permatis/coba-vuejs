<template>
    <div id="home">
        <div class="row">
        <div class="col-sm-6">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3>Add New Tweets</h3>
                </div>
                <div class="panel-body">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Write something..." v-model="event.name">
                    </div>
                    <button class="btn btn-success" @click="addEvent">Submit</button>
                </div>
            </div>
        </div>
          <div class="col-sm-6">
            <h3>Recent Tweets</h3>
            <h5 v-show="! orderById.length">Write something bro!!!</h5>
            <div class="list-group">
                <a href="javascript:void(0)" class="list-group-item" v-for="event in orderById" :key="event.id">
                    <button class="btn btn-xs pull-right" @click="deleteEvent(event)" title="Delete">
                        <i class="glyphicon glyphicon-trash"></i>
                    </button>
                    <h5>{{ event.name }}</h5>
                    <i class="glyphicon glyphicon-heart-empty" title="Like"></i> &nbsp; &nbsp;
                    <i class="glyphicon glyphicon-retweet" title="Retweet"></i>
                </a>
            </div>
          </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import _ from 'lodash'
export default {
    data () {
        return {
            event: { name: '' },
            events: []
        }
    },
    ready: {

    },
    methods: {
        addEvent: function () {
            if (this.event.name) {
                this.events.push(this.event)
                this.event = { name: '' }
            }
        },
        deleteEvent: function (event) {
            if (confirm('Are you sure delete this event?')) {
                var index = this.events.indexOf(event)
                this.events.splice(index, 1)
            }
        }
    },
    computed: {
        orderById: function () {
            return _.orderBy(this.events, 'name', 'desc')
        }
    }
}
</script>
