export const i18n = {
    legal: ['Legal', 'Légal'],
    what_is_your_sbi: ['What is your SBI?', 'Quel est vôtre SBI (ISI) ?'],
    sbi_tooltip: ['Single Business Identifier', 'Identifiant de Société Individuelle'],
    how_are_the_heads_of_holding: ['Who is/are the head(s) of holding?', 'Qui est/sont le(s) propriétaire(s) légal/légaux ?'],
    firstname: ['First name', 'Prénom'],
    lastname: ['Last name', 'Nom'],
    shares: ['Shares (in %)', 'Parts (en %)'],
    what_is_your_role: ['What is your role?', 'Quelle est votre rôle ?'],
    owner: ['Owner', 'Propriétaire'],
    owner_relative: ['Owner\'s relative', 'Famille d\'un propriétaire'],
    accountant: ['Accountant', 'Comptable'],
    farm_size: ['Farm size', 'Taille de la ferme'],
    what_is_your_fields_surface: ['What is your fields\' surface?', 'Quelle est la surface de votre exploitation ?'],
    how_many_animals_do_you_have: ['How many animals do you have?', 'De combien de têtes votre troupeau se constitue-t-il ?'],
};

export const Sections = [
    {
        title: i18n.legal,
        questions: [
            {title: i18n.what_is_your_sbi, type: 'number', length: 9, tooltip: i18n.sbi_tooltip},
            {title: i18n.how_are_the_heads_of_holding, type: 'array',
                of: [
                    {col: i18n.firstname, type: 'string'},
                    {col: i18n.lastname, type: 'string'},
                    {col: i18n.shares, type: 'percentage', /*rules: {sum: {op: '=', value: 100}}*/},
                ],
            },
            {title: i18n.what_is_your_role, type: 'radio', choices: [i18n.owner, i18n.owner_relative, i18n.accountant]},
        ],
    },
    {
        title: i18n.farm_size,
        questions: [
            {title: i18n.what_is_your_fields_surface, type: 'number', range: {min: 1}},
            {title: i18n.how_many_animals_do_you_have, type: 'number', range: {min: 0}},
        ],
    },
];
