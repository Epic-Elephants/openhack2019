import { Template } from 'meteor/templating';

import '../section.js';
import './qrotator.js';

import './srotator.html';

import { Sections } from '../../api/datasources/builtin';

Template.srotator.helpers({
    curr_section(){
        return Sections[0];
    },
    curr_questions(){
        return {questions: Sections[0].questions};
    },
    cbs(){
        return {onEOA: () => {}, onBOA: () => {}};
    }
});
