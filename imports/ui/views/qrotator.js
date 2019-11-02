import { Template } from 'meteor/templating';

import '../question.js';
import './qrotator.html';

Template.qrotator.helpers({
    curr_question(){
        if(!this.counter)
            this.counter = new ReactiveVar(0);
        return this.questions[this.counter.get()]; },
    endOfArray(){
        return this.questions.length - 1  === this.counter.get();
    },
    begOfArray(){
        return 0 === this.counter.get();
    }
});

Template.qrotator.events({
    'click .js-next'(e, t){
        // call to save child q
        if(t.data.max === t.data.counter.get())
            return t.data.onEOA();
        t.data.counter.set(t.data.counter.get() + 1);
    },
    'click .js-prev'(e, t){
        // call to save child q
        if(t.data.max === t.data.counter.get())
            return t.data.onBOA();
        t.data.counter.set(t.data.counter.get() - 1);
    },
});
