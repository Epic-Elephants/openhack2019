import { Template } from 'meteor/templating';

import '../question.js';
import './qrotator.html';

import { Sections } from '../../api/datasources/builtin';

Template.qrotator.onCreated(function qrotatorOnCreated() {

});

Template.qrotator.helpers({
    curr_question(){
        if(!this.counter)
            this.counter = new ReactiveVar(0);
        return Sections[0].questions[this.counter.get()]; }
});

Template.qrotator.events({
    'click .js-next'(e, t){
        console.log(t);
        // call to save child q
        t.data.counter.set(t.data.counter.get() + 1);
    },
});
