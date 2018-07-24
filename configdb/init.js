sequelize.sync()
    .then(() => model.symptom.create({
        id: '',
        symptomname: 'headage',
        other: 'sdfdsfs'
    }))
    .then(() => model.users.create({
        id: '',
        name: 'arm',
        lastname: 'horyshit',
        telephone: '08878',
        gender: 'male',
        symptomId: 1,
        typeUser: 1,
        status: 1,
        createdAt: '',
        updatedAt: ''
    }))
    .then(() => model.period.create({
        id: '',
        periodTime: '2012-06-18 16:26:21',
        maxUser: 10,
        countUser: 2,
        createdAt: '',
        updatedAt: ''
    }))
    .then(() => model.reseration.create({
        id: '',
        queue: 1,
        userId: 1,
        periodId: 1,
        createdAt: '',
        updatedAt: ''
    }))
    .then(() => model.dateclose.create({
        id: '',
        date: '2012-06-18 16:26:21',
        house: '16:26:21',
        createdAt: '',
        updatedAt: ''
    }))
    .then(() => model.medicine.create({
        id: '',
        medicineName: 'parasettamal',
        createdAt: '',
        updatedAt: ''
    }))
    .then(() => model.profilepatent.create({
        id: '',
        userId: 1,
        medicineId: 1,
        diagnose: 'Not ok',
        createdAt: '',
        updatedAt: ''
    }))
    .then(() => model.dataapi.create({
        id: '',
        Action: 'GET',
        PathParameters: 'userId',
        Respone: 'Not ok',
        Data: 'test',
        createdAt: '',
        updatedAt: ''
    }))
    

