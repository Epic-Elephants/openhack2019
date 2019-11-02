import { Template } from 'meteor/templating';

import './field.js';
import './question.html';

const i18n = 0;

function attrs(q, ret){
    if(q.length)
        ret.size = q.length;
    if(q.max_length)
        ret.maxlength = q.max_length;
    return ret;
}

Template.question.helpers({
    i18n_title(){ return this.title[i18n]; },
    i18n_col(col){ return col.col[i18n]; },
    isTable(){return this.type === 'array';},
    value_cb_factory(){
        return Object.assign(this, {
            on_change(val){this.var = val;},
        });
    },
    edit(){return true;},
});

Template.question.events({
    'click .js-next'(e, t){
        console.log(t.data.var);
    },
});

