import { Template } from 'meteor/templating';

import '../question.js';
import './qrotator.html';

Template.qrotator.helpers({
    curr_section(){
        if(!this.counter)
            this.counter = new ReactiveVar(0);
        return {section: this.questions[this.counter.get()].section};
    },
    curr_question(){
        return this.questions[this.counter.get()]; },
    begOfArray(){
        return this.counter.get() === 0;
    },
    endOfArray(){
        return this.counter.get() === this.questions.length - 1;
    },
});

Template.qrotator.events({
    'click .js-prev'(e, t){
        $("#two").slideUp().delay(400).slideDown();
        setTimeout(function () {
            t.data.counter.set(t.data.counter.get() - 1);
        }, 300);
    },
    'click .js-next'(e, t){
        $("#two").slideUp().delay(400).slideDown();
        setTimeout(function () {
            t.data.counter.set(t.data.counter.get() + 1);
        }, 300);
    },
});
