import { Template } from 'meteor/templating';

import '../section.js'
import './qrotator.js';
import './app.html';

import { Sections } from '../../api/datasources/builtin';

Template.app.helpers({
    curr_app(){
        Sections.forEach(s => (s.questions.forEach(q => q.section = s.title)));
        const v = Sections.map(s => s.questions).flat();
        console.log(v);
        return v;
    }
});
