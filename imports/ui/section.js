import { Template } from 'meteor/templating';

import './section.html';

const i18n = 0;

Template.section.helpers({
    i18n_title(){ return this.title[i18n]; },
});
