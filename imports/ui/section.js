import { Template } from 'meteor/templating';

import './section.html';

const i18n = 0;

Template.section.helpers({
    i18n_title(){ console.log(this); return this.section[i18n]; },
});
