import { Template } from 'meteor/templating';

import './field.html';

const i18n = 0;

function attrs(q, ret){
    if(q.length)
        ret.size = q.length;
    if(q.max_length)
        ret.maxlength = q.max_length;
    return ret;
}
function numberAttrs(q){
    let ret = attrs(q, {type: 'number'});
    if(q.range){
        if(q.range.min)
            ret.min = q.range.min;
        if(q.range.max)
            ret.max = q.range.max;
    }
    return ret;
}

Template.field.helpers({
    isString(){return this.type === 'string';},
    isNumber(){return this.type === 'number';},
    isPercentage(){return this.type === 'percentage';},
    isRadio(){return this.type === 'radio';},
    i18n_radio_values(){return this.choices.map(v => v[i18n]);},
    stringAttrs(){return attrs(this, {type: 'text'});},
    numberAttrs(){return numberAttrs(this);},
    percentageAttrs(){
        this.range = {min: 0, max: 100};
        return numberAttrs(this);
    },
});

Template.field.events({
    'change .js-field'(e, t){
        console.log(t);
        console.log(this);
        t.reactive_var.set(e.target.value);
    },
});
