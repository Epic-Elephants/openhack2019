import { Template } from 'meteor/templating';

import '../section.js'
import './qrotator.js';
import './app.html';

import { Data } from '../../api/datasources/YoungAndNewFarmerSubsidy';

Template.app.helpers({
    curr_app(){
        Data.Application.sections.forEach(s => (s.questions.forEach(q => q.section = s.title)));
        const v = Data.Application.sections.map(s => s.questions).flat();
        console.log(v);
        return v;
    }
});
