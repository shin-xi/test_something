const DATA = { // 数据源
    "attrs": [
        { "name": "出生年月", "value": "2017-12-07" },
        { "name": "市民卡", "value": "" },
        { "name": "政治面貌", "value": "" },
        { "name": "家庭住址", "value": "" },
        { "name": "备注", "value": "无" }
    ]
}

const COLLECT = { // 收集数据
    nickname: '昵称',
    birthday: '出生年月',
    citizenCard: '市民卡',
    politicalOrientation: '政治面貌',
    homeAddress: '家庭住址',
    notes: '备注'
}

const RECORD = {
    nickname: '',
    birthday: '',
    citizenCard: '',
    politicalOrientation: '',
    homeAddress: '',
    notes: ''
};

console.log(DATA.attrs);

for (let i = 0, len = DATA.attrs.length; i < len; i++) {
    console.log(DATA.attrs[i].name);
    switch (DATA.attrs[i].name) {
        case COLLECT.nickname:
            RECORD.nickname = DATA.attrs[i].value;
            break;
        case COLLECT.birthday:
            RECORD.birthday = DATA.attrs[i].value;
            break;
        case COLLECT.citizenCard:
            RECORD.citizenCard = DATA.attrs[i].value;
            break;
        case COLLECT.politicalOrientation:
            RECORD.politicalOrientation = DATA.attrs[i].value;
            break;
        case COLLECT.homeAddress:
            RECORD.homeAddress = DATA.attrs[i].value;
            break;
        case COLLECT.notes:
            RECORD.notes = DATA.attrs[i].value;
            break;
    }
}

console.log(RECORD);